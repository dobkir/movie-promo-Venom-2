const selectedLanguage = document.querySelector(".change-lang");
let currentLanguage = selectedLanguage.value;

selectedLanguage.addEventListener("change", function (event) {
  event.stopPropagation();
  changeURLLanguage();
  window.location.reload();
});

export function fetchStorageLanguage() {
  if (
    (window.hasOwnProperty("localStorage"))
    && (window.localStorage.getItem("lang")
      !== currentLanguage)
  ) {
    selectedLanguage.value = window.localStorage.getItem("lang") || "ru";
    changeURLLanguage();
    fetchingTextTranslation();
  }
}

function changeURLLanguage() {
  currentLanguage = selectedLanguage.value;

  if (window.hasOwnProperty("localStorage"))
    window.localStorage.setItem("lang", currentLanguage);
  window.location.hash = `#${currentLanguage}`;
}

// Request for API for the text translation to the desired language
function fetchingTextTranslation() {
  let hash = window.location.hash;
  hash = hash.substr(1);

  fetch('https://api.jsonbin.io/b/610fe7b1d5667e403a3b8dcc', {
    headers: {
      "secret-key": "$2b$10$65lTDH3r4YCHqsLIzTJGZ.fIzJmJPTL24xO2Ol3sH9.saBA4cwWLW"
    }
  })
    .then(response => {
      if (response.status != 200) {
        alert(`HTTP-Error: ${response.status}. We work on it`);
        return null;
      } else {
        return response.json();
      }
    })
    .then(translation => {
      translateDOM(translation, hash);
    })
    .catch(error => alert(`Oops, any problem here: ${error.name}. ${error.message}`));
}

function translateDOM(translation, hash) {
  const translationDOMElems = document.querySelectorAll("[data-translate]");

  for (let elem of translationDOMElems) {
    for (let key in translation) {

      if (elem.dataset.translate === key) {
        elem.innerText = translation[key][hash];
      };
    }
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
