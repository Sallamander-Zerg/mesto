export const obj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__field-error_active",
  errorInput: "popup__field_line-error",
  errorClass: "popup__field-error_active",
};
export const initialCards = [
  {
    text: "Подольск",
    alt: "Истиный Подольск",
    src: "https://radiovera.ru/wp-content/uploads/2018/10/Gyustav-Dore-Ad.jpg",
  },
  {
    text: "Карачевск",
    alt: "Замок в горах",
    src: "https://nesiditsa.ru/wp-content/uploads/2014/05/Sentinskiy-hram-bliz-aula-Nizhnyaya-Teberda.jpg",
  },
  {
    text: "Мусса-Ачитара",
    alt: "вершина Мусса-Ачитара",
    src: "https://public.mishka.travel/images/mini/f767c0236739b5b.jpg",
  },
  {
    text: "плато Бермамыт",
    alt: "рассвет на плато Бермамыт",
    src: "https://static.guidego.ru/webp/60c31aa45742852b75b9c020.1600x1200.webp",
  },
  {
    text: "Архыз",
    alt: "тающий снег на вершинах гор",
    src: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    text: "Челябинская область",
    alt: "озеро окруженное горами и виршинами",
    src: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    text: "Иваново",
    alt: "страшный сон Варламова",
    src: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    text: "Камчатка",
    alt: "поле перед горой",
    src: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    text: "Холмогорский район",
    alt: "железная дорога посреди леса уходящая в даль",
    src: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    text: "Байкал",
    alt: "склон горы перед замершим озером",
    src: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
export const popupAddProfile = document.querySelector(".js-popup-Add");
export const popupEditProfile = document.querySelector(".js-popup-edit");
export const infoName = document.querySelector(".field-name");
export const infoJob = document.querySelector(".field-job");
export const formEdit = document.querySelector(".js-popup-for-edit");
export const formCardAdd = document.querySelector(".js-popup-for-add");
export const buttonAddProfile = document.querySelector(".profile__add-button");
export const buttonEditProfile = document.querySelector(
  ".profile__edit-button"
);
export const newImage = document.querySelector(".field-src");
export const newImageName = document.querySelector(".field-alt");
export const caseContentCards = document.querySelector(".elements");
export const popupImgProfile = document.querySelector(".js-popup-Img");
export const CardSection = document.querySelector(".elements");
