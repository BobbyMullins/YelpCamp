var express = require("express"),  
    app = express(), 
    bodyParser = require("body-parser"),
    flash = require('connect-flash'), 
    passport = require('passport'), 
    LocalStrategy = require('passport-local'),
    mongoose = require("mongoose"),
    User = require('./models/user'),
    Campground = require("./models/campground"),
    seedDB = require("./seeds"), 
    methodOverride = require('method-override'), 
    Comment = require("./models/comment"); 
    
var commentRoutes = require('./routes/comments'), 
    campgroundRoutes = require('./routes/campgrounds'), 
    indexRoutes = require('./routes/index'); 
    

    
mongoose.connect("mongodb://localhost/yelp_camp_v3"); 
app.use(bodyParser.urlencoded({extended: true})); 
app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/public")); 
app.use(flash()); 
app.use(methodOverride('_method')); 
//seedDB(); seed the database 

// Passport Configuration
app.use(require('express-session')({
    secret: 'Once again Rusty wins cutest dog!',
    resave: false, 
    saveUninitialized: false
})); 
app.use(passport.initialize());
app.use(passport.session()); 
passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

//middleware for navbar according to login status
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    //used to display flash warnings 
    res.locals.error = req.flash('error'); 
    res.locals.success = req.flash('success'); 
    next(); 
}); 

/*  var campgrounds = [
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
        {name: "Salty Hill", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
        {name: "Granite Ledge", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"}
    ]*/

app.use('/campgrounds/:id/comments', commentRoutes); 
app.use('/campgrounds', campgroundRoutes); 
app.use(indexRoutes); 

//middleware for checking whether a user is logged in

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); 
    }
    res.redirect('/login'); 
}
    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp is now being served"); 
}); 