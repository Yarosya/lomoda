const headerCityButton = document.querySelector('.header__city-button');


if(localStorage.getItem('location')){
    headerCityButton.textContent = localStorage.getItem('location');
}else{
    headerCityButton.textContent = "Ваш город";
}

headerCityButton.addEventListener('click', ()=>{
    const city = prompt('Какой ваш город?');
    headerCityButton.textContent = city;
    localStorage.setItem('location', city);
});



//block scroll
const disabledScroll = ()=>{
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    width:100%;
    left: 0;
    height:100vh;
    overflow: hidden;
    padding-right = ${widthScroll}px;
    `;
    
}
const enabledScroll = ()=>{
    document.body.style.cssText = '';
    window.scroll({
        top:document.body.scrollY,
    });
}

//modal window
const subheaderCart =document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = ()=>{
    cartOverlay.classList.add('cart-overlay-open');
    disabledScroll();
}

const cartModalClose = ()=>{
    cartOverlay.classList.remove('cart-overlay-open');
    enabledScroll();
}

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event=>{
    const target = event.target;
    if(target.matches('.cart__btn-close') || target.matches('.cart-overlay')  ){
        cartModalClose();
    };
});
