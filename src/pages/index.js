import "./index.css";
import { Card } from "../components/Card.js";
import { initialCards, obj } from "../utils/utils.js";
import {
  infoJob,
  infoName,
  buttonAddProfile,
  buttonEditProfile,
  cardSection,
  buttonEditAvatarProfile,
  infoAvatar
} from "../utils/constData.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo";
import Api from "../components/Api"
import PopupWithImage from "../components/PopupWithImage";
import DeletePopup from "../components/DeletePopup"
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
  headers: {
    authorization: '1ce13fac-ab02-437f-bb39-64ceea4d3ebd',
    'Content-Type': 'application/json'
  }
});
const cardFormModalWindowEditAvatarValidator = new FormValidator(
  obj,
  document.querySelector(".popup_type_edit-Avatar")
);
const cardFormModalWindowAddValidator = new FormValidator(
  obj,
  document.querySelector(".popup_type_card")
);
const cardFormModalWindowEditValidator = new FormValidator(
  obj,
  document.querySelector(".popup_type_edit")
);
const deleteCard = new DeletePopup(".js-popup-answer")
const userInfo = new UserInfo(".profile__title", ".profile__text",".profile__avatar");
const imgPopup = new PopupWithImage(".js-popup-Img");
let userId;
Promise.all([api.getMassCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    console.log(initialCards)
    sectionCards.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });
const createCard = (data) => {
  const item = new Card("#card", {data},userId, {
    handleCardClick: (link, name) => {
      imgPopup.open(link, name);
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          item.massLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleDeleteCard: (cardId) => {
      deleteCard.open();
      deleteCard.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCard.close();
            item.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          item.massLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
  });
  const cardElement = item.generateCard();
  return cardElement
};
const sectionCards = new Section(
  {
    renderer: (item) => {
      console.log(item)
      const newCard = createCard(item);
      sectionCards.additem(newCard);
    },
  },
  cardSection
);
sectionCards.renderItems();
const handleSubmitAddCardForm = (fieldValues) => {
  submitFormAdd.loading(true);
  api.addCard(fieldValues)
    .then((fieldValue) => {
      console.log(fieldValue)
      const createdCard = createCard(fieldValue)
      sectionCards.additem(createdCard);
      submitFormAdd.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      submitFormAdd.loading(false);
    });
};
const submitFormAdd = new PopupWithForm(".js-popup-Add", handleSubmitAddCardForm);
const handleSubmitEditProfileForm = (fieldValues) => {
  console.log(fieldValues)
submitFormHandler.loading(true);
api.editUserInfo(fieldValues)
  .then((fieldValues)=>{
    console.log(fieldValues)
    userInfo.setUserInfo(fieldValues);
    submitFormHandler.close();
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
  .finally(() => {
    submitFormHandler.loading(false);
  });
};
const submitFormHandler = new PopupWithForm(".js-popup-edit", handleSubmitEditProfileForm);
const handleSubmitAvatarProfileForm = (fieldValues) => {
  console.log(fieldValues)
  submitFormAvatar.loading(true);
api.editAvatar(fieldValues)
  .then((fieldValues)=>{
    console.log(fieldValues)
    userInfo.setUserInfo(fieldValues);
    submitFormAvatar.close();
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
  .finally(() => {
    submitFormAvatar.loading(false);
  });
};
const submitFormAvatar = new PopupWithForm(".js-popup-avatar", handleSubmitAvatarProfileForm);
submitFormHandler.setEventListeners();
submitFormAdd.setEventListeners();
imgPopup.setEventListeners();
submitFormAvatar.setEventListeners();
deleteCard.setEventListeners();
buttonEditProfile.addEventListener("click", function () {
  submitFormHandler.open();
  const userData = userInfo.getUserInfo();
  infoName.value = userData.name;
  infoJob.value = userData.info;
  cardFormModalWindowEditValidator.disableButton();
});
buttonEditAvatarProfile.addEventListener("click",function(){
  submitFormAvatar.open()
  const userData = userInfo.getUserInfo();
  infoAvatar.value = userData.avatar;
  cardFormModalWindowEditAvatarValidator.disableButton();
})
buttonAddProfile.addEventListener("click", function () {
  submitFormAdd.open();
  cardFormModalWindowAddValidator.disableButton();
});
function validateForm() {
  cardFormModalWindowAddValidator.enableValidation();
  cardFormModalWindowEditValidator.enableValidation();
  cardFormModalWindowEditAvatarValidator.enableValidation();
}
validateForm();
