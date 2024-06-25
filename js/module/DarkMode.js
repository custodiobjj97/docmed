export default class DarkMode{
    constructor(inputEl,IconEl){
        this.inputEl = document.getElementById(inputEl);
        this.IconEl = document.getElementById(IconEl);
        this.bodyEl=document.querySelector('body');
        this.inputEl.checked = JSON.parse(localStorage.getItem('mode'));
    }


    updateBody(){
        if(this.inputEl.checked){
            this.bodyEl.style.backgroundColor="#0D6E5D";
            this.bodyEl.style.color="#fff";
            this.IconEl.classList.add('fa-moon')
            
        }else{
            this.bodyEl.style.backgroundColor="#fff";
            this.bodyEl.style.color="#000";
            this.IconEl.classList.replace('fa-moon','fa-sun')
        }
        this.updateLocalStorage()
    }


    eventInput(){
        this.inputEl.addEventListener('input',this.updateBody);
    };

    updateLocalStorage(){
        localStorage.setItem('mode',JSON.stringify(this.inputEl.checked))
    }

    bindEvent(){
        this.updateBody = this.updateBody.bind(this)
    };

    init(){
        if(this.inputEl){
            this.bindEvent();
            this.eventInput();
            this.updateBody()
        }
    }
}