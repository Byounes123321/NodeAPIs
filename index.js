// import modules
const {req , res} = require ("express");
const express = require ("express");
const path = require ("path");
const weather = require("./components/OpenWeatherAPI")
const dotenv = require("dotenv");
const { loadavg } = require("os");
const { request } = require("http");
dotenv.config();
require('browser-env')(['navigator']);   
var location = require("./public/script");

// Set up express app
const app = express();
const port = process.env.PORT || 8888;

// Define views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// Set public folder
app.use(express.static(path.join(__dirname, "public")));

app.post('http://localhost:8888/api/userlocation', (req,res)=>{
    const userLocation = req.body.location

})

// Home page
app.get("/", async (req, res) =>{
    // res.status(200).send("Test page");
    let userWeather = await weather.getWeather();
    console.log(userWeather);

    res.render("index", {title: "Home", weather: userWeather})
})

// Set up server listening 
app.listen(port, () =>{
    console.log(`listening on http://localhost:${port}`);
});

console.log("index.js: ",location())

module.exports = location;