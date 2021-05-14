import './stylesheets/style.css';
import getWeatherInfo from './js/weather';
import showWeatherInfo from './js/showWeather';
import showErrorMessage from './js/error';
import changeBackground from './js/changeBackground';
import loadingSpinner from './js/spinner';

const locationForm = document.querySelector('.location-form');

locationForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let city = document.querySelector('[name="city"]').value;
  city = city.split(' ').join('%20');

  loadingSpinner();

  const info = await getWeatherInfo(city);

  if (info === 'Error') {
    showErrorMessage();
  } else {
    showWeatherInfo(info);
    changeBackground(info.icon);
  }

  locationForm.reset();
});
