import { widgetConsultant } from "./widgetConsultant.js";

//============ Active nav link on the corresponding page ============//

const navLink = document.querySelectorAll('.nav__menu--link');
const pageWidth = document.documentElement.scrollWidth;

for (let i = 0; i < navLink.length; i++)
  if (navLink[i].href == document.URL.split(/[\?#]/)[0]) {
    navLink[i].style.cssText = 'color: rgba(255, 255, 255, .9);';
    if (pageWidth < 576) {
      navLink[i].style.cssText = 'color: rgba(17, 8, 66, .5);';
    }
  }

//========= End of active nav link on the corresponding page ========//


//======================= Mobile menu toggle =======================//

const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.nav__menu');
const menuCloseButton = document.querySelector('.menu__close');

menuButton.addEventListener('click', () => {
  menu.classList.add('is-active');
  menuCloseButton.classList.add('is-active');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('is-active');
  menuCloseButton.classList.remove('is-active');
});

//=================== End of Mobile menu toggle ===================//

widgetConsultant();