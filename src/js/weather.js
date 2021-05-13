import axios from 'axios';

const getWeatherInfo = async (location) => {
  const key = 'fd11f0ef4fd00e82c7ac337444e21703';
  const weatherInfo = {};
  try {
    const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`);
    const { data } = res;
    weatherInfo.city = data.name;
    weatherInfo.country = data.sys.country;
    weatherInfo.temp = data.main.temp;
    weatherInfo.desc = data.weather[0].description;
    weatherInfo.icon = data.weather[0].icon;
    return weatherInfo;
  } catch (e) {
    return e.name;
  }
};

export default getWeatherInfo;