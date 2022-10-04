class FormValidator{
    constructor(conf,form){
       this.formSelector=form; 
       this.inputSelector=conf.inputSelector;
       this.inputSelectorAdd=conf.inputSelectorAdd;
       this.submitButtonSelector=conf.submitButtonSelector;
       this.inactiveButtonClass=conf.inactiveButtonClass;
       this.inputErrorClass=conf.inputErrorClass;
       this.errorInput=conf.errorInput;
       this.errorClass=conf.errorClass;
       
    }
    _showInputError(formElement, inputElement, errorMessage){
      this.errorElement = formElement.querySelector(`.${inputElement.name}-error`);
      inputElement.classList.add(this.errorInput);
      this.errorElement.textContent = errorMessage;
      this.errorElement.classList.add(this.errorClass);
    };
   _toggleButtonState(formElement,inputElement){
    this.buttonElement = formElement.querySelector(this.submitButtonSelector);
    if (!inputElement.validity.valid) {
      console.log(this.buttonElement)
         this.buttonElement.classList.add(this.inactiveButtonClass);
    } else {
      this.buttonElement.classList.remove(this.inactiveButtonClass);
    } 
    };
   _hideInputError(formElement, inputElement){
      this.errorElement = formElement.querySelector(`.${inputElement.name}-error`);
      inputElement.classList.remove(this.errorInput);
      this.errorElement.classList.remove(this.errorClass);
      this.errorElement.textContent = '';
    }; 
    _isValid(formElement, inputElement){
      if (!inputElement.validity.valid) {
        this._showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(formElement, inputElement);
      }
    }; 
     _setEventListeners(formElement) { 
        this.inputList = Array.from(formElement.querySelectorAll(this.inputSelector));
        this.inputListAdd = Array.from(formElement.querySelectorAll(this.inputSelectorAdd));
        this.inputList.forEach((inputElement) => {
          this._toggleButtonState(formElement,inputElement)
          inputElement.addEventListener('input', () => {
            this._isValid(formElement, inputElement)
            this._toggleButtonState(formElement,inputElement);
          });
        });
        this.inputListAdd.forEach((inputElementAdd) => {
          this._toggleButtonState(formElement,inputElementAdd)
          inputElementAdd.addEventListener('input', () => {
            this._isValid(formElement, inputElementAdd)
            this._toggleButtonState(formElement,inputElementAdd)
          });
        });
      }; 
    _enableValidation()  {
      this.formList = Array.from(document.querySelectorAll(this.formSelector));
        this.formList.forEach((formElement) => {
          formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
          });
          this._setEventListeners(formElement);
        });
      };
}
function validation(){ 
  obj = {
    inputSelector:'.popup__field',
    inputSelectorAdd:'.popup__field-Add',
    submitButtonSelector:'.popup__save-button',
    inactiveButtonClass:'popup__save-button_inactive',
    inputErrorClass:'popup__field-error_active',
    errorInput: 'popup__field_line-error',
    errorClass: 'popup__field-error_active'} 
const valStat = new FormValidator(obj,'.popup__form')

  const val = valStat._enableValidation()

}
validation()