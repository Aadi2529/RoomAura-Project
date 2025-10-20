const express = require("express");
const router = express.Router();
const passport = require("passport");
const twilio = require("twilio");


const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// STEP 1: Show mobile number input
router.get("/mobile-login", (req, res) => {
  res.render("users/mobile-login");
});

// STEP 2: Generate and send OTP
router.post("/mobile-login", async (req, res) => {
  const { mobile } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  req.session.otp = otp;
  req.session.mobile = mobile;

  try {
    await client.messages.create({
      body: `Your Roomora login OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+91${mobile}`, // change prefix if needed
    });

    req.flash("success", "OTP sent to your mobile number!");
    res.redirect("/verify-otp");
  } catch (err) {
    console.error("Twilio Error:", err);
    req.flash("error", "Failed to send OTP. Try again!");
    res.redirect("/mobile-login");
  }
});

// STEP 3: Verify OTP and login
router.get("/verify-otp", (req, res) => {
  res.render("users/verify-otp");
});

router.post("/verify-otp", (req, res, next) => {
  passport.authenticate("otp", {
    successRedirect: "/listings",
    failureRedirect: "/mobile-login",
    failureFlash: true,
  })(req, res, next);
});

module.exports = router;
