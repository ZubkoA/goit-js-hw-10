import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { getNews } from './fetchCountries';

const countryList = document.querySelector('.country-list');
const searchBox = document.getElementById('search-box');
const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));
function onSearchCountry() {
  const searchValue = searchBox.value;
  getCountryes(searchValue)
    .then(data => {
      if (data.length > 10) {
        console.log(data.length);
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length <= 2 && data.length > 10) {
        renderCountry(data);
        console.log(data.length);
      } else if ((data.length = 1)) {
        renderCountry(data);
        console.log(data.length);
        console.log(data);
      } else if (!searchValue) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => console.error(error));
}

const getCountryes = search => {
  return fetch(`https://restcountries.com/v3.1/name/${search}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};


function renderCountry(data) {
  countryList.innerHTML = '';
  let markupAdd = '';
  const markup = data
    .map(({ flags, name }) => {
      return `
   <div class="country">
   <img class="country__img" src="${flags.svg}" />
   <h3 class="country__name">${name.common}</h3>
   </div>`;
    })
    .join('');

  countryList.innerHTML = markup;

  if (data.lenth === 1)
    markupAdd = `<p>Capital: </p>
 <p>Population: </p>
<p>Languages: </p>`;
  countryList.insertAdjacentHTML('beforeend', markupAdd);
}


