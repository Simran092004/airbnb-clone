if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
};

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');

app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', ejsMate);
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const listingRouter = require('./routes/listing.js');
const reviewRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');
const bookingsRouter = require('./routes/booking.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main();
async function main(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB');
    }catch(err){
        console.error('Error connecting to MongoDB',err);
    }
}

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};
  
// app.get('/',(req,res)=>{
//     res.send('Hello! I am Wanderlust, your travel companion. Explore the world with us!');
// });

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());  
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
 
app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    res.locals.razorpayKeyId = process.env.RAZORPAY_KEY_ID;
    next();
});

// app.get('/demoUser', async (req,res)=>{
//     const user = new User({ 
//         email: 'fake@example.com',
//         username: 'demoUser'
//     });
//     let registeredUser = await User.register(user, 'password'); 
//     res.send(registeredUser);
// });

app.use('/listings', listingRouter);
app.use('/listings/:id/reviews', reviewRouter);
app.use('/users', userRouter);
app.use('/bookings', bookingsRouter);

app.use((err,req,res,next)=>{
    let { statusCode = 500, message = 'Something went wrong!' } = err;
    res.status(statusCode).render('error', { err});
});

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
});