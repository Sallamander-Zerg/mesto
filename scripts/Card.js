import {popupImgProfile,selectPhoto,selectAlt,caseContentCards,openPopup} from './index.js';
export class Card{
    constructor(templateSelector,text,alt,src){
      this.templateSelector = templateSelector;
      this.alt = alt;
      this.text = text;
      this.src = src;
    }
   _getTemplate(){
    const Card = document.querySelector(this.templateSelector).content.querySelector('.element').cloneNode(true);
    return Card;
   }
   _likeCard(){
    this.newCard.querySelector('.element__like-button').addEventListener('click', ()=>{
      this.newCard.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    });
   }
   _openCard(){
    this.newCard.querySelector('.element__photo').addEventListener('click',()=>{
      openPopup(popupImgProfile);
      selectPhoto.src = this.newCard.querySelector('.element__photo').src;
      selectPhoto.alt = this.newCard.querySelector('.element__photo').alt
      selectAlt.textContent =  this.newCard.querySelector('.element__header').textContent;
     })
   }
   _deleateCard(){
    this.newCard.querySelector('.element__delete').addEventListener('click', ()=>{
      this.newCard.remove();
    });
   }
   _generadeCard(){
    this.newCard = this._getTemplate();
    this._likeCard();
    this._openCard();
    this._deleateCard();
    this.newCard.querySelector('.element__photo').setAttribute('src', this.src);
    this.newCard.querySelector('.element__photo').setAttribute('alt', this.alt);
    this.newCard.querySelector('.element__header').textContent = this.text;
    return this.newCard;  
   }
}
function addMasCards(){
    const initialCards = [
        {
          text:'Подольск',
          alt:"Истиный Подольск",
          src:'https://radiovera.ru/wp-content/uploads/2018/10/Gyustav-Dore-Ad.jpg'
        },
        {
          text:'Карачевск',
          alt:"Замок в горах",
          src:'images/1.jpg'
        },
        {
          text:'Гора Эльбрус',
          alt:"Закат на фоне горы Эльбрус",
          src:'images/2.jpg'
        },
        {
          text:'Домбай',
          alt:"лес на фоне гор",
          src:'images/3.jpg'
        },
        {
          text:'Гора Эльбрус',
          alt:"Закат на фоне горы Эльбрус",
          src:'images/4.jpg'
        },
        {
          text:'Домбай',
          alt:"лес на фоне гор",
          src:'images/5.jpg'
        },
        {
          text:'Карачаево-Черкесия',
          alt:"Замок в горах",
          src:'images/6.jpg'
        },
        {
          text: 'Архыз',
          alt:"тающий снег на вершинах гор",
          src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
        },
        {
          text: 'Челябинская область',
          alt:"озеро окруженное горами и виршинами",
          src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
        },
        {
          text: 'Иваново',
          alt:"страшный сон Варламова",
          src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
        },
        {
          text: 'Камчатка',
          alt:"поле перед горой",
          src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
        },
        {
          text: 'Холмогорский район',
          alt:"железная дорога посреди леса уходящая в даль",
          src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
        },
        {
          text: 'Байкал',
          alt:"склон горы перед замершим озером",
          src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
        }
      ]; 
      initialCards.forEach(function(el){
        const cartAset = new Card('#card',el.text,el.alt,el.src);
        const card = cartAset._generadeCard();
        console.log(card)
        caseContentCards.prepend(card);
      })    
}
addMasCards()