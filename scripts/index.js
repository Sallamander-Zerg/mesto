const popupContaner =document.querySelectorAll('.popup');
const popupAddProfile=document.querySelector('.js-popup-Add');
const popupEditProfile=document.querySelector('.js-popup-edit');
const newname= document.querySelector('.field-jod');
const newjob = document.querySelector('.field-name');
const job = document.querySelector('.profile__text');
const name = document.querySelector('.profile__title');
const form = document.querySelector('.js-popup-forEdit');
const cardAdd = document.querySelector('.js-popup-forAdd');
const likeButton = document.querySelectorAll('.element__like-button');
const buttonAddProfile = document.querySelector('.profile__add-button');
const buttonEditProfile  = document.querySelector('.profile__edit-button');
const buttonCloseAddProfile = document.querySelector('.js-closeButoon-Add');
const buttonCloseEditProfile  = document.querySelector('.js-closeButoon-Edit');
const newimege= document.querySelector('.field-src');
const newimegename = document.querySelector('.field-alt');
const camelCase = document.querySelector('#card').content;
const cards = document.querySelector('.elements');
const element = document.querySelectorAll('.element')
const photo = document.querySelectorAll('.element__photo');
const sPhoto = document.querySelector('.popup__img');
const sAlt = document.querySelector('.popup__name');
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
buttonCloseEditProfile.addEventListener('click', function() { 
  notActivePopup(popupEditProfile); 
}) 
buttonCloseAddProfile.addEventListener('click', function() { 
  notActivePopup(popupAddProfile); 
}) 
function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = newname.value;
  job.textContent = newjob.value;
  notActivePopup(popupEditProfile)
  }

function addFormCard(evt){
evt.preventDefault();
const src  = newimege.value;
const text = newimegename.value;  
const stats = {text,src};
const value = createNewCards(stats);
addCards(value);
notActivePopup(popupAddProfile)
}

function createNewCards(card){
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
  const el = createNewCards(card);
  addCards(el);
})
function addCards(el){
  cards.prepend(el);
}
form.addEventListener('submit', formSubmitHandler);
cardAdd.addEventListener('submit',addFormCard);

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
// popupContaner.forEach(function(el){
    //   notActivePopup(el)
    // })
// buttonsCloseProfile.forEach(function(butoon){
//   butoon.addEventListener('click', function() {
//     notActivePopup(popupAddProfile);
//     notActivePopup(popupEditProfile); 
//   })
// })