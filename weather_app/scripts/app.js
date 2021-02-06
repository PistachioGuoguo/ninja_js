// dom manipulation and event handling

const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    const cityDets = await getCity(city);  // city details
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets,
        weather
    };
};


// when press enter to submit, send the city

cityForm.addEventListener('submit', e=>{
    e.preventDefault();

    // get city vlue
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city).then(data => console.log(data))
        .catch(err => console.log(err));
})