// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const weatherApi = {
    key: '8be29f81f93a75ee80fd444aa9f021b6',
    url: 'https://api.openweathermap.org/data/2.5/weather'
}

const weatherBtn = document.getElementById('weather-button');
let cityValue = document.getElementById('inputValue');
weatherBtn.addEventListener('click', function(){
    getWeatherData(cityValue);
    cityValue.value = '';
})

function getWeatherData(city){
    fetch(`${weatherApi.url}?q=${city.value}&units=metric&appid=${weatherApi.key}`)
    .then(response => response.json())
    .then(weather => {
        updateUI(weather);
    })
}

function updateUI(data){
    const cityName = data.name;
    const cityTemp = data.main.temp;
    const cityStatus = data.weather[0].main;
    const cityImg = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById('image-icon').src = cityImg;
    document.getElementById('city-name').innerText = cityName;
    document.getElementById('city-temp').innerText = cityTemp;
    document.getElementById('weather-status').innerText = cityStatus;
}
