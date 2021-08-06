import { translationArr } from "./translation.js";

const selectedLanguage = document.querySelector(".change-lang");
let currentLanguage = selectedLanguage.value;

const possibleLanguages = ["en", "ru"];

selectedLanguage.addEventListener("change", function (event) {
  event.stopPropagation();
  changeURLLanguage();
  location.reload();
});

function changeURLLanguage() {
  currentLanguage = selectedLanguage.value;

  if (window.hasOwnProperty("localStorage"))
    window.localStorage.setItem("lang", currentLanguage);
  location.href = `${window.location.pathname}#${currentLanguage}`;
}

if ((window.hasOwnProperty("localStorage")) && (window.localStorage.getItem("lang") !== currentLanguage)) {
  selectedLanguage.value = window.localStorage.getItem("lang") || "ru";
  changeURLLanguage();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);

  // If the pathname has an error, then use a default pathname: (#ru)
  // The best practice, in this case, is to use the geo-position of a user browser.
  if (!possibleLanguages.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    currentLanguage = hash;
    location.reload();
  }

  const translationDOMElems = document.querySelectorAll("[data-translate]");

  translationDOMElems.forEach(elem => {
    for (let key in translationArr) {

      if (elem.dataset.translate === key) {
        elem.innerText = translationArr[key][hash];
      };
    };
  });

};

changeLanguage();
