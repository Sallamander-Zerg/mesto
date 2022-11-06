(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=n.data,a=o.handleCardClick,c=o.handleSetLike,s=o.handleRemoveLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=e,this._title=i.name,this._link=i.link,this._cardId=i._id,this._cardOwnerId=i.owner._id,this._likes=i.likes,this._userId=r,this._handleCardClick=a,this._handleSetLike=c,this._handleRemoveLike=s}var n,r;return n=t,(r=[{key:"_createTemplateCard",value:function(){this._newCard=document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0),this._elementPhoto=this._newCard.querySelector(".element__photo"),this._likeButton=this._newCard.querySelector(".element__like-button"),this._likesNumber=this._newCard.querySelector(".element__likes-number")}},{key:"_likeCard",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._likeButton.classList.add("element__like-button_active")}},{key:"massLikeCard",value:function(e){this._likes=e.likes,this._likesNumber.textContent=this._likes.length,this._likeButton.classList.toggle("element__like-button_active")}},{key:"_deleteCard",value:function(){this.newCard.remove()}},{key:"_addEventListener",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__like-button_active")?e._handleRemoveLike(e._cardId):e._handleSetLike(e._cardId)})),this._elementPhoto.addEventListener("click",(function(){e._handleCardClick(e._link,e._title)})),this._newCard.querySelector(".element__delete").addEventListener("click",(function(){e._deleteCard()}))}},{key:"generateCard",value:function(){return this._createTemplateCard(),this._addEventListener(),this._elementPhoto.setAttribute("src",this._link),this._elementPhoto.setAttribute("alt",this._title),this._newCard.querySelector(".element__header").textContent=this._title,this._likeCard(),this._newCard}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__field-error_active",errorInput:"popup__field_line-error",errorClass:"popup__field-error_active"},r=document.querySelector(".field-name"),o=document.querySelector(".field-job"),i=document.querySelector(".field-avatr-src"),a=document.querySelector(".profile__avatar-butt"),c=document.querySelector(".profile__add-button"),s=document.querySelector(".profile__edit-button"),l=(document.querySelector(".elements"),document.querySelector(".elements"));function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=n,this.inputSelector=t.inputSelector,this.inputSelectorAdd=t.inputSelectorAdd,this.submitButtonSelector=t.submitButtonSelector,this.inactiveButtonClass=t.inactiveButtonClass,this.inputErrorClass=t.inputErrorClass,this.errorInput=t.errorInput,this.errorClass=t.errorClass,this.inputList=Array.from(this.form.querySelectorAll(this.inputSelector)),this.buttonElement=this.form.querySelector(this.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){this.errorElement=this.form.querySelector(".".concat(e.name,"-error")),e.classList.add(this.errorInput),this.errorElement.textContent=t,this.errorElement.classList.add(this.errorClass)}},{key:"disableButton",value:function(){this.buttonElement.setAttribute("disabled","disabled"),this.buttonElement.classList.add(this.inactiveButtonClass)}},{key:"_toggleButtonState",value:function(e){e.validity.valid?(this.buttonElement.removeAttribute("disabled"),this.buttonElement.classList.remove(this.inactiveButtonClass)):this.disableButton()}},{key:"_hideInputError",value:function(e){this.errorElement=this.form.querySelector(".".concat(e.name,"-error")),e.classList.remove(this.errorInput),this.errorElement.classList.remove(this.errorClass),this.errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this.inputList.forEach((function(t){e._toggleButtonState(t),t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"additem",value:function(e){this._container.prepend(e)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this.closeButton=this._popupSelector.querySelector(".popup__close-butoon"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"close",value:function(){this._popupSelector.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleKeyClose",value:function(e){e.target.closest(".popup__container")||this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("click",(function(t){e._handleKeyClose(t)})),this.closeButton.addEventListener("click",(function(){e.close()}))}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupSelector.classList.add("popup_active")}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e)).formSubmit=t,n.form=n._popupSelector.querySelector(".popup__form"),n.inputs=Array.from(n.form.querySelectorAll(".popup__field")),n._buttonSubmit=n._popupSelector.querySelector(".popup__save-button"),n._buttonSubmitText=n._buttonSubmit.textContent,n}return t=a,(n=[{key:"close",value:function(){b(g(a.prototype),"close",this).call(this)}},{key:"loading",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":this._buttonSubmitText}},{key:"_getInputValues",value:function(){return this.inputs.reduce((function(e,t){return e[t.name]=t.value,e}),{})}},{key:"setEventListeners",value:function(){var e=this;b(g(a.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(t){t.preventDefault(),console.log(1),e.formSubmit(e._getInputValues()),e.close()})),this.form.reset()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.newName=document.querySelector(t),this.newJob=document.querySelector(n),this.avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.newName.textContent,info:this.newJob.textContent,avatar:this.avatar.src}}},{key:"setUserInfo",value:function(e){console.log(e),this.newName.textContent=e.name,this.newJob.textContent=e.about,this.avatar.src=e.avatar}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_parseError",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getMassCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._parseError(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.src})}).then((function(e){return t._parseError(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseError(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._parseError(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseError(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._parseError(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.fieldName,about:e.fieldJob})}).then((function(e){return t._parseError(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.fieldAvatarSrc})}).then((function(e){return t._parseError(e)}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function B(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).selectPhoto=t._popupSelector.querySelector(".popup__img"),t.selectAlt=t._popupSelector.querySelector(".popup__name"),t}return t=a,(n=[{key:"open",value:function(e,t){I(U(a.prototype),"open",this).call(this),I(U(a.prototype),"setEventListeners",this).call(this),this.selectPhoto.src=e,this.selectPhoto.alt=t,this.selectAlt.textContent=t,console.log(this.selectPhoto.src)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x,N=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"1ce13fac-ab02-437f-bb39-64ceea4d3ebd","Content-Type":"application/json"}}),V=new f(n,document.querySelector(".popup_type_edit-Avatar")),D=new f(n,document.querySelector(".popup_type_card")),J=new f(n,document.querySelector(".popup_type_edit")),M=new C(".profile__title",".profile__text",".profile__avatar"),H=new T(".js-popup-Img");Promise.all([N.getMassCards(),N.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M.setUserInfo(i),x=i._id,z.renderItems(o)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var K=function(e){var n=new t("#card",{data:e},x,{handleCardClick:function(e,t){H.open(e,t)},handleSetLike:function(e){N.setLike(e).then((function(e){n.massLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleRemoveLike:function(e){N.deleteLike(e).then((function(e){n.massLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return n.generateCard()},z=new h({renderer:function(e){console.log(e);var t=K(e);z.additem(t)}},l);z.renderItems();var $=new w(".js-popup-Add",(function(e){var t=K(fieldAddValues.fieldMesto,fieldAddValues.fieldSrc);console.log(e),G.loading(!0),N.editAvatar(e).then((function(e){console.log(e),M.setUserInfo(e),G.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){G.loading(!1)})),z.additem(t)})),F=new w(".js-popup-edit",(function(e){console.log(e),F.loading(!0),N.editUserInfo(e).then((function(e){console.log(e),M.setUserInfo(e),F.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){F.loading(!1)}))})),G=new w(".js-popup-avatar",(function(e){console.log(e),G.loading(!0),N.editAvatar(e).then((function(e){console.log(e),M.setUserInfo(e),G.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){G.loading(!1)}))}));F.setEventListeners(),$.setEventListeners(),H.setEventListeners(),G.setEventListeners(),s.addEventListener("click",(function(){F.open();var e=M.getUserInfo();r.value=e.name,o.value=e.info,J.disableButton()})),a.addEventListener("click",(function(){G.open();var e=M.getUserInfo();i.value=e.avatar,V.disableButton()})),c.addEventListener("click",(function(){$.open(),D.disableButton()})),D.enableValidation(),J.enableValidation(),V.enableValidation()})();