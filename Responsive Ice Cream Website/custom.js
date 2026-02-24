let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}



var swiper = new Swiper(".home-slider", {
    grapCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

var swiper = new Swiper(".reviews-slider", {
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    grapCursor:true,
    loop:true,
    spaceBetween:20,
    breakpoints: {
        0: {
          sliderPerview: 1,  
        },
        768: {
          sliderPerview: 2,  
        },
        991: {
          sliderPerview: 3,  
        },
    },
});