const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(obj.errorInput);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 
const toggleButtonState= (inputList, buttonElement)=>{
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add(obj.inactiveButtonClass);
} else {
  buttonElement.classList.remove(obj.inactiveButtonClass);
} 
}
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
   inputElement.classList.remove(obj.errorInput);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = '';
}; 
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}; 
const setEventListeners = (formElement) => {    
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const inputListAdd = Array.from(formElement.querySelectorAll(obj.inputSelectorAdd));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    toggleButtonState(inputListAdd, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement)
        toggleButtonState(inputList, buttonElement);
      });
    });
    inputListAdd.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement)
        toggleButtonState(inputListAdd, buttonElement);
      });
    });
  }; 
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };
enableValidation(obj={
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  inputSelectorAdd: '.popup__field-Add',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__field-error_active',
  errorInput: 'popup__field_line-error',
  errorClass: 'popup__field-error_active',
});  