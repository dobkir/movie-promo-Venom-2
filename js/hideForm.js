export const addHideForm = () => {
  return (`
<!--+++++++++++++++++ The widget - consultant+++++++++++++++++ -->

<button class="order-trigger" data-translate="form-trigger">
  — И куда едем?
</button>
<div class="order-ticket">
  <form class="order-ticket__form">
    <fieldset class="order-ticket__form-wrapper">
      <legend class="order-ticket__title" data-translate="form-welcome">Заполните форму</legend>
      <small class="order-ticket__description" data-translate="form-descritpion">И получите по почте расписание
        ближайших киносеансов в вашем городе и возможные акции.</small>
      <label class="order-ticket__label">
        <input class="order-ticket__input" type="text" required name="name">
        <span class="order-ticket__label-text" data-translate="form-name">Имя</span>
      </label>
      <label class="order-ticket__label">
        <input class="order-ticket__input" type="text" name="surname">
        <span class="order-ticket__label-text" data-translate="form-surname">Фамилия</span>
      </label>
      <label class="order-ticket__label">
        <input class="order-ticket__input" type="text" required name="city">
        <span class="order-ticket__label-text" data-translate="form-city">Город</span>
      </label>
      <label class="order-ticket__label">
        <input class="order-ticket__input" type="email" required name="mail">
        <span class="order-ticket__label-text" data-translate="form-e-mail">e-mail</span>
      </label>
      <label class="order-ticket__label">
        <input class="order-ticket__checkbox" type="checkbox" required name="personal" value="agree">
        <span class="order-ticket__label-checkbox-text" data-translate="form-agreement">Я согласен на обработку
          моих </span><a href="privacy-rus.html" data-translate="form-personal-data">персональных
          данных</a>
      </label>
      <button data-translate="form-send">Отправить</button>
    </fieldset>
    <div class="order-ticket__preloader-wrapper">
      <video loop muted autoplay playsinline src="images/sendFormVideo.mp4" type="video/mp4"></video>
    </div>
    <fieldset class="order-ticket__thanks-wrapper">
      <legend data-translate="form-thanks">Спасибо <span class="order-ticket__thanks-name"
          data-translate="form-name">-имя-</span></legend>
      <p data-translate="form-sending-description">Вам на почту в скором времени будет отправлено письмо с
        расписанием сеансов в вашем городе</p>
    </fieldset>
  </form>
</div>

<!--++++++++++++++ End of the widget-consultant ++++++++++++++-->
`)
};