import { translationArr } from "./translation.js";

const selectLanguage = document.querySelector('.change-lang');
const possibleLanguages = ['en', 'ru'];

selectLanguage.addEventListener('change', changeURLLanguage);

// redirect to url with language indication in hash
function changeURLLanguage() {
  let lang = selectLanguage.value;
  location.href = `${window.location.pathname}#${lang}`;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);

  // If the pathname has an error, then use a default pathname: (#ru)
  // The best practice, in this case, is to use the geo-position of a user browser.
  if (!possibleLanguages.includes(hash)) {
    location.href = window.location.pathname + '#ru';
    location.reload();
  }

  selectLanguage.value = hash;

  const translationDOMElems = document.querySelectorAll('[data-translate]');

  translationDOMElems.forEach(elem => {
    for (let key in translationArr) {

      if (elem.dataset.translate === key) {
        elem.innerText = translationArr[key][hash];
      };
    };
  });

};

changeLanguage();