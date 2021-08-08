const selectedLanguage = document.querySelector(".change-lang");
let currentLanguage = selectedLanguage.value;

const possibleLanguages = ["en", "ru"];

selectedLanguage.addEventListener("change", function (event) {
  event.stopPropagation();
  changeURLLanguage();
  location.reload();
});

export function fetchStorageLanguage() {
  if (
    (window.hasOwnProperty("localStorage"))
    && (window.localStorage.getItem("lang")
      !== currentLanguage)
  ) {
    selectedLanguage.value = window.localStorage.getItem("lang") || "ru";
    changeURLLanguage();
    changeLanguage();
  }
}

function changeURLLanguage() {
  currentLanguage = selectedLanguage.value;

  if (window.hasOwnProperty("localStorage"))
    window.localStorage.setItem("lang", currentLanguage);
  location.href = `${window.location.pathname}#${currentLanguage}`;
}

// fetchStorageLanguage();

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

  fetch('https://api.jsonbin.io/b/610d60d6d5667e403a3a7f0f', {
    headers: {
      "secret-key": "$2b$10$65lTDH3r4YCHqsLIzTJGZ.fIzJmJPTL24xO2Ol3sH9.saBA4cwWLW"
    }
  })
    .then(response => {
      if (response.status != 200) {
        alert("Sorry, the connection with the server has dined! We work on this.")
        return null;
      } else {
        return response.json();
      }
    })
    .then(translation => {
      translateDOM(translation, hash);
    })
    .catch(error => console.log('error', error));

};

function translateDOM(translation, hash) {
  const translationDOMElems = document.querySelectorAll("[data-translate]");

  for (let elem of translationDOMElems) {
    for (let key in translation) {

      if (elem.dataset.translate === key) {
        elem.innerText = translation[key][hash];
      };
    };
  }
}

// The Rule of text translate for eTimer
export function toggleETimer(hash) {
  const eTimerRu = document.querySelector(".eTimerRu");
  const eTimerEn = document.querySelector(".eTimerEn");

  switch (hash) {
    case "#ru":
      eTimerRu.style.display = "inline-block";
      eTimerEn.style.display = "none";
      break;
    case "#en":
      eTimerRu.style.display = "none";
      eTimerEn.style.display = "inline-block";
      break;
    default:
      eTimerRu.style.display = "inline-block";
      eTimerEn.style.display = "none";
  }
}
