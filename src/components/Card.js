export class Card {
  constructor(templateSelector, text, alt, src, { handleCardClick }) {
    this._templateSelector = templateSelector;
    this.alt = alt;
    this.text = text;
    this.src = src;
    this.handleCardClick = handleCardClick;
  }
  _createTemplateCard() {
    this.newCard = document
      .querySelector(this._templateSelector)
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
    this.handleCardClick({ link: this.src, name: this.text });
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
  generateCard() {
    this._createTemplateCard();
    this._addEventListener();
    this.elementPhoto.setAttribute("src", this.src);
    this.elementPhoto.setAttribute("alt", this.alt);
    this.newCard.querySelector(".element__header").textContent = this.text;
    return this.newCard;
  }
}
