let isBurger = false;
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');

new Swiper('.swiper');

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