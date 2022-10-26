import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, FormSubmit) {
    super(popupSelector);
    this.FormSubmit = FormSubmit;
    this.form = this.Selector.querySelector(".popup__form");
    this.inputs = Array.from(this.form.querySelectorAll(".popup__field"));
  }
  close() {
    super.close();
    this.form.reset();
  }
  _getInputValues() {
    return this.inputs.reduce((fieldValues, input) => {
      fieldValues[input.name] = input.value;
      return fieldValues;
    }, {});
  }
  setEventListeners() {
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.FormSubmit(this._getInputValues());
      this.close();
    });
  }
}
