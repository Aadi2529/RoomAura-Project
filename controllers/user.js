const User = require("../models/user");

// Render Sign Up Form // //
module.exports.renderSignupForm = (req,res) =>{
    res.render("users/signup");
};

// Sign Up Logic // //
module.exports.renderSignup = async (req, res, next) =>{
    try{
        let { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        // console.log(registeredUser);
        req.login(registeredUser, err =>{
            if(err) return next(err);
            req.flash("success", "Welcome to Wanderlust");
            return res.redirect("/listings");
        })
    }catch(e){
        // If login fails   
        req.flash("error", "Sign up failed");
        return res.redirect("/signup");
    }
}



// Render Log In Form // //
module.exports.renderLoginForm = (req,res) =>{
    res.render("users/login");
};


// Log In Logic // //
// Handled in router using passport.authenticate middleware
module.exports.renderLogin = (req, res) =>{
    req.flash("success", "Welcome Back to Wanderlust!");
    res.redirect(res.locals.redirectUrl || "/listings");
};

// Log Out Logic // //
module.exports.renderLogout = (req,res) =>{
    req.logout((err) =>{
        if(err){
            return next(err);
        }
        req.flash("success", "you are logged out successfully!");
        res.redirect("/listings");
    });
}