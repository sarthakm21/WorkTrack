const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Work = require('./models/userWork'),
    User = require('./models/user'),
    workRoutes = require('./routes/work'),
    authRoutes = require('./routes/auth'),
    showRoutes = require('./routes/show');

const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
mongoose.set('useUnifiedTopology', true);
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/worktrack"

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true }, () => {
    console.log("Connected to ", url);
});

app.set('view engine', 'ejs');

//passport config
app.use(require('express-session')({
    secret: "workitout",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

//Routes
app.use(showRoutes);
app.use(workRoutes);
app.use(authRoutes);

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});