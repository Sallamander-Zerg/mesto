export default class UserInfo{
    constructor(selectorName,selectorJob){
        this.newName = document.querySelector(selectorName);
        this.newJob = document.querySelector(selectorJob);
    }
    getUserInfo(){
        return{
        name:this.newName.textContent,
        info:this.newJob.textContent
        };
        
    }
    setUserInfo(name,info){
        console.log(name,info)
        this.newName.textContent=name;
        this.newJob.textContent=info;  
    }
}