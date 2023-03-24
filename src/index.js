import './css/styles.css';
import debounce from 'lodash.debounce';
// import { getNews } from './fetchCountries';

const countryList = document.querySelector('.country-list');
const searchBox = document.getElementById('search-box');
const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));
function onSearchCountry() {
  const searchValue = searchBox.value;
  getNews(searchValue)
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(error => console.error(error));
}

const getNews = search => {
  return fetch(`https://restcountries.com/v3.1/name/${search}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};

// const renderCountry = function (data) {
//   countryList.innerHTML = '';
//   const html = `
//    <div class="country">
//    <img class="country__img" src="${data.flags.svg}" />
//    <h3 class="country__name">${data.name.common}</h3>
//    </div>`;

//   countryList.insertAdjacentHTML('beforeend', html);
// };

const renderCountry = function (data) {
  countryList.innerHTML = '';
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
};

// function onSearchCountry(e) {
//   const nameCountry = e.target.value;
// }
// // const tech = [
// //   { name: 'alpha' },
// //   { name: 'alpon' },
// //   { name: 'salpon' },
// //   { name: 'faraon' },
// //   { name: 'daran' },
// // ];
// // function creatList(items) {
// //   return items.map(item => `<li>${item.name}</li>`).join('');
// // }

// // function onSearchCountry(e) {
// //   const filter = e.target.value.toLowerCase();
// //   const filteredTtems = tech.filter(t => t.name.toLowerCase().includes(filter));

// //   const listItemmarkup = creatList(filteredTtems);
// //   console.log(listItemmarkup);
// // }
