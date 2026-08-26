const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{
    const APIkey = 'dba2bffdd8017f817c5750db08d4ff43';
    const city = document.querySelector('.search-box input').value;

    if(city == '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json =>{

        if(json.cod === '404'){
            container.style.height ='430px'
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

         container.style.height ='555px'
            error404.classList.remove('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');


        const image = document.querySelector('.weather-box img')
        const temperature = document.querySelector('.weather-box .temperature')
        const description = document.querySelector('.weather-box .description')
        const humidity = document.querySelector('.weather-details .humidity span')
        const wind = document.querySelector('.weather-details .wind span')
        switch (json.weather[0].main) {
            case 'Clear':
                image.src ='clear-sky_6581490.png';
                break;
        
            case 'Rain':
                image.src ='climate_1749797.png'
                break;

            case 'Snow':
                image.src ='winter_6263060.png'

            default:
                image.src ='weather_12215476.png'

        }
        temperature.innerHTML =`${parseInt(json.main.temp)}<span>˚c</span>`;
        description.innerHTML =`${json.weather[0].description}`;
        humidity.innerHTML =`${json.main.humidity}%`;
        wind.innerHTML =`${parseInt(json.wind.speed)}km/h`;
    })
})