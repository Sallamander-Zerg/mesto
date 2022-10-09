export class FormValidator {
  constructor(conf, form) {
    this.formSelector = form;
    this.inputSelector = conf.inputSelector;
    this.inputSelectorAdd = conf.inputSelectorAdd;
    this.submitButtonSelector = conf.submitButtonSelector;
    this.inactiveButtonClass = conf.inactiveButtonClass;
    this.inputErrorClass = conf.inputErrorClass;
    this.errorInput = conf.errorInput;
    this.errorClass = conf.errorClass;
    this.formList = Array.from(document.querySelectorAll(this.formSelector));
  }
  _showInputError(formElement, inputElement, errorMessage) {
    this.errorElement = formElement.querySelector(
      `.${inputElement.name}-error`
    );
    inputElement.classList.add(this.errorInput);
    this.errorElement.textContent = errorMessage;
    this.errorElement.classList.add(this.errorClass);
  }
  _toggleButtonState(formElement, inputElement) {
    this.buttonElement = formElement.querySelector(this.submitButtonSelector);
    if (!inputElement.validity.valid) {
      console.log(this.buttonElement);
      this.buttonElement.setAttribute("disabled","disabled")
      this.buttonElement.classList.add(this.inactiveButtonClass);
    } else {
      this.buttonElement.removeAttribute("disabled","disabled")
      this.buttonElement.classList.remove(this.inactiveButtonClass);
    }
  }
  _hideInputError(formElement, inputElement) {
    this.errorElement = formElement.querySelector(
      `.${inputElement.name}-error`
    );
    inputElement.classList.remove(this.errorInput);
    this.errorElement.classList.remove(this.errorClass);
    this.errorElement.textContent = "";
  }
  _isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }
  _setEventListeners(formElement) {
    this.inputList = Array.from(
      formElement.querySelectorAll(this.inputSelector)
    );
    this.inputList.forEach((inputElement) => {
      this._toggleButtonState(formElement, inputElement);
      inputElement.addEventListener("input", () => {
        this._isValid(formElement, inputElement);
        this._toggleButtonState(formElement, inputElement);
      });
    });
  }
  _enableValidation() {
    this.formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    });
  }
}
