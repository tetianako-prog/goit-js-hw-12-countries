import listTemplate from '../templates/list.hbs';
import refs from '../js/refs';

function createListMarkup(array) {
  const markup = listTemplate(array);
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

export default createListMarkup;
