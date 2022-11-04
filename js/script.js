let isBurger = false;
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');



const burgerClick = () => {
    if (isBurger == true) {
        burger.classList.remove('active');
        isBurger = false;

    } else {
        burger.classList.add('active');
        isBurger = true;
    }
}


window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 1) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }

    if (window.pageYOffset >= 200) {
        header.classList.add('most-scroll');
    } else {
        header.classList.remove('most-scroll');
    }
});



new Swiper('.swiper', {
    sledesPerView: 3,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoHeight: true,
    slidesPerView: 3,

    loop: true,

    autoplay: {
        delay: 3000,
    },

    speed: 1000
});