const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Work = require('./models/userWork'),
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




//Routes
app.use(showRoutes);
app.use(workRoutes);
app.use(authRoutes);

// app.get("/addwork", (req, res) => {
//     res.render("addwork");
// });

// app.post("/home", (req, res) => {
//     Work.create(req.body.post, (err, done) => {
//         if (err) {
//             console.log("Error occured while posting to home", err);
//             res.redirect("/home");
//         } else {
//             console.log("Task Added", done);
//             res.redirect("/home");
//         }
//     })
// });

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});