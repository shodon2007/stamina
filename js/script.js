let isBurger = false;
let position
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const anchors = document.querySelectorAll('a[href*="#"]');
const classes = document.getElementById('classes');
const home = document.getElementById('home');

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

    if (classes.getBoundingClientRect().y <= 0) {
        console.log(true);
        document.querySelector('.link__classes').classList.add('active');
    }
});



new Swiper('.swiper', {
    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoHeight: true,

    loop: true,

    autoplay: {
        delay: 3000,
    },

    speed: 1000,

    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        924: {
            slidesPerView: 3,
        }
    }
});


for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    })
}