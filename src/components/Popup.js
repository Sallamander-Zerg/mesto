export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    console.log(this._popupSelector);
    this.closeButton = this._popupSelector.querySelector(
      ".popup__close-butoon"
    );
  }
  close() {
    this._popupSelector.classList.remove("popup_active");
    document.removeEventListener("keydown", this.keydown.bind(this));
  }
  keydown(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _handleKeyClose(evt) {
    if (!evt.target.closest(".popup__container")) {
      this.close();
    }
  }
  setEventListeners() {
    this._popupSelector.addEventListener("click", (evt) => {
      this._handleKeyClose(evt);
    });
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  }
  open() {
    document.addEventListener("keydown", this.keydown.bind(this));
    this._popupSelector.classList.add("popup_active");
  }
}
