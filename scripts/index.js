import {Card} from"./Card.js";
import { initialCards ,obj} from"./constData.js"
import { FormValidator } from "./FormValidator.js"
const popupAddProfile = document.querySelector(".js-popup-Add");
const popupEditProfile = document.querySelector(".js-popup-edit");
const newName = document.querySelector(".field-name");
const newJob = document.querySelector(".field-job");
const job = document.querySelector(".profile__text");
const name = document.querySelector(".profile__title");
const formEdit = document.querySelector(".js-popup-forEdit");
const formCardAdd = document.querySelector(".js-popup-forAdd");
const buttonAddProfile = document.querySelector(".profile__add-button");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonCloseAddProfile = document.querySelector(".js-closeButoon-Add");
const buttonCloseEditProfile = document.querySelector(".js-closeButoon-Edit");
const newImage = document.querySelector(".field-src");
const newImageName = document.querySelector(".field-alt");
const caseContentCards = document.querySelector(".elements");
const selectPhoto = document.querySelector(".popup__img");
const selectAlt = document.querySelector(".popup__name");
const popupImgProfile = document.querySelector(".js-popup-Img");
const buttonSubmit = document.querySelector(".popup__save-button");
const popupMas = Array.from(document.querySelectorAll(".popup"));
const buttonCloseImgProfile = document.querySelector(
  ".popup__close-butoon-img"
);
const closeAllPopupsByOverlay = () => {
  popupMas.forEach(function (el) {
    closeAllPopupsByKey(el);
  });
};
const openPopup = (popup) => {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closeByEscape);
};
const closePopup = (popup) => {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", closeByEscape);
};

buttonEditProfile.addEventListener("click", function () {
  openPopup(popupEditProfile);
  buttonSubmit.setAttribute("disabled","disabled")
  newName.value = name.textContent;
  newJob.value = job.textContent;
});
buttonAddProfile.addEventListener("click", function () {
  openPopup(popupAddProfile);
  buttonSubmit.setAttribute("disabled","disabled")
  newImage.value = "";
  newImageName.value = "";
});
function closeAllPopupsByKey(pop) {
  pop.addEventListener("click", function (evt) {
    if (!evt.target.closest(".popup__container")) {
      closePopup(pop);
    }
  });
}
function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_active");
    closePopup(openedPopup);
  }
}
buttonCloseEditProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
});
buttonCloseAddProfile.addEventListener("click", function () {
  closePopup(popupAddProfile);
});
function submitFormHandler(evt) {
  evt.preventDefault();
  name.textContent = newName.value;
  job.textContent = newJob.value;
  closePopup(popupEditProfile);
}
function addFormCard(evt) {
  evt.preventDefault();
  const src = newImage.value;
  const text = newImageName.value;
  const alt = newImageName.value;
  const value = new Card("#card",text, alt, src)._generadeCard();
  console.log(value)
  closePopup(popupAddProfile);
}
formEdit.addEventListener("submit", submitFormHandler);
formCardAdd.addEventListener("submit", addFormCard);
buttonCloseImgProfile.addEventListener("click", () => {
  closePopup(popupImgProfile);
});
function addMasCards() {
  initialCards.forEach(function (el) {
    const cartAset = new Card("#card", el.text, el.alt, el.src)._generadeCard();
  });
}
function validation() {
  const valStat = new FormValidator(obj, ".popup__form")._enableValidation();
}
addMasCards();
validation();
closeAllPopupsByOverlay();
export { popupImgProfile, selectPhoto, selectAlt, caseContentCards, openPopup };
