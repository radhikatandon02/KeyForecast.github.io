const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04087185ccmshf8e9f0511bd968ep1db93fjsn09d9da767be4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
  cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct 
    feels_like.innerHTML = response.feels_like 
    temp.innerHTML = response.temp
    // temp2.innerHTML = response.temp
    min_temp.innerHTML = response.min_temp 
    max_temp.innerHTML = response.max_temp 
    humidity.innerHTML = response.humidity
    // humidity2.innerHTML = response.humidity
    sunrise.innerHTML = response.sunrise 
    sunset.innerHTML = response.sunset 
    wind_speed.innerHTML = response.wind_speed
    // wind_speed2.innerHTML = response.wind_speed
    // wind_degrees.innerHTML = response.wind_degrees 
    
  })
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("London")