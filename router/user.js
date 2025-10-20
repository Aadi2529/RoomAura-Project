const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/user");
const twilio = require("twilio");

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// ---------------- AUTH ROUTES ----------------

router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.renderSignup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login"
    }),
    userController.renderLogin
  );

// Log Out Route
router.get("/logout", userController.renderLogout);

// ---------------- MOBILE LOGIN ----------------

router.get("/mobile-login", (req, res) => {
  res.render("users/mobile-login");
});

router.post("/mobile-login", async (req, res) => {
  try {
    const { mobile } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    req.session.otp = otp;
    req.session.mobile = mobile;

    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE,
      to: mobile
    });

    req.flash("success", "OTP sent to your mobile number.");
    res.redirect("/verify-otp");
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to send OTP. Please try again.");
    res.redirect("/mobile-login");
  }
});

// ✅ FIXED THIS ROUTE — removed misplaced options block
router.get("/verify-otp", (req, res) => {
  res.render("users/verify-otp");
});

router.post("/verify-otp", async (req, res, next) => {
  const { otp } = req.body;

  if (otp === req.session.otp) {
    let user = await User.findOne({ mobile: req.session.mobile });

    if (!user) {
      user = new User({
        mobile: req.session.mobile,
        username: `user${req.session.mobile}`
      });
      await user.save();
    }

    req.login(user, err => {
      if (err) return next(err);
      req.flash("success", "Logged in successfully with mobile number!");
      return res.redirect("/listings");
    });
  } else {
    req.flash("error", "Invalid OTP. Please try again.");
    res.redirect("/verify-otp");
  }
});

module.exports = router;
