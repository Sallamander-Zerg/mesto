const popupContaner =document.querySelectorAll('.popup');
const popupAddProfile=document.querySelector('.js-popup-Add');
const popupEditProfile=document.querySelector('.js-popup-edit');
let newname= document.querySelector('.field-jod');
let newjob = document.querySelector('.field-name');
let job = document.querySelector('.profile__text');
let name = document.querySelector('.profile__title');
const form = document.querySelector('.js-popup-forEdit');
const cardAdd = document.querySelector('.js-popup-forAdd');
let likeButton = document.querySelectorAll('.element__like-button');
const buttonAddProfile = document.querySelector('.profile__add-button');
const buttonEditProfile  = document.querySelector('.profile__edit-button');
const buttonsCloseProfile = document.querySelectorAll('.popup__close-butoon');
let newimege= document.querySelector('.field-src');
let newimegename = document.querySelector('.field-alt');
let camelCase = document.querySelector('#card').content;
let cards = document.querySelector('.elements');
let element = document.querySelectorAll('.element')
let photo = document.querySelectorAll('.element__photo');
let sPhoto = document.querySelector('.popup__img');
let sAlt = document.querySelector('.popup__name');
const popupImgProfile = document.querySelector('.js-popup-Img');
const buttonCloseImgProfile = document.querySelector('.popup__close-butoon-img');
const activePopup = (popup)=>{
  popup.classList.add('popup_active');
 };
 const notActivePopup = (cPopup)=>{
  cPopup.classList.remove('popup_active');
 };
const initialCards = [
  {
    text:'Подольск',
    src:'https://radiovera.ru/wp-content/uploads/2018/10/Gyustav-Dore-Ad.jpg'
  },
  {
    text:'Карачевск',
    src:'images/1.jpg'
  },
  {
    text:'Гора Эльбрус',
    src:'images/2.jpg'
  },
  {
    text:'Домбай',
    src:'images/3.jpg'
  },
  {
    text:'Гора Эльбрус',
    src:'images/4.jpg'
  },
  {
    text:'Домбай',
    src:'images/5.jpg'
  },
  {
    text:'Карачаево-Черкесия',
    src:'images/6.jpg'
  },
  {
    text: 'Архыз',
    src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    text: 'Челябинская область',
    src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    text: 'Иваново',
    src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    text: 'Камчатка',
    src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    text: 'Холмогорский район',
    src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    text: 'Байкал',
    src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
buttonEditProfile.addEventListener('click', function() { 
  activePopup(popupEditProfile); 
  newname.value = name.textContent;
  newjob.value = job.textContent;
}) 
buttonAddProfile.addEventListener('click', function() { 
  activePopup(popupAddProfile); 
}) 
buttonsCloseProfile.forEach(function(butoon){
  butoon.addEventListener('click', function() { 
    popupContaner.forEach(function(el){
      notActivePopup(el)
    })
  })
})
function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = newname.value;
  job.textContent = newjob.value;
  notActivePopup(popupEditProfile)
  }

function addformcard(evt){
evt.preventDefault();
let src  = newimege.value;
let text = newimegename.value;  
let stats = {text,src};
let value = create_newcards(stats);
addCards(value);
notActivePopup(popupAddProfile)
}

function create_newcards(card){
  const newCard =   camelCase.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__photo').setAttribute('src', card.src);
  newCard.querySelector('.element__photo').setAttribute('alt', card.text);
  newCard.querySelector('.element__header').textContent = card.text;
  newCard.querySelector('.element__like-button').addEventListener('click', ()=>{
    newCard.querySelector('.element__like-button').classList.toggle('element__like-button_active');
 });
 newCard.querySelector('.element__delete').addEventListener('click', ()=>{
  newCard.remove();
});
 newCard.querySelector('.element__photo').addEventListener('click',()=>{
  activePopup(popupImgProfile);
  sPhoto.src = newCard.querySelector('.element__photo').src;
  sAlt.textContent=newCard.querySelector('.element__photo').alt;
 })
  return newCard;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}

initialCards.map(function (card){
  const el = create_newcards(card);
  addCards(el);
})
function addCards(el){
  cards.prepend(el);
}
form.addEventListener('submit', formSubmitHandler);
cardAdd.addEventListener('submit',addformcard);

buttonCloseImgProfile.addEventListener('click',()=>{
  notActivePopup(popupImgProfile);
});
// modalButtonsclose.forEach(function(item){
//   item.addEventListener('click',function Close(event){
//     event.preventDefault();
//     var modalId = item.getAttribute('data-modal');
//     modalElem = document.querySelector('.js-modal[data-modal="' + modalId + '"]');
//     modalElem.classList.remove('popup_active');
//   });
// });
// butoon.addEventListener('kaydown', function(event){
  //   if(event.code==='Escape'){
  //   popupContaner.forEach(function(el){
  //     notActivePopup(el);
  //   })
  // }
  // })
// modalButtonsopen.forEach(function(item){
//   item.addEventListener('click',function Open(event){
//     event.preventDefault();
//     var modalId = item.getAttribute('data-modal');
//     modalElem = document.querySelector('.js-modal[data-modal="' + modalId + '"]');
//     modalElem.classList.add('popup_active');
//     newName.value = name.textContent;
//     newJob.value = job.textContent;
//   });
// });
