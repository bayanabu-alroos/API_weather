//------------------API key-------------------------- //
var APIKey = "96a76e81a5d9dd067bbf02bfb0127a67";

document.getElementById("country").addEventListener('change',function(){
//---------------------fetch Api--------------------------//
var city=document.querySelector("#country").value;
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96a76e81a5d9dd067bbf02bfb0127a67&units=metric`
    )
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const day = new Date();
        var days = [ "Fri", "Sat","Sun", "Mon", "Tue", "Wed", "Thu"];
        document.querySelector(".wind .value").textContent = (data.wind.speed);
        document.querySelector(".humidity .value").textContent = (data.main.humidity+"%");
        document.querySelector(".pressure .value").textContent = (data.main.pressure+"%") ;
        document.querySelector(".weather-temp").textContent = (data.main.temp.toFixed(0)+"°C");
        document.querySelector(".location").textContent = city;
        document.querySelector(".date-container .date-dayname").textContent=day.toLocaleString("en-us", { weekday: "long" });
        document.querySelector(".date-container .date-day").textContent= day.toLocaleDateString("en-GB", {
            day: "numeric", month: "short", year: "numeric"
            }).replace(/ /g, '-');;
        document.querySelector(".weather-desc").textContent=data.weather[0].main ;
        document.querySelector(".week-container .week-list .day-name").textContent = days[new Date().getDay()-5];
        document.querySelector(".week-container .week-list .day-temp").textContent = (data.main.temp.toFixed(0)+"°C");
        document.querySelector(".week-container .week-list .day1").textContent = days[new Date().getDay()-4];
        document.querySelector(".week-container .week-list .temp1").textContent = (data.main.temp.toFixed(0)+"°C");
        document.querySelector(".week-container .week-list .day2").textContent = days[new Date().getDay()-3];
        document.querySelector(".week-container .week-list .temp2").textContent = (data.main.temp.toFixed(0)+"°C");
        document.querySelector(".week-container .week-list .day3").textContent = days[new Date().getDay()-2];
        document.querySelector(".week-container .week-list .temp3").textContent = (data.main.temp.toFixed(0)+"°C");

    })})