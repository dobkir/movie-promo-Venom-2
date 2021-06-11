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
