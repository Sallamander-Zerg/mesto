import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this.formSubmit = formSubmit;
    this.form = this._popupSelector.querySelector(".popup__form");
    this.inputs = Array.from(this.form.querySelectorAll(".popup__field"));
  }
  close() {
    super.close();
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
