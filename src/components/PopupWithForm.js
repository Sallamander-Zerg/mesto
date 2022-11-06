import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this.formSubmit = formSubmit;
    this.form = this._popupSelector.querySelector(".popup__form");
    this.inputs = Array.from(this.form.querySelectorAll(".popup__field"));
    this._buttonSubmit=this._popupSelector.querySelector(".popup__save-button")
    this._buttonSubmitText=this._buttonSubmit.textContent;
  }
  close() {
    super.close();
  }
  loading(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Сохранение...'
    } else {
      this._buttonSubmit.textContent = this._buttonSubmitText;
    }
  }
  _getInputValues() {
    return this.inputs.reduce((fieldValues, input) => {
      fieldValues[input.name] = input.value;
      return fieldValues;
    }, {});
  }
  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log(1);
      this.formSubmit(this._getInputValues());
      this.close();
    });
    this.form.reset();
  }
}
