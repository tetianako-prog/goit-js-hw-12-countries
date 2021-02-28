import './styles.css';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import fetchCountries from './js/fetch-countries';
import createListMarkup from './js/list-markup';
import createCountryMarkup from './js/country-markup';
import errorMessage from './js/error-message';

refs.input.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(e) {
  refs.countryList.innerHTML = '';
  refs.country.innerHTML = '';
  if (e.target.value === '') return;
  fetchCountries(e.target.value).then(data => {
    if (data.status === 404) {
      errorMessage('Not found :(');
    } else if (data.length > 10) {
      errorMessage(
        'Too many matches found. Please enter a more specific query',
      );
    } else if (data.length > 1) {
      createListMarkup(data);
    } else {
      createCountryMarkup(data[0]);
    }
  });
}
