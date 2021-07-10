const searchInput= document.querySelector('#search-input');
const apiKey = '3ebe0ec70cee0519fe8a6353672830dd';
const unknownData = '--';

const cityName = document.querySelector('.city_name');
const weather = document.querySelector('.weather_status');
const icon = document.querySelector('.weather_icon');
const temp = document.querySelector('.tempurature');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpd = document.querySelector('.wind_spd');


searchInput.addEventListener('change', function(e){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${apiKey}&units=metric&lang=vi`)
        .then(function(res){
            return data = res.json();
        })
        .then(function(data){
            console.log(data);
            if(cityName.innerHTML = data.name){
                weather.innerHTML = data.weather[0].description;
                icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                temp.innerHTML = Math.round (data.main.temp);
                sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm');
                sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm');
                humidity.innerHTML = data.main.humidity;
                windSpd.innerHTML =Math.round((data.wind.speed)*3.6);
            }
            else {
                cityName.innerHTML= unknownData;
                weather.innerHTML= unknownData;
                icon.innerHTML= unknownData;
                temp.innerHTML= unknownData;
                sunrise.innerHTML= unknownData;
                sunset.innerHTML= unknownData;
                humidity.innerHTML= unknownData;
                windSpd.innerHTML= unknownData;
            }
        });
});