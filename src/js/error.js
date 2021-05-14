const main = document.querySelector('.main');

const showErrorMessage = () => {
  const markup = `<div class="error">
                    <p>Something went wrong. Please try again!!</p>
                    <p>Common reasons of Failure are: Bad internet connection and Invalid Location</p>
                  </div>`;
  main.textContent = '';
  main.insertAdjacentHTML('afterbegin', markup);
};

export default showErrorMessage;
