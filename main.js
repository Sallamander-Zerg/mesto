(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=n.title,i=n.link,s=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=e,this.title=o,this.link=i,this.handleCardClick=s}var n,r;return n=t,(r=[{key:"_createTemplateCard",value:function(){this.newCard=document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0),this.elementPhoto=this.newCard.querySelector(".element__photo"),this.elementHendler=this.newCard.querySelector(".element__header"),this.likeButton=this.newCard.querySelector(".element__like-button")}},{key:"_likeCard",value:function(){this.likeButton.classList.toggle("element__like-button_active")}},{key:"_openCard",value:function(){this.handleCardClick({link:this.link,name:this.title})}},{key:"_deleteCard",value:function(){this.newCard.remove()}},{key:"_addEventListener",value:function(){var e=this;this.likeButton.addEventListener("click",(function(){e._likeCard()})),this.elementPhoto.addEventListener("click",(function(){e._openCard()})),this.newCard.querySelector(".element__delete").addEventListener("click",(function(){e._deleteCard()}))}},{key:"generateCard",value:function(){return this._createTemplateCard(),this._addEventListener(),this.elementPhoto.setAttribute("src",this.link),this.elementPhoto.setAttribute("alt",this.title),this.newCard.querySelector(".element__header").textContent=this.title,this.newCard}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__field-error_active",errorInput:"popup__field_line-error",errorClass:"popup__field-error_active"},r=document.querySelector(".field-name"),o=document.querySelector(".field-job"),i=document.querySelector(".profile__avatar-butt"),s=document.querySelector(".profile__add-button"),a=document.querySelector(".profile__edit-button"),c=(document.querySelector(".elements"),document.querySelector(".elements"));function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=n,this.inputSelector=t.inputSelector,this.inputSelectorAdd=t.inputSelectorAdd,this.submitButtonSelector=t.submitButtonSelector,this.inactiveButtonClass=t.inactiveButtonClass,this.inputErrorClass=t.inputErrorClass,this.errorInput=t.errorInput,this.errorClass=t.errorClass,this.inputList=Array.from(this.form.querySelectorAll(this.inputSelector)),this.buttonElement=this.form.querySelector(this.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){this.errorElement=this.form.querySelector(".".concat(e.name,"-error")),e.classList.add(this.errorInput),this.errorElement.textContent=t,this.errorElement.classList.add(this.errorClass)}},{key:"disableButton",value:function(){this.buttonElement.setAttribute("disabled","disabled"),this.buttonElement.classList.add(this.inactiveButtonClass)}},{key:"_toggleButtonState",value:function(e){e.validity.valid?(this.buttonElement.removeAttribute("disabled"),this.buttonElement.classList.remove(this.inactiveButtonClass)):this.disableButton()}},{key:"_hideInputError",value:function(e){this.errorElement=this.form.querySelector(".".concat(e.name,"-error")),e.classList.remove(this.errorInput),this.errorElement.classList.remove(this.errorClass),this.errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this.inputList.forEach((function(t){e._toggleButtonState(t),t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedArray=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedArray.forEach((function(t){e._renderer(t)}))}},{key:"additem",value:function(e){this._container.prepend(e)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),console.log(this._popupSelector),this.closeButton=this._popupSelector.querySelector(".popup__close-butoon"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"close",value:function(){this._popupSelector.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleKeyClose",value:function(e){e.target.closest(".popup__container")||this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("click",(function(t){e._handleKeyClose(t)})),this.closeButton.addEventListener("click",(function(){e.close()}))}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupSelector.classList.add("popup_active")}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,e)).formSubmit=t,n.form=n._popupSelector.querySelector(".popup__form"),n.inputs=Array.from(n.form.querySelectorAll(".popup__field")),n}return t=s,(n=[{key:"close",value:function(){b(w(s.prototype),"close",this).call(this)}},{key:"_getInputValues",value:function(){return this.inputs.reduce((function(e,t){return e[t.name]=t.value,e}),{})}},{key:"setEventListeners",value:function(){var e=this;b(w(s.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(t){t.preventDefault(),console.log(1),e.formSubmit(e._getInputValues()),e.close()})),this.form.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(h);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.newName=document.querySelector(t),this.newJob=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.newName.textContent,info:this.newJob.textContent}}},{key:"setUserInfo",value:function(e,t){console.log(e,t),this.newName.textContent=e,this.newJob.textContent=t}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.username,about:e.job})}).then((function(e){return t._parseResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._parseResponse(e)}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function R(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).selectPhoto=t._popupSelector.querySelector(".popup__img"),t.selectAlt=t._popupSelector.querySelector(".popup__name"),t}return t=s,(n=[{key:"open",value:function(e,t){L(B(s.prototype),"open",this).call(this),this.selectPhoto.src=e,this.selectPhoto.alt=t,this.selectAlt.textContent=t,console.log(this.selectPhoto.src)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(h),I=(new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"1ce13fac-ab02-437f-bb39-64ceea4d3ebd","Content-Type":"application/json"}}),new l(n,document.querySelector(".popup_type_card"))),A=new l(n,document.querySelector(".popup_type_edit")),U=new C(".profile__title",".profile__text"),N=new T(".js-popup-Img"),D=function(e,n){return new t("#card",{title:e,link:n},{handleCardClick:function(e){N.open(e.link,e.name)}}).generateCard()},J=new f({items:[{text:"Подольск",alt:"Истиный Подольск",src:"https://radiovera.ru/wp-content/uploads/2018/10/Gyustav-Dore-Ad.jpg"},{text:"Карачевск",alt:"Замок в горах",src:"https://nesiditsa.ru/wp-content/uploads/2014/05/Sentinskiy-hram-bliz-aula-Nizhnyaya-Teberda.jpg"},{text:"Мусса-Ачитара",alt:"вершина Мусса-Ачитара",src:"https://public.mishka.travel/images/mini/f767c0236739b5b.jpg"},{text:"плато Бермамыт",alt:"рассвет на плато Бермамыт",src:"https://static.guidego.ru/webp/60c31aa45742852b75b9c020.1600x1200.webp"},{text:"Архыз",alt:"тающий снег на вершинах гор",src:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{text:"Челябинская область",alt:"озеро окруженное горами и виршинами",src:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{text:"Иваново",alt:"страшный сон Варламова",src:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{text:"Камчатка",alt:"поле перед горой",src:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{text:"Холмогорский район",alt:"железная дорога посреди леса уходящая в даль",src:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{text:"Байкал",alt:"склон горы перед замершим озером",src:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=D(e.text,e.src);J.additem(t)}},c);J.renderItems();var V=new g(".js-popup-Add",(function(e){var t=D(e.fieldMesto,e.fieldSrc);J.additem(t)})),z=new g(".js-popup-edit",(function(e){U.setUserInfo(e.fieldName,e.fieldJob)}));z.setEventListeners(),V.setEventListeners(),N.setEventListeners(),a.addEventListener("click",(function(){z.open();var e=U.getUserInfo();r.value=e.name,o.value=e.info,A.disableButton()})),i.addEventListener("click",(function(){new h(".js-popup-avatar").open()})),s.addEventListener("click",(function(){V.open(),I.disableButton()})),I.enableValidation(),A.enableValidation()})();