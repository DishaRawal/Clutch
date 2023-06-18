const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

require("./db/conn"); 
const User = require("./models/register");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.get("/start", function(req, res) {

    res.render("start");
})


app.get("/", function(req, res) {

    res.render("index");

})

app.get("/landpage", function(req, res) {

    res.render("landpage");

})


app.get("/home", function(req, res) {

    res.render("home");

})


app.get("/about", function(req, res) {

    res.render("about");

})

app.get("/contact", function(req, res) {

    res.render("Contact");

})

app.get("/Games", function(req, res) {

    res.render("games");
})

app.get("/tourna", function(req, res) {

    res.render("tourna");
})

app.get("/login", function(req, res) {

    res.render("login");
})

//login check
app.post("/login", async(req,res) =>{
    try{
        const name = req.body.name;
        const pw = req.body.password;

        const username= await User.findOne({name:name});
        
        if(username.password === pw){
        res.status(201).render("games");
         }
        else{
            res.send("Password is incorrect");
        }
                
    }
    catch(error) {
        res.status(400).send("Account not found")
    }
})


app.get("/signup", function(req, res) {

    res.render("signup");
})

app.post("/signup", async(req,res) =>{
    try{
          
        const pw = req.body.password;
        const cpw = req.body.confirmpassword;

        if(pw === cpw){
            const user = new User({
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword
            })
         const registered= await user.save();
         res.status(201).render("login");

        }
        else{
            res.send("Passwords are not matching")
        }
    }
    catch(error){
        res.status(400).send(error);
    }
})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})