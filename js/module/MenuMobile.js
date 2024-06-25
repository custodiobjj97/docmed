import outsideClick from "./outsideClick.js";
export default class MenuMobile{
    constructor(toggle,menu){
        this.toggle = document.querySelector(toggle);
        this.menu = document.querySelector(menu);
        this.activeClass = 'open';
    }

    activeMenuMobile(event){
        if(event.type === "touchstart"){
            event.preventDefault();
        }

        this.menu.classList.toggle(this.activeClass);

        outsideClick(this.menu,()=>{
            this.menu.classList.remove(this.activeClass)
        })
    };

    eventMenu(){
        this.toggle.addEventListener('click', this.activeMenuMobile);
        this.toggle.addEventListener('touchstart', this.activeMenuMobile);
    };


    bindEvent(){
        this.activeMenuMobile = this.activeMenuMobile.bind(this);
    };

    start(){
        if(this.menu){
            this.bindEvent();
            this.eventMenu();
        }
    }
}