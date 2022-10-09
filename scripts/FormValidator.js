export class FormValidator {
  constructor(conf, form) {
    this.form = form;
    this.inputSelector = conf.inputSelector;
    this.inputSelectorAdd = conf.inputSelectorAdd;
    this.submitButtonSelector = conf.submitButtonSelector;
    this.inactiveButtonClass = conf.inactiveButtonClass;
    this.inputErrorClass = conf.inputErrorClass;
    this.errorInput = conf.errorInput;
    this.errorClass = conf.errorClass;
    this.formList = Array.from(document.querySelectorAll(conf.formSelector));
    this.inputList = Array.from(this.form.querySelectorAll(this.inputSelector));
    this.buttonElement = this.form.querySelector(this.submitButtonSelector);
  }
  _showInputError(inputElement, errorMessage) {
    this.errorElement = this.form.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this.errorInput);
    this.errorElement.textContent = errorMessage;
    this.errorElement.classList.add(this.errorClass);
  }
  _toggleButtonState(inputElement) {
    if (!inputElement.validity.valid) {
      console.log(this.buttonElement);
      this.buttonElement.setAttribute("disabled", "disabled");
      this.buttonElement.classList.add(this.inactiveButtonClass);
    } else {
      this.buttonElement.removeAttribute("disabled", "disabled");
      this.buttonElement.classList.remove(this.inactiveButtonClass);
    }
  }
  _hideInputError(inputElement) {
    this.errorElement = this.form.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(this.errorInput);
    this.errorElement.classList.remove(this.errorClass);
    this.errorElement.textContent = "";
  }
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _setEventListeners() {
    this.inputList.forEach((inputElement) => {
      this._toggleButtonState(inputElement);
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputElement);
      });
    });
  }
  _enableValidation() {
    this.formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
    });
  }
}
