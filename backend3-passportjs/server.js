if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config()
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");


const initializePassport = require("./passport-config");
initializePassport(
    passport,
    email=> users.find(user => user.email === email),
    id => users.find(user => user.id === id)
); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const bcrypt = require("bcrypt");

app.set("view-engine","ejs");

app.use(express.urlencoded({extended:false}));

const users = [];

app.use(flash());
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false
}))
app.use(passport.initialize());
app.use(passport.session());

app.get("/",checkAuthenticated,(req,res)=>{
    res.render("index.ejs",{name : req.user.name});
})

app.get("/login",checkNotAuthenticated,(req,res) =>{
    res.render("login.ejs");
});

app.post("/login",checkNotAuthenticated,passport.authenticate('local',{
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
}));

app.get("/register",checkNotAuthenticated,(req,res) =>{
    res.render("register.ejs");
});

app.post("/register",checkNotAuthenticated, async (req,res)=>{
    console.log(req.body);
    try{
        const hashPassword = await bcrypt.hash(req.body.password,10);
        users.push({
            id : Date.now().toString(),
            name : req.body.name , 
            email : req.body.email,
            password : hashPassword
        })
        res.redirect("/login");
    }catch{
        res.redirect("/register");
    }
    console.log(users);
})

function checkAuthenticated(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    res.redirect("/login");
}

function checkNotAuthenticated(req,res,next)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }
    next;
}

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})