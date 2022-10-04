
const popupAddProfile=document.querySelector('.js-popup-Add');
const popupEditProfile=document.querySelector('.js-popup-edit');
const newName= document.querySelector('.field-name');
const newJob = document.querySelector('.field-job');
const job = document.querySelector('.profile__text');
const name = document.querySelector('.profile__title');
const formEdit = document.querySelector('.js-popup-forEdit');
const formCardAdd = document.querySelector('.js-popup-forAdd');
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
const closeFormKey = ()=>{
  const popupMas = Array.from(document.querySelectorAll('.popup'));
  popupMas.forEach(function(el){
    closeKey(el)
  })
}
const openPopup = (popup)=>{
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeByEscape);
 };
 const closePopup = (cPopup)=>{
  cPopup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEscape);
 };
 

buttonEditProfile.addEventListener('click', function() { 
  openPopup(popupEditProfile); 
  newName.value = name.textContent;
  newJob.value = job.textContent;
}) 
buttonAddProfile.addEventListener('click', function() { 
  openPopup(popupAddProfile); 
  newImege.value=""
  newImegeName.value=""
}) 

function closeKey(pop){ 
  pop.addEventListener('click',function(evt){
  if(!evt.target.closest('.popup__container')){
    closePopup(pop);
  }
  }) 
}
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active')
    closePopup(openedPopup);
  }
}
buttonCloseEditProfile.addEventListener('click', function() { 
  closePopup(popupEditProfile); 
}) 
buttonCloseAddProfile.addEventListener('click', function() { 
  closePopup(popupAddProfile); 
}) 
function submitFormHandler (evt) {
  evt.preventDefault(); 
  name.textContent = newName.value;
  job.textContent = newJob.value;
  closePopup(popupEditProfile)
}

function addFormCard(evt){
evt.preventDefault();
const src  = newImege.value;
const text = newImegeName.value;
const alt = newImegeName.value;
const stats = {text,alt,src};
const value = createNewCards(stats);
addCards(value);
closePopup(popupAddProfile)
}

function createNewCards(card){
  const newCard =   caseContent.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__photo').setAttribute('src', card.src);
  newCard.querySelector('.element__photo').setAttribute('alt', card.alt);
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
  selectPhoto.alt = newCard.querySelector('.element__photo').alt
  selectAlt.textContent=  newCard.querySelector('.element__header').textContent;
 })
  return newCard;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}
function addCards(el){
  caseContentCards.prepend(el);
}
formEdit.addEventListener('submit', submitFormHandler);
formCardAdd.addEventListener('submit',addFormCard);
buttonCloseImgProfile.addEventListener('click',()=>{
  closePopup(popupImgProfile);
});
closeFormKey()
export {popupImgProfile,selectPhoto,selectAlt,caseContentCards,openPopup};
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