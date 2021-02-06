const key = 'nZayWt7mUA2hETDPILT3GI8DHoiLjimT';

// get city key
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0]; // might be multiple cities

}


const getWeather = async(cityid) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${cityid}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

// getCity('champaign')
//     .then(data => { return getWeather(data.Key);})
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


