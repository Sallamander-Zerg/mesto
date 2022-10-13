import { Card } from "./Card.js";
import { initialCards, obj } from "./constData.js";
import { FormValidator } from "./FormValidator.js";
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
const buttonCloseAddProfile = document.querySelector(".js-close-butoon-Add");
const buttonCloseEditProfile = document.querySelector(".js-close-butoon-Edit");
const newImage = document.querySelector(".field-src");
const newImageName = document.querySelector(".field-alt");
const caseContentCards = document.querySelector(".elements");
const selectPhoto = document.querySelector(".popup__img");
const selectAlt = document.querySelector(".popup__name");
const popupImgProfile = document.querySelector(".js-popup-Img");
const popupMas = Array.from(document.querySelectorAll(".popup"));
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
const closeAllPopupsByOverlay = () => {
  popupMas.forEach(function (el) {
    closeAllPopupsByKey(el);
  });
};
const createCard = (text, alt, src) => {
  return new Card("#card", text, alt, src).generadeCard();
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
  newName.value = name.textContent;
  newJob.value = job.textContent;
  cardFormModalWindowEdit.disableButton();
});
buttonAddProfile.addEventListener("click", function () {
  openPopup(popupAddProfile);
  newImage.value = "";
  newImageName.value = "";
  cardFormModalWindowAdd.disableButton();
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
  const value = createCard(text, alt, src);
  addCards(value);
  closePopup(popupAddProfile);
}
formEdit.addEventListener("submit", submitFormHandler);
formCardAdd.addEventListener("submit", addFormCard);
buttonCloseImgProfile.addEventListener("click", () => {
  closePopup(popupImgProfile);
});
function addMasCards() {
  initialCards.forEach(function (el) {
    const newCard = createCard(el.text, el.alt, el.src);
    addCards(newCard);
  });
}
function addCards(el) {
  caseContentCards.prepend(el);
}
function formValidation() {
  cardFormModalWindowAdd.enableValidation();
  cardFormModalWindowEdit.enableValidation();
}
addMasCards();
formValidation();
closeAllPopupsByOverlay();
export { popupImgProfile, selectPhoto, selectAlt, caseContentCards, openPopup };
