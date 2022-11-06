export default class UserInfo {
  constructor(selectorName, selectorJob, selectorAvatar) {
    this.newName = document.querySelector(selectorName);
    this.newJob = document.querySelector(selectorJob);
    this.avatar= document.querySelector(selectorAvatar);
  }
  getUserInfo() {
    return {
      name: this.newName.textContent,
      info: this.newJob.textContent,
      avatar: this.avatar.src,
    };
  }
  setUserInfo(objData) {
    console.log(objData);
    this.newName.textContent = objData.name;
    this.newJob.textContent = objData.about;
    this.avatar.src=objData.avatar;
  }
}
