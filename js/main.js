//============ Active nav link on the corresponding page ============//

const navLink = document.querySelectorAll('.nav__menu--link');
for (let i = 0; i < navLink.length; i++)
  if (navLink[i].href == document.URL.split(/[\?#]/)[0]) {
    navLink[i].style.cssText = 'color: rgba(255, 255, 255, .9);';
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

//===================== The widget-consultant =====================//

const hideForm = document.querySelector('.hide-form');
const orderTicket = document.querySelector('.order-ticket');
const orderTrigger = document.querySelector('.order-trigger');
const orderTicketForm = document.querySelector('.order-ticket__form');

/**
 * Smooth appearance of the form button 
 * at the bottom of the website page.
 */
setTimeout(() => {
  const formHeight = orderTicket.offsetHeight;
  hideForm.style.bottom = -formHeight + 'px';
}, 1000);

/**
 * Toggle the position of the form depending
 * on the click on the button with the class '.order-trigger'.
 */
orderTrigger.addEventListener('click', () => {
  hideForm.classList.toggle('hide-form-active');
});

/**
 * When the input value is changed, the input field label remains
 * at the top. Otherwise, move the field label to the input field.
 */
orderTicketForm.addEventListener('change', (event) => {
  const target = event.target;
  const label = target.labels[0];

  if (label && target.value) {
    label.classList.add('order-ticket__label-focus');
  } else {
    label.classList.remove('order-ticket__label-focus');
  }
});



//===================> Sending user data to the server
const orderTicketFormWrapper = document.querySelector('.order-ticket__form-wrapper');
const orderTicketPreloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper');
const orderTicketThanksWrapper = document.querySelector('.order-ticket__thanks-wrapper');
const orderTicketThanksName = document.querySelector('.order-ticket__thanks-name');

/**
 * Show preloader while sending data
 */
const showPreloader = () => {
  orderTicketFormWrapper.style.display = 'none';
  orderTicketPreloaderWrapper.style.display = 'block';
}

/**
 * Submitting user data to the server
 */
const sendData = (data, callback, callBefore) => {

  if (callBefore) callBefore();

  fetch('https://jsonplaceholder.typicode.com/posts', {
    // to use local backend fetch('http://localhost:3000/api')
    // directory: 'venom-backend'
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json()
  }).then(data => callback(data));
}

/**
 * Show thanks after sending data
 */
const showThankYou = (data) => {
  orderTicketFormWrapper.style.display = 'none';
  orderTicketPreloaderWrapper.style.display = 'none';
  orderTicketThanksWrapper.style.display = 'block';
  orderTicketThanksName.textContent = data.name;
}


/**
 * Submitting user data from a form.
 */
orderTicketForm.addEventListener('submit', (event) => {
  /**
   * Data will be submitted not with the browser request "get".
   * Therefore, we will disable the standard browser
   * action on the "send" event.
   */
  event.preventDefault();

  /**
   * Collecting data from the form.
   */

  const formData = new FormData(orderTicketForm);

  const data = {};

  for (const [name, value] of formData) {
    data[name] = value;
  }

  /**
  * Sending data from the form.
  */
  sendData(data, showThankYou, showPreloader);

});

//================== End of the widget-consultant ==================//
