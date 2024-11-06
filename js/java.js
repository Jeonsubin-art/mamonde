document.addEventListener(`DOMContentLoaded`, function(){
    let roller = document.querySelector('.slide-txt');
    roller.id = 'roller1';
    
    let clone = roller.cloneNode(true)
    clone.id = 'roller2';
    document.querySelector('.slide-banner').appendChild(clone);
    
    roller.classList.add('original');
    clone.classList.add('clone');
    
    const productTabBtn = document.querySelectorAll(`.section-title h1`);
    const tabImg  = document.querySelector(`.model`);

    for(const btn of productTabBtn){
        btn.addEventListener(`click`,function(){
            this.classList.add(`on`);
            tabImg.classList.toggle(`active`);

            for(const siblings of productTabBtn){
                if(this != siblings){
                    siblings.classList.remove(`on`);
                }
            }

            const tab = btn.getAttribute(`data-tab`);
            const productContent = document.querySelectorAll(`.pr1`);

            for(const content of productContent){
                content.classList.remove(`active`);
            }

            const changeTab = document.querySelector(`#${tab}`);
            changeTab.classList.add(`active`);

        });
    }

});

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const close_btn = document.querySelector('.btn_close');


menu.addEventListener('click',function(){
    nav.style.left = '0px';
    close_btn.style.display = 'flex'
});

close_btn.addEventListener('click', function(){
    close_btn.style.display = 'none';
    nav.style.left = '-500px';
});