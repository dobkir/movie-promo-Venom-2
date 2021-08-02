export const addHideForm = () => {
  return (`
  <!--+++++++++++++++++ The widget-consultant +++++++++++++++++-->

    <button class="order-trigger">
      — И куда едем?
    </button>
    <div class="order-ticket">
      <form class="order-ticket__form">
        <fieldset class="order-ticket__form-wrapper">
          <legend class="order-ticket__title">Заполните форму</legend>
          <small class="order-ticket__description">И получите на почту расписание ближайших сеансов в вашем городе и
            возможные акции</small>
          <label class="order-ticket__label">
            <input class="order-ticket__input" type="text" required name="name">
            <span class="order-ticket__label-text">Имя</span>
          </label>
          <label class="order-ticket__label">
            <input class="order-ticket__input" type="text" name="surname">
            <span class="order-ticket__label-text">Фамилия</span>
          </label>
          <label class="order-ticket__label">
            <input class="order-ticket__input" type="text" required name="city">
            <span class="order-ticket__label-text">Город</span>
          </label>
          <label class="order-ticket__label">
            <input class="order-ticket__input" type="email" required name="mail">
            <span class="order-ticket__label-text">e-mail</span>
          </label>
          <label class="order-ticket__label">
            <input class="order-ticket__checkbox" type="checkbox" required name="personal" value="agree">
            <span class="order-ticket__label-checkbox-text">Я согласен на обработку моих <a href="#">персональных
                данных</a></span>
          </label>
          <button>Отправить</button>
        </fieldset>
        <div class="order-ticket__preloader-wrapper">
          <video loop muted autoplay playsinline src="images/6.mp4" type="video/mp4"></video>
        </div>
        <fieldset class="order-ticket__thanks-wrapper">
          <legend>Спасибо <span class="order-ticket__thanks-name">-имя-</span></legend>
          <p>Вам на почту в скором времени будет отправлено письмо с расписание сеансов в вашем городе</p>
        </fieldset>
      </form>
    </div>
 
  <!--++++++++++++++ End of the widget-consultant ++++++++++++++-->
`)
};

