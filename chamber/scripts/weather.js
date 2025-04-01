const env = {
  key: "1cbae274dcea0264b51ce3c3ac98a28a",
  city: "Manila",
  units: "metric",
  lang: "en"
}

async function getCurrentWeather(dom) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${env.city}&appid=${env.key}&units=${env.units}&lang=${env.lang}`
    const response = await fetch(url)
    const data = await response.json()
    if (data.cod !== 200) {
      console.error(`Error fetching weather data: ${data.message}`)
      return null
    }
    displayCurrentWeather(data, dom)
  } catch (error) {
    console.error("Error fetching weather data:", error)
  }
}

const displayCurrentWeather = (data, dom) => {
  const weather = {
    city: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed),
    description: data.weather[0].description,
    sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
    sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    icon: data.weather[0].icon
  }
  dom.innerHTML = `
      <div class="weather-info">
        <h3>${weather.city}, ${weather.country}</h3>
        <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}">
        <p>Temperature: ${weather.temperature}°C</p>
        <p>Humidity: ${weather.humidity}%</p>
        <p>Wind Speed: ${weather.windSpeed} m/s</p>
        <p>Description: ${weather.description}</p>
        <p>Sunrise: ${weather.sunrise}</p>
        <p>Sunset: ${weather.sunset}</p>
      </div>
    `
}
const weatherContainer = document.querySelector(".weather-current-card")
getCurrentWeather(weatherContainer)

async function getForecastWeather(dom) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${env.city}&appid=${env.key}&units=${env.units}&lang=${env.lang}`
    const response = await fetch(url)
    const data = await response.json()
    if (data.cod !== "200") {
      console.error(`Error fetching weather data: ${data.message}`)
      return null
    }
    displayForecastWeather(data, dom)
  } catch (error) {
    console.error("Error fetching weather data:", error)
  }
}

const displayForecastWeather = (data, dom) => {
  const forecastMap = new Map()
  data.list.forEach(item => {
    const date = new Date(item.dt * 1000)
    const day = date.toLocaleDateString(undefined, { weekday: "long" })

    if (!forecastMap.has(day)) {
      forecastMap.set(day, {
        date: day,
        temperature: Math.round(item.main.temp),
        humidity: item.main.humidity,
        windSpeed: Math.round(item.wind.speed),
        description: item.weather[0].description,
        icon: item.weather[0].icon
      })
    }
  })
  const forecast = Array.from(forecastMap.values()).slice(0, 3)
  dom.innerHTML = forecast
    .map(
      item => `
      <div class="forecast-day">
        <h4>${item.date}</h4>
        <img src="https://openweathermap.org/img/wn/${item.icon}@2x.png" alt="${item.description}">
        <p>${item.description}</p>
        <p>Temp: ${item.temperature}°C</p>
        <p>Humidity: ${item.humidity}%</p>
        <p>Wind: ${item.windSpeed} m/s</p>
      </div>
    `
    )
    .join("")
}
const forecastContainer = document.querySelector(".weather-forecast-card")
getForecastWeather(forecastContainer)
