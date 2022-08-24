const getData = async () => {
    try {
        let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
        let weatherData = await response.json();
        return weatherData;
        

    } catch (e) {
        const [weather] = document.getElementsByClassName("weather__box");
        weather.classList.add("weather__box--error");
        weather.innerHTML = `Could not load (${e.message})`;

    }


}

const city = document.getElementById("city");
const temperature = document.getElementById("temp");
const weatherPressure = document.getElementById("pressure");
const weatherHumidity = document.getElementById("humidity");
const weatherDescription = document.getElementById("description");
const weatherSpeed = document.getElementById("speed");
const weatherDegrees = document.getElementById("deg");
const weatherIcon = document.getElementById("icon");

const displayElements = async () => {
    try {
        let result = await getData();
        let {main: {pressure, temp, humidity}, name, weather: {0: {description, icon}}, wind: {deg, speed}} = result;
        city.innerHTML += name;
        temperature.innerHTML = temp;
        weatherHumidity.innerHTML += humidity;
        weatherHumidity.innerHTML += '%';
        weatherPressure.innerHTML += pressure;
        weatherPressure.innerHTML += ' hPa';
        weatherDescription.innerHTML = description;
        weatherSpeed.innerHTML += speed;
        weatherSpeed.innerHTML += 'km/h';
        weatherDegrees.innerHTML += deg;
        weatherDegrees.innerHTML += '°';
        weatherIcon.appendChild(document.createElement("img"));
        weatherIcon.firstElementChild.setAttribute("src",`http://openweathermap.org/img/w/${icon}.png`);

    } catch (e) {
        console.error(e);

    }

}

displayElements();



