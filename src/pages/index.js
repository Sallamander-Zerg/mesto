import "./index.css";
import { Card } from "../components/Card.js";
import { initialCards, obj } from "../utils/utils.js";
import {
  infoJob,
  infoName,
  buttonAddProfile,
  buttonEditProfile,
  cardSection,
} from "../utils/constData.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo";
import PopupWithImage from "../components/PopupWithImage";
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
const Submitadd = (fieldAddValues) => {
  const newCard = createCard(
    fieldAddValues.fieldMesto,
    fieldAddValues.fieldSrc
  );
  sectionCards.additem(newCard);
};
const submitFormAdd = new PopupWithForm(".js-popup-Add", Submitadd);
const Submitedit = (fieldValues) => {
  userInfo.setUserInfo(fieldValues.fieldName, fieldValues.fieldJob);
};
const submitFormHandler = new PopupWithForm(".js-popup-edit", Submitedit );
submitFormHandler.setEventListeners();
submitFormAdd.setEventListeners();
buttonEditProfile.addEventListener("click", function () {
  submitFormHandler.open();
  const userData = userInfo.getUserInfo();
  infoName.value = userData.name;
  infoJob.value = userData.info;
  cardFormModalWindowEditValidator.disableButton();
});
buttonAddProfile.addEventListener("click", function () {
  submitFormAdd.open();
  cardFormModalWindowAddValidator.disableButton();
});
function validateForm() {
  cardFormModalWindowAddValidator.enableValidation();
  cardFormModalWindowEditValidator.enableValidation();
}
validateForm();