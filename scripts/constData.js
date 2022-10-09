const obj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__field-error_active",
  errorInput: "popup__field_line-error",
  errorClass: "popup__field-error_active",
};
const initialCards = [
  {
    text: "Подольск",
    alt: "Истиный Подольск",
    src: "https://radiovera.ru/wp-content/uploads/2018/10/Gyustav-Dore-Ad.jpg",
  },
  {
    text: "Карачевск",
    alt: "Замок в горах",
    src: "images/1.jpg",
  },
  {
    text: "Гора Эльбрус",
    alt: "Закат на фоне горы Эльбрус",
    src: "images/2.jpg",
  },
  {
    text: "Домбай",
    alt: "лес на фоне гор",
    src: "images/3.jpg",
  },
  {
    text: "Гора Эльбрус",
    alt: "Закат на фоне горы Эльбрус",
    src: "images/4.jpg",
  },
  {
    text: "Домбай",
    alt: "лес на фоне гор",
    src: "images/5.jpg",
  },
  {
    text: "Карачаево-Черкесия",
    alt: "Замок в горах",
    src: "images/6.jpg",
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
export { initialCards, obj };
