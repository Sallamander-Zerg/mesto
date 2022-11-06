export class Section {
  constructor({renderer}, sectionSelector) {
    this._renderer = renderer;
    this._container = sectionSelector;
  }
  renderItems(items) {
    console.log(items)
    if(items!==undefined){
    items.forEach((element) => {
      this._renderer(element);
    });
  }
  }
  additem(element) {
    this._container.prepend(element);
  }
}
