import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

const countryList = document.querySelector('.country-list');
const countryinfo = document.querySelector('.country-info');

const searchBox = document.getElementById('search-box');
const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));
function onSearchCountry() {
  const searchValue = searchBox.value;
  fetchCountries(searchValue)
    .then(data => renderCountry(data))
    .catch(renderError);
}

function renderError(error) {
  Notify.failure('Oops, there is no country with that name');
}

function renderCountry(data) {
  if (data.length === 1) {
    countryList.innerHTML = ' ';
    let markup;
    markup = data
      .map(({ flags, name, capital, population, languages }) => {
        return `
   <div class="country">
   <img class="country-img country-img_info" src="${flags.svg}" />
   <h3 class="country-name country-name_info">${name.common}</h3>
   </div>
   <p><b>Capital:</b> ${capital}</p>
   <p><b>Population:</b> ${population}</p>
   <p><b>Languages:</b> ${Object.values(languages)}</p>`;
      })
      .join('');
    countryinfo.innerHTML = markup;
  } else if (data.length < 10) {
    countryList.innerHTML = ' ';
    countryinfo.innerHTML = ' ';
    let markup;
    markup = data
      .map(({ flags, name }) => {
        return `
 <li class=country-lists><img class="country-img" src="${flags.svg}" />
   <h3 class="country-name">${name.common}</h3></li>`;
      })
      .join('');

    countryList.innerHTML = markup;
  } else if (data.length > 10) {
    countryList.innerHTML = ' ';
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}
