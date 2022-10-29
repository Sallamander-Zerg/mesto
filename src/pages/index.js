import "./index.css";
import { Card } from "../components/Card.js";
import { initialCards, obj } from "../utils/utils.js";
import {
  infoJob,
  infoName,
  buttonAddProfile,
  buttonEditProfile,
  newImage,
  newImageName,
  popupImgProfile,
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
const createCard = (text, alt, src) => {
  return new Card("#card", text, alt, src, {
    handleCardClick: (openImg) => {
      imgPopup.open(openImg.link, openImg.name);
    },
  }).generateCard();
};
const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = createCard(item.text, item.alt, item.src);
      sectionCards.additem(newCard);
    },
  },
  cardSection
);
sectionCards.renderItems();
const SubmitformAdd = (fieldAddValues) => {
  const newCard = createCard(
    fieldAddValues.fieldMesto,
    fieldAddValues.fieldMesto,
    fieldAddValues.fieldSrc
  );
  sectionCards.additem(newCard);
};
const submitFormAdd = new PopupWithForm(".js-popup-Add", SubmitformAdd);
const SubmitformEdit = (fieldValues) => {
  console.log(fieldValues.fieldName, fieldValues.fieldJob);
  userInfo.setUserInfo(fieldValues.fieldName, fieldValues.fieldJob);
};
const submitFormHandler = new PopupWithForm(".js-popup-edit", SubmitformEdit);
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
function validationForm() {
  cardFormModalWindowAddValidator.enableValidation();
  cardFormModalWindowEditValidator.enableValidation();
}
validationForm();
