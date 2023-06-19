const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');   
}

menu.addEventListener('click',mobileMenu);

// SHow Active menu while scrolling
const highlihtMenu = () => {
    const elem =document.querySelector('.highlight');
    const homeMenu =document.querySelector('#home-page');
    const aboutMenu =document.querySelector('#about-page');
    const exploreMenu =document.querySelector('#explore-page');
    let scrollPos = window.scrollY
    // console.log(scrollPos);

//adds 'highlight' class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } 
    else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        exploreMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2345){
        exploreMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    if((elem  && window.innerWidth < 960 && scrollPos < 600 ) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlihtMenu);
window.addEventListener('click', highlihtMenu);4


// close mobile mwnu 
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menulinks.classList.remove('active')
     }
}

menulinks.addEventListener('click',hideMobileMenu)
navLogo.addEventListener('click',hideMobileMenu)