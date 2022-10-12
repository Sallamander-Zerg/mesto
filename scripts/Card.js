import { popupImgProfile, selectPhoto, selectAlt, openPopup } from "./index.js";
export class Card {
  constructor(templateSelector, text, alt, src) {
    this.templateSelector = templateSelector;
    this.alt = alt;
    this.text = text;
    this.src = src;
  }
  _createTemplateCard() {
    console.log(this.templateSelector);
    this.newCard = document
      .querySelector(this.templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    this.elementPhoto = this.newCard.querySelector(".element__photo");
    this.elementHendler = this.newCard.querySelector(".element__header");
    this.likeButton = this.newCard.querySelector(".element__like-button");
  }
  _likeCard() {
    this.likeButton.classList.toggle("element__like-button_active");
  }
  _openCard() {
    selectPhoto.src = this.elementPhoto.src;
    selectPhoto.alt = this.elementPhoto.alt;
    selectAlt.textContent = this.elementHendler.textContent;
    openPopup(popupImgProfile);
  }
  _deleteCard() {
    this.newCard.remove();
  }
  _addEventListener() {
    this.likeButton.addEventListener("click", () => {
      this._likeCard();
    });
    this.elementPhoto.addEventListener("click", () => {
      this._openCard();
    });
    this.newCard
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._deleteCard();
      });
  }
  generadeCard() {
    this._createTemplateCard();
    this._addEventListener();
    this.elementPhoto.setAttribute("src", this.src);
    this.elementPhoto.setAttribute("alt", this.alt);
    this.newCard.querySelector(".element__header").textContent = this.text;
    return this.newCard;
  }
}
