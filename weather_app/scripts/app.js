// dom manipulation and event handling

const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    const cityDets = await getCity(city);  // city details
    const weather = await getWeather(cityDets.Key);

    return { cityDets,weather}; 
     // object shorthand notation  key1:key1, key2:key2 => key1, key2
};



const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {

    // const cityDets = data.cityDets;
    // const weather = data.weather;

    const {cityDets, weather} = data; // destructure
    
    details.innerHTML = ` <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');






// when press enter to submit, send the city

cityForm.addEventListener('submit', e=>{
    e.preventDefault();

    // get city vlue
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city).then(data => updateUI(data))
        .catch(err => console.log(err));
});



