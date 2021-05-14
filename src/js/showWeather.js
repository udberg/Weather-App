const main = document.querySelector('.main');

const showWeatherInfo = (info) => {
  const markup = `<div class="weather-info">
                    <div class="units">
                      <span class="metric">&deg;<span class="cf">C</span></span>
                    </div>
                    <div class="city">${info.city}, ${info.country}</div>
                    <div class="temp">
                      <img src="http://openweathermap.org/img/wn/${info.icon}@2x.png">
                      <span><span class="updt-temp">${info.temp}</span>&deg;<span class="cf">C</span> </span>
                    </div>
                    <div class="desc">${info.desc}</div>
                  </div>`;
  main.textContent = '';
  main.insertAdjacentHTML('afterbegin', markup);

  document.querySelector('.units').addEventListener('click', () => {
    const tempDiv = document.querySelector('.updt-temp');
    const temp = parseFloat(document.querySelector('.updt-temp').textContent);
    const cf = document.querySelectorAll('.cf');
    cf.forEach((e) => {
      e.textContent = e.textContent === 'F' ? 'C' : 'F';
    });

    tempDiv.textContent = cf[0].textContent === 'F' ? ((temp * 1.8) + 32).toFixed(2).toString() : ((temp - 32) * 0.5556).toFixed(2).toString();
  });
};

export default showWeatherInfo;
