
const popupAddProfile=document.querySelector('.js-popup-Add');
const popupEditProfile=document.querySelector('.js-popup-edit');
const newName= document.querySelector('.field-name');
const newJob = document.querySelector('.field-job');
const job = document.querySelector('.profile__text');
const name = document.querySelector('.profile__title');
const formEdit = document.querySelector('.js-popup-forEdit');
const formCardAdd = document.querySelector('.js-popup-forAdd');
const likeButton = document.querySelectorAll('.element__like-button');
const buttonAddProfile = document.querySelector('.profile__add-button');
const buttonEditProfile  = document.querySelector('.profile__edit-button');
const buttonCloseAddProfile = document.querySelector('.js-closeButoon-Add');
const buttonCloseEditProfile  = document.querySelector('.js-closeButoon-Edit');
const newImege= document.querySelector('.field-src');
const newImegeName = document.querySelector('.field-alt');
const caseContent = document.querySelector('#card').content;
const caseContentCards = document.querySelector('.elements');
const selectPhoto = document.querySelector('.popup__img');
const selectAlt = document.querySelector('.popup__name');
const popupImgProfile = document.querySelector('.js-popup-Img');
const buttonCloseImgProfile = document.querySelector('.popup__close-butoon-img');
const CloseFormkey = ()=>{
  const popupMas = Array.from(document.querySelectorAll('.popup'));
  popupMas.forEach(function(el){
    closeKey(el)
  })
}
const openPopup = (popup)=>{
  popup.classList.add('popup_active');
 };
 const closePopup = (cPopup)=>{
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
  openPopup(popupEditProfile); 
  newName.value = name.textContent;
  newJob.value = job.textContent;
}) 
buttonAddProfile.addEventListener('click', function() { 
  openPopup(popupAddProfile); 
}) 

function closeKey(pop){ 
  pop.addEventListener('click',function(evt){
  if(!evt.target.closest('.popup__container')){
    closePopup(pop);
  }
  }) 
  //   document.addEventListener('keydown', function (evt) {
  //   if (evt.code==='Escape') {
  //     closePopup(pop);
  //   };
  // }); 
}
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
  document.addEventListener('keydown', closeByEscape);
  document.removeEventListener('keydown', closeByEscape);
}
buttonCloseEditProfile.addEventListener('click', function() { 
  closePopup(popupEditProfile); 
}) 
buttonCloseAddProfile.addEventListener('click', function() { 
  closePopup(popupAddProfile); 
}) 
function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = newName.value;
  job.textContent = newJob.value;
  notActivePopup(popupEditProfile)
}

function addFormCard(evt){
evt.preventDefault();
const src  = newImege.value;
const text = newImegeName.value;  
const stats = {text,src};
const value = createNewCards(stats);
addCards(value);
closePopup(popupAddProfile)
}

function createNewCards(card){
  const newCard =   caseContent.querySelector('.element').cloneNode(true);
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
  openPopup(popupImgProfile);
  selectPhoto.src = newCard.querySelector('.element__photo').src;
  selectAlt.textContent=newCard.querySelector('.element__photo').alt;
 })
  return newCard;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}

initialCards.map(function (card){
  const el = createNewCards(card);
  addCards(el);
})
function addCards(el){
  caseContentCards.prepend(el);
}
formEdit.addEventListener('submit', formSubmitHandler);
formCardAdd.addEventListener('submit',addFormCard);

buttonCloseImgProfile.addEventListener('click',()=>{
  closePopup(popupImgProfile);
});
CloseFormkey()
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