import "./styles/index.css";
import { Card } from "../scripts/Card.js";
import {
  initialCards,
  obj,
  infoJob,
  infoName,
  popupAddProfile,
  popupEditProfile,
  buttonAddProfile,
  buttonEditProfile,
  newImage,
  newImageName,
  popupImgProfile,
  CardSection,
} from "../scripts/constData.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { Section } from "../scripts/Section";
import Popup from "../scripts/Popup.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo";
import PopupWithImage from "../scripts/PopupWithImage";
const editPopup = new Popup(popupEditProfile);
const addPopup = new Popup(popupAddProfile);
const cardFormModalWindowAdd = new FormValidator(
  obj,
  document.querySelector(".popup_type_card")
);
const cardFormModalWindowEdit = new FormValidator(
  obj,
  document.querySelector(".popup_type_edit")
);
const buttonCloseImgProfile = document.querySelector(
  ".popup__close-butoon-img"
);
const userInfo = new UserInfo(".profile__title", ".profile__text");
const imgPopup = new PopupWithImage(popupImgProfile);
buttonEditProfile.addEventListener("click", function () {
  editPopup.open();
  const userData = userInfo.getUserInfo();
  infoName.value = userData.name;
  infoJob.value = userData.info;
  cardFormModalWindowEdit.disableButton();
});
buttonAddProfile.addEventListener("click", function () {
  addPopup.open();
  newImage.value = "";
  newImageName.value = "";
  cardFormModalWindowAdd.disableButton();
});
const createCard = (text, alt, src, handleCardClick) => {
  return new Card("#card", text, alt, src, handleCardClick).generadeCard();
};
const handleCardClick = (openImg) => {
  imgPopup.open(openImg.link, openImg.name);
};
const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = createCard(
        item.text,
        item.alt,
        item.src,
        handleCardClick
      );
      sectionCards.additem(newCard);
    },
  },
  CardSection
);
sectionCards.renderItems();
const FormSubmitEdit = (fieldValues) => {
  console.log(fieldValues);
  userInfo.setUserInfo(fieldValues.fieldName, fieldValues.fieldJob);
};
const FormSubmitAdd = (fieldAddValues) => {
  const newCard = createCard(
    fieldAddValues.fieldMesto,
    fieldAddValues.fieldMesto,
    fieldAddValues.fieldSrc,
    handleCardClick
  );
  sectionCards.additem(newCard);
};
const submitFormHandler = new PopupWithForm(popupEditProfile, FormSubmitEdit);
const submitFormAdd = new PopupWithForm(popupAddProfile, FormSubmitAdd);

submitFormHandler.setEventListeners();
submitFormAdd.setEventListeners();
function formValidation() {
  cardFormModalWindowAdd.enableValidation();
  cardFormModalWindowEdit.enableValidation();
}
formValidation();
