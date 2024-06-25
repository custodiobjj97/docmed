export default class LinkSmooth{
    constructor(links){
        this.links = document.querySelectorAll(links);
        this.handleSmooth = this.handleSmooth.bind(this)
    }

    handleSmooth(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
             behavior: "smooth", 
             block: "start"
        })
    }


    eventScroll(){
        this.links.forEach((link) => {link.addEventListener('click',this.handleSmooth)})
    };

   

    init(){
        if(this.links.length){
            this.eventScroll();
        }
    }
}