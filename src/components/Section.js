export class Section {
  constructor({ items, renderer }, sectionSelector) {
    this._renderedArray = items;
    this._renderer = renderer;
    this._container = sectionSelector;
  }
  renderItems() {
    this._renderedArray.forEach((element) => {
      this._renderer(element);
    });
  }
  additem(element) {
    this._container.prepend(element);
  }
}
