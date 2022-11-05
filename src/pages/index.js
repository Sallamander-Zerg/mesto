import "./index.css";
import { Card } from "../components/Card.js";
import { initialCards, obj } from "../utils/utils.js";
import {
  infoJob,
  infoName,
  buttonAddProfile,
  buttonEditProfile,
  cardSection,
  buttonEditAvatarProfile
} from "../utils/constData.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo";
import Api from "../components/Api"
import PopupWithImage from "../components/PopupWithImage";
import Popup from "../components/Popup";
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
  headers: {
    authorization: '1ce13fac-ab02-437f-bb39-64ceea4d3ebd',
    'Content-Type': 'application/json'
  }
});
const cardFormModalWindowAddValidator = new FormValidator(
  obj,
  document.querySelector(".popup_type_card")
);
const cardFormModalWindowEditValidator = new FormValidator(
  obj,
  document.querySelector(".popup_type_edit")
);
const userInfo = new UserInfo(".profile__title", ".profile__text");
const imgPopup = new PopupWithImage(".js-popup-Img");
const createCard = (title, link) => {
  return new Card("#card", {title, link}, {
    handleCardClick: (openImg) => {
      imgPopup.open(openImg.link, openImg.name);
    },
  }).generateCard();
};
const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = createCard(item.text ,item.src);
      sectionCards.additem(newCard);
    },
  },
  cardSection
);
sectionCards.renderItems();
const handleSubmitAddCardForm = (fieldAddValues) => {
  const newCard = createCard(
    fieldAddValues.fieldMesto,
    fieldAddValues.fieldSrc
  );
  sectionCards.additem(newCard);
};
const submitFormAdd = new PopupWithForm(".js-popup-Add", handleSubmitAddCardForm);
const handleSubmitEditProfileForm = (fieldValues) => {
  userInfo.setUserInfo(fieldValues.fieldName, fieldValues.fieldJob);
};
const submitFormHandler = new PopupWithForm(".js-popup-edit", handleSubmitEditProfileForm);
submitFormHandler.setEventListeners();
submitFormAdd.setEventListeners();
imgPopup.setEventListeners();

buttonEditProfile.addEventListener("click", function () {
  submitFormHandler.open();
  const userData = userInfo.getUserInfo();
  infoName.value = userData.name;
  infoJob.value = userData.info;
  cardFormModalWindowEditValidator.disableButton();
});
buttonEditAvatarProfile.addEventListener("click",function(){
  new Popup(".js-popup-avatar").open()
})
buttonAddProfile.addEventListener("click", function () {
  submitFormAdd.open();
  cardFormModalWindowAddValidator.disableButton();
});
function validateForm() {
  cardFormModalWindowAddValidator.enableValidation();
  cardFormModalWindowEditValidator.enableValidation();
}
validateForm();
