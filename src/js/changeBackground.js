import clearSky from '../img/cl_sky.jpg';
import cloudy from '../img/fw_clouds.jpg';
import rain from '../img/lt_rain.jpg';
import mist from '../img/mist.jpg';
import storm from '../img/th_storm.jpg';
import winter from '../img/winter.jpg';

const changeBackground = (id) => {
  const code = id.split('').slice(0, 2).join('');
  const bg = document.body.style;
  bg.backgroundPosition = 'center';
  bg.backgroundRepeat = 'no-repeat';
  bg.backgroundSize = 'cover';

  switch (code) {
    case '02':
    case '03':
    case '04':
      bg.backgroundImage = `url(${cloudy})`;
      break;
    case '09':
    case '10':
      bg.backgroundImage = `url(${rain})`;
      break;
    case '11':
      bg.backgroundImage = `url(${storm})`;
      break;
    case '13':
      bg.backgroundImage = `url(${winter})`;
      break;
    case '50':
      bg.backgroundImage = `url(${mist})`;
      break;
    default:
      bg.backgroundImage = `url(${clearSky})`;
      break;
  }
};

export default changeBackground;
