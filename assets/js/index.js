let navBar = document.querySelector('#navigation');
let menuBtn = document.querySelector('.hamburger');
let mainSection = document.querySelector('.main-section');
let isMenuOpen = true;
menuBtn.addEventListener('click', (event)=> {
    menuBtn.classList.toggle('open');
    if(isMenuOpen) {
        navBar.style.flex = 0;
        isMenuOpen = false;
    } else {
        navBar.style.flex = 1;
        isMenuOpen = true;
    }
})

