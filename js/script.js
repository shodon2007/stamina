let isBurger = false;
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
let loaded;

const anchors = document.querySelectorAll('a[href*="#"]');
const classes = document.getElementById('classes');
const home = document.getElementById('home');
const trainer = document.getElementById('trainer');
const services = document.getElementById('services');
const contact = document.getElementById('contact');
const animItems = document.querySelectorAll('.animItem');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    loaded = animOnScroll;
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset)) {
                animItem.classList.add('active')
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}



// burger menu
const burgerClick = () => {
    if (isBurger == true) {
        document.querySelector('.burger__place').style.zIndex = -3;
        burger.classList.remove('active');
        isBurger = false;

    } else {
        document.querySelector('.burger__place').style.zIndex = 3;
        burger.classList.add('active');
        isBurger = true;
    }
}




document.querySelectorAll('.link__home')[0].classList.add('active');
document.querySelectorAll('.link__home')[1].classList.add('active');

window.addEventListener('scroll', function () {
    // header on scroll
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


    //links on header
    if (home.getBoundingClientRect().y >= 0) {
        resetLinks();
        document.querySelectorAll('.link__home')[0].classList.add('active');
        document.querySelectorAll('.link__home')[1].classList.add('active');
    }
    if (classes.getBoundingClientRect().y <= 200) {
        resetLinks();
        document.querySelectorAll('.link__classes')[0].classList.add('active');
        document.querySelectorAll('.link__classes')[1].classList.add('active');
    }
    if (trainer.getBoundingClientRect().y <= 200) {
        resetLinks();
        document.querySelectorAll('.link__trainer')[0].classList.add('active');
        document.querySelectorAll('.link__trainer')[1].classList.add('active');
    }
    if (services.getBoundingClientRect().y <= 200) {
        resetLinks();
        document.querySelectorAll('.link__services')[0].classList.add('active');
        document.querySelectorAll('.link__services')[1].classList.add('active');
    }
    if (contact.getBoundingClientRect().y <= 200) {
        resetLinks();
        document.querySelectorAll('.link__contact')[0].classList.add('active');
        document.querySelectorAll('.link__contact')[1].classList.add('active');
    }
});

function resetLinks() {
    document.querySelectorAll('.link__home')[0].classList.remove('active');
    document.querySelectorAll('.link__home')[1].classList.remove('active');
    document.querySelectorAll('.link__classes')[0].classList.remove('active');
    document.querySelectorAll('.link__classes')[1].classList.remove('active');
    document.querySelectorAll('.link__trainer')[0].classList.remove('active');
    document.querySelectorAll('.link__trainer')[1].classList.remove('active');
    document.querySelectorAll('.link__services')[0].classList.remove('active');
    document.querySelectorAll('.link__services')[1].classList.remove('active');
    document.querySelectorAll('.link__contact')[0].classList.remove('active');
    document.querySelectorAll('.link__contact')[1].classList.remove('active');
}





// smooth scroll in click links
for (let anchor of anchors) {
    anchor.addEventListener('click', (link) => {
        link.preventDefault();
        const blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    })
}






//swiper
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


