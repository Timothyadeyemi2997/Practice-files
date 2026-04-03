const apiKey = "YOUR_API_KEY"

const searchBtn = document.getElementById("searchBtn")
const input = document.getElementById("searchInput")
const unitToggle = document.getElementById("unitToggle")

let unit = "metric"

searchBtn.addEventListener("click", () => {
getWeather(input.value)
})

unitToggle.addEventListener("change", () => {
unit = unitToggle.value
getWeather(input.value)
})


async function getWeather(city){

const res = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
)

const data = await res.json()

updateUI(data)

getForecast(data.coord.lat, data.coord.lon)

}


function updateUI(data){

document.getElementById("city").textContent =
data.name + ", " + data.sys.country

document.getElementById("temperature").textContent =
Math.round(data.main.temp) + "°"

document.getElementById("feels").textContent =
Math.round(data.main.feels_like) + "°"

document.getElementById("humidity").textContent =
data.main.humidity + "%"

document.getElementById("wind").textContent =
data.wind.speed + " m/s"

document.getElementById("pressure").textContent =
data.main.pressure + " hPa"

document.getElementById("date").textContent =
new Date().toDateString()

setWeatherIcon(data.weather[0].main)

}


async function getForecast(lat,lon){

const res = await fetch(
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`
)

const data = await res.json()

displayHourly(data.list)

}


function displayHourly(list){

const container = document.getElementById("hourly")

container.innerHTML = ""

for(let i=0;i<6;i++){

let hour = list[i]

let div = document.createElement("div")

div.className = "hour"

div.innerHTML = `
<span>${new Date(hour.dt_txt).getHours()}:00</span>
<span>${Math.round(hour.main.temp)}°</span>
`

container.appendChild(div)

}

}


/* animated icons */

function setWeatherIcon(condition){

const icons = new Skycons({"color":"white"})

let icon = "CLEAR_DAY"

if(condition === "Clouds") icon = "CLOUDY"
if(condition === "Rain") icon = "RAIN"
if(condition === "Snow") icon = "SNOW"
if(condition === "Clear") icon = "CLEAR_DAY"

icons.set("weatherIcon", icon)
icons.play()

}