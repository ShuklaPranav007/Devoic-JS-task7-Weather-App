let apiKey = "ed829ad96ffc598ad503548dde346c6e";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// https://api.openweathermap.org/data/2.5/weather?units=metric&q=jabalpur&appid=ed829ad96ffc598ad503548dde346c6e
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    
    // invalid city
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";
    console.log(data)

    // img change code
    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "mist.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "snow.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "rain.png";
    }
    // console.log(data.weather[0].main);
    // console.log(weatherIcon.src)

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

    
}
// checkWeather();

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
