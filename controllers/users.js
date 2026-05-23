const User = require('../models/user.js');

module.exports.renderSignupForm = (req,res)=>{
   res.render("users/signup.ejs");
};

module.exports.signup = async (req,res,next)=>{
   try{
        const {email, username, password} = req.body;
        const user = new User({email, username});
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if(err){
                return next(err);
            }
            req.flash('success', 'Welcome to Wanderlust!');
            return res.redirect("/listings");
        });
    }catch(e){
        req.flash('error', e.message);
        res.redirect('/users/signup');
    }
};

module.exports.renderLoginForm = (req,res)=>{
    res.render('users/login.ejs');
};

module.exports.login = async (req,res,next)=>{
    req.flash('success', 'Welcome back!');
        let redirectUrl = res.locals.redirectUrl || '/listings';
        res.redirect(redirectUrl);
    };

module.exports.logout = (req,res,next)=>{
    req.logout(function(err) {
        if (err) 
            { return next(err); }
        req.flash('success', 'You have been logged out.');
        res.redirect('/listings');
    });
};

