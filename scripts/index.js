let popupcontaner = document.getElementById('popupcontaner');
let popupcontanerAdd = document.getElementById('popupcontanerAdd');
let openform = document.getElementById('openform');
let saveform = document.getElementById('saveform');
let closeform= document.getElementById('close');
let closeaddform= document.getElementById('closeAdd');
let newname= document.getElementById('field1');
let newjob = document.getElementById('field2');
let job = document.querySelector('.profile__text');
let name = document.querySelector('.profile__title');
let form = document.querySelector('.popup__form');
let addcard = document.querySelector('.popupAdd__form');
let likeButton = document.querySelectorAll('.element__like-button');
let addButton = document.getElementById('openaddform');
let closeraddform = document.querySelector('.popupAdd__close-butoon');
let newimege= document.getElementById('field4');
let newimegename = document.getElementById('field3');
let Card = document.querySelector('#card').content;
let cards = document.querySelector('.elements');
let photo = document.querySelectorAll('.element__photo');
let popupimg = document.querySelector('.popupimg');
let Sphoto = document.querySelector('.popupimg__img');
let Salt = document.querySelector('.popupimg__name')
let ClosePhoto = document.getElementById('closeimg');
const initialCards = [
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
openform.addEventListener('click',()=>{
  popupcontaner.classList.add('popup_active');
  newname.value = name.textContent;
  newjob.value = job.textContent;
});

closeform.addEventListener('click',()=>{
  popupcontaner.classList.remove('popup_active'); 
});

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = newname.value;
  job.textContent = newjob.value;
  popupcontaner.classList.remove('popup_active'); 
}
function addformcard(evt){
evt.preventDefault();
let src  = newimege.value;
let text = newimegename.value;  
let stats = {text,src};
let value = create_newcards(stats);
addCards(value);
}

function create_newcards(card){
  const newCard =  Card.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__photo').setAttribute('src', card.src);
  newCard.querySelector('.element__photo').setAttribute('alt', card.text);
  newCard.querySelector('.element__header').textContent = card.text;
  newCard.querySelector('.element__like-button').addEventListener('click', ()=>{
    newCard.querySelector('.element__like-button').classList.toggle('element__like-button_active');
 });
 newCard.querySelector('.element__photo').addEventListener('click',()=>{
  popupimg.classList.add("popupimg_active");
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
addButton.addEventListener('click',()=>{
  popupcontanerAdd.classList.add('popupAdd_active');
});

closeaddform.addEventListener('click',()=>{
  popupcontanerAdd.classList.remove('popupAdd_active');
});


form.addEventListener('submit', formSubmitHandler);
 addcard.addEventListener('submit',addformcard);

likeButton.forEach(function likeactive(like){
  like.addEventListener('click', ()=>{
     like.classList.toggle('element__like-button_active');
  });
});
photo.forEach( function openphoto(open){
  open.addEventListener('click',()=>{
    popupimg.classList.add("popupimg_active");
    Sphoto.src=open.src;
    Salt.textContent=open.alt;
  })
})
ClosePhoto.addEventListener('click',()=>{
  popupimg.classList.remove('popupimg_active');
});

