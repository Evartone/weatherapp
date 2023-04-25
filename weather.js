const apikey = "2af6784f7da81b03c4f391e62052bb21";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const Searchbox = document.querySelector(".search input")
const Searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {

   const response = await fetch(apiurl + city + `&appid=${apikey}`);

   // Error message

   if (response.status == 404) {

       document.querySelector(".error").style.display = "blcok";
       document.querySelector(".weather").style.display = "none";
       
   } else {

       var data = await response.json();

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°c`;
   document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
   document.querySelector(".wind").innerHTML = data.wind.speed  +  `km/h`;

  

   // Part of update the Weather image Condition 

   if (data.weather[0].main == "Clouds") {

       weatherIcon.src = "/image/clouds.png"
   } 
   else if (data.weather[0].main == "Clear"){

       weatherIcon.src = "/image/clear.png"
   }

   else if (data.weather[0].main == "Rain"){

     weatherIcon.src = "/image/rain.png"
   }

   else if (data.weather[0].main == "Drizzle"){

     weatherIcon.src = "/image/drizzle.png"
   }

   else if (data.weather[0].main == "Mist"){

    weatherIcon.src = "/image/mist.png"

   }

   // Part of update the Weather image Condition 

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";

   }

}

Searchbtn.addEventListener("click", () => {

   checkweather(Searchbox.value)

})