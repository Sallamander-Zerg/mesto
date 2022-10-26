export default class Popup {
  constructor(popupSelector) {
    this.Selector = popupSelector;
    this.closeBatton = this.Selector.querySelector(".popup__close-butoon");
  }
  close() {
    this.Selector.classList.remove("popup_active");
  }
  _handleEscClose(evt) {
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
    this.Selector.addEventListener("click", (evt) => {
      this._handleKeyClose(evt);
    });
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
    this.closeBatton.addEventListener("click", () => {
      this.close();
    });
  }
  open() {
    this.setEventListeners();
    this.Selector.classList.add("popup_active");
  }
}
