import Popup from "./Popup"
export default class PopupWithImage extends Popup{
    constructor(popupSelector){
     super(popupSelector)
      this.selectPhoto = this.Selector.querySelector(".popup__img");
      this.selectAlt = this.Selector.querySelector(".popup__name");
    }
    open(link,name){
        super.open()
        this.selectPhoto.src = link;
        this.selectPhoto.alt = name;
        this.selectAlt.textContent = name;
        console.log(this.selectPhoto.src)
    }
}
