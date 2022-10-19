class Section{
constructor({items,renderer},sectionSelector){
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(sectionSelector);
} 
} 