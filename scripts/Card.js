import {
  popupImgProfile,
  selectPhoto,
  selectAlt,
  openPopup,
  caseContentCards,
} from "./index.js";
export class Card {
  constructor(templateSelector, text, alt, src) {
    this.templateSelector = templateSelector;
    this.alt = alt;
    this.text = text;
    this.src = src;
  }
  _getConfCard() {
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
    this.likeButton.addEventListener("click", () => {
      this.likeButton.classList.toggle("element__like-button_active");
    });
  }
  _openCard() {
    this.elementPhoto.addEventListener("click", () => {
      selectPhoto.src = this.elementPhoto.src;
      selectPhoto.alt = this.elementPhoto.alt;
      selectAlt.textContent = this.elementHendler.textContent;
      openPopup(popupImgProfile);
    });
  }
  _deleteCard() {
    this.newCard
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this.newCard.remove();
      });
  }
  _addEventListener() {
    this._likeCard();
    this._openCard();
    this._deleteCard();
  }
  _generadeCard() {
    this._getConfCard();
    this._addEventListener();
    this.elementPhoto.setAttribute("src", this.src);
    this.elementPhoto.setAttribute("alt", this.alt);
    this.newCard.querySelector(".element__header").textContent = this.text;
    this._prependCard();
  }
  _prependCard() {
    console.log(this.newCard);
    caseContentCards.prepend(this.newCard);
  }
}
