import loading from '../img/spinner.gif';

const loadingSpinner = () => {
  const main = document.querySelector('.main');
  main.textContent = '';
  const spinnerImg = document.createElement('img');
  spinnerImg.src = loading;
  spinnerImg.classList.add('spinner');
  main.appendChild(spinnerImg);
};

export default loadingSpinner;
