export class Card {
  constructor(templateSelector, {data},userId,{handleCardClick,handleSetLike,handleRemoveLike, handleDeleteCard}) {
    this._templateSelector = templateSelector;
    this._title = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._likes = data.likes;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleDeleteCard = handleDeleteCard;
  }
  _createTemplateCard() {
    this._newCard = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);  
    this._elementPhoto = this._newCard.querySelector(".element__photo");
    this._likeButton = this._newCard.querySelector(".element__like-button");
    this._likesNumber = this._newCard.querySelector('.element__likes-number');
  }
  _likeCard() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._likeButton.classList.add('element__like-button_active');
    }
  }
  massLikeCard(data) {
    this._likes = data.likes;
    this._likesNumber.textContent = this._likes.length;
    this._likeButton.classList.toggle('element__like-button_active');
  }
  _deletedCard() {
    if (this._userId !== this._cardOwnerId) {
      this._newCard.querySelector(".element__delete").remove();
    }
  }
  _activelike(){
    if (this._likeButton.classList.contains('element__like-button_active')) {
      this._handleRemoveLike(this._cardId);
    } else {
      this._handleSetLike(this._cardId);
    }
  }
  deleteCard() {
    this._newCard.remove();
  }
  _addEventListener() {
    this._likeButton.addEventListener("click", () => {
      this._activelike()
    });
    this._elementPhoto.addEventListener("click", () => {
      this._handleCardClick(this._link, this._title);
    });
    this._newCard.querySelector(".element__delete").addEventListener('click', () => {
      this._handleDeleteCard(this._cardId);
    })
  }
  generateCard() {
    this._createTemplateCard();
    this._addEventListener();
    this._elementPhoto.setAttribute("src", this._link);
    this._elementPhoto.setAttribute("alt", this._title);
    this._newCard.querySelector(".element__header").textContent = this._title;
    this._likesNumber.textContent = this._likes.length;
    this._deletedCard();
    this._likeCard();
    return this._newCard;
  }
}
