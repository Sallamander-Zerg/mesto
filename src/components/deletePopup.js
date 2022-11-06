import Popup from "./Popup.js";
export default class deletePopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector('.popup__form');
  }
  submitCallback(deletecard) {
    this._handleSubmit = deletecard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}