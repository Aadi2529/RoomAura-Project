if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}


const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash= require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Listing = require("./models/listing.js");

const listingRouter = require("./router/listing.js");
const reviewRouter = require("./router/reviews.js");
const userRouter = require("./router/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")))


// const MONGO_URL ="mongodb://127.0.0.1:27017/roomora";
const db_url = process.env.ATLAS_URI;

main().then(()=>{
    console.log("Connected to DB"); 
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect(db_url);
};



const store = MongoStore.create({
    mongoUrl: db_url,
    touchAfter: 24 * 3600,
    crypto: {
        secret: "mysupersecretcode"
    }
});

store.on("error", (e) => {
    console.log("SESSION STORE ERROR", e)
});

const sessionOptions = {
  store,
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly:true,
    }
};



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) =>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    const currentUser = req.user;
    res.locals.currentUser = currentUser;
    next();
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


// 🔍 Search Route (Step 5)
app.get("/search", async (req, res) => {
  try {
    const { location, checkin, checkout, guests } = req.query;

    // Perform a flexible search by location name
    const listings = await Listing.find({
      location: { $regex: location, $options: "i" }
    });

    // Render your search results page
    res.render("listings/searchResults", {
      listings,
      location,
      checkin,
      checkout,
      guests
    });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong while searching.");
    res.redirect("/");
  }
});




app.all(/.*/, (req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!!"))
});

app.use((err,req,res,next) =>{
    let {statusCode =500, message="Something Went Wrong"}= err;
    res.status(statusCode).render("error.ejs",{err})
    // res.status(statusCode).send(message);
});

app.listen(8080,() =>{
    console.log("Server is listening on port 8080");
});