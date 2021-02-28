import { templates } from 'handlebars';
import refs from './refs.js';
import countryTemplate from '../templates/country.hbs';

function createCountryMarkup(obj) {
  const markup = countryTemplate(obj);
  refs.country.insertAdjacentHTML('beforeend', markup);
}
export default createCountryMarkup;
