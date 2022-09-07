const popupcontaner =document.querySelectorAll('.popup');
let closeaddform= document.getElementById('closeAdd');
let newname= document.getElementById('field-jod');
let newjob = document.getElementById('field-name');
let job = document.querySelector('.profile__text');
let name = document.querySelector('.profile__title');
let form = document.getElementById('formEdit');
let addcard = document.getElementById('formAdd');
let likeButton = document.querySelectorAll('.element__like-button');
const modalButtonsopen = document.querySelectorAll('.js-modal-active');
const modalButtonsclose = document.querySelectorAll('.js-modal-close');
const popupImgcontaner = document.getElementById('popupimgcontaner');
let newimege= document.getElementById('field-src');
let newimegename = document.getElementById('field-alt');
let camelCase = document.querySelector('#card').content;
let cards = document.querySelector('.elements');
let element = document.querySelectorAll('.element')
let photo = document.querySelectorAll('.element__photo');
let Sphoto = document.querySelector('.popup__img');
let Salt = document.querySelector('.popup__name');
let popupimg = document.getElementById('popupimgcontaner');
let ClosePhoto = document.getElementById('closeimg');
let DeleteButton = document.querySelectorAll('.element__delete');
newname.value = name.textContent;
newjob.value = job.textContent;
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
modalButtonsopen.forEach(function(item){
  item.addEventListener('click',function Open(event){
    event.preventDefault();
    var modalId = item.getAttribute('data-modal');
    modalElem = document.querySelector('.js-modal[data-modal="' + modalId + '"]');
    modalElem.classList.add('popup_active');
  });
});

modalButtonsclose.forEach(function(item){
  item.addEventListener('click',function Close(event){
    event.preventDefault();
    var modalId = item.getAttribute('data-modal');
    modalElem = document.querySelector('.js-modal[data-modal="' + modalId + '"]');
    modalElem.classList.remove('popup_active');
  });
});

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = newname.value;
  job.textContent = newjob.value;
  popupcontaner.forEach(function closeConteiner(popup){
    popup.classList.remove('popup_active');
  })
  }

function addformcard(evt){
evt.preventDefault();
let src  = newimege.value;
let text = newimegename.value;  
let stats = {text,src};
let value = create_newcards(stats);
addCards(value);
popupcontaner.forEach(function closeConteiner(popup){
  popup.classList.remove('popup_active');
})

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
  popupImgcontaner.classList.add('popup_active');
  Sphoto.src = newCard.querySelector('.element__photo').src;
  Salt.textContent=newCard.querySelector('.element__photo').alt;
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
addcard.addEventListener('submit',addformcard);

ClosePhoto.addEventListener('click',()=>{
  popupimg.classList.remove('popup_active');
});


