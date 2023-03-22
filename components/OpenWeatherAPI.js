

// async function getLocation(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//         console.log(showPosition)
//       } else {
//        return "Geolocation is not supported by this browser.";
//       }
// }

const getUserLocation = require("../public/script");


async function getLocation(){
    let url = "http://api.openweathermap.org/geo/1.0/direct?q=uxbridge, CA&appid="+ process.env.WEATHERAPI;
    var response = await fetch(
        url,
        {
            method: "GET"
        }
    )
    return response.json();
}

async function getWeather(){
let location = await getLocation();
console.log("getWeather",location.latitude);
let url = "https://api.openweathermap.org/data/2.5/weather?lat="+location.latitude+"&lon="+location.longitude+"&appid="+ process.env.WEATHERAPI;
var response = await fetch(
    url,
    {
        method:"GET"
    }
)
return response.json();
}

module.exports = {
    getWeather
}