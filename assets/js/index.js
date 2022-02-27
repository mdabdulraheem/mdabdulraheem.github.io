let navBar = document.querySelector('#navigation');
let menuBtn = document.querySelector('.hamburger');
let mainSection = document.querySelector('.main-section');
let isMenuOpen = false;
menuBtn.addEventListener('click', (event)=> {
    menuBtn.classList.toggle('open');
    if(isMenuOpen) {
        navBar.style.flex = 0;
        navBar.style.minWidth = "0";
        isMenuOpen = false;
    } else {
        navBar.style.flex = 1;
        navBar.style.minWidth = "250px";
        isMenuOpen = true;
    }
})

// Navigation click handler for mobile view
let menuLinks = document.querySelectorAll('.nav-link');
console.log({menuLinks})
for (const link of menuLinks) {
    link.addEventListener('click', (event) => {
        menuBtn.classList.toggle('open');
        navBar.style.flex = 0;
        navBar.style.minWidth = "0";
        isMenuOpen = false;
    })
}
