let isBurger = false;
const burger = document.querySelector('.burger');

const burgerClick = () => {
    if (isBurger == true) {
        burger.classList.remove('active');
        isBurger = false;

    } else {
        burger.classList.add('active');
        isBurger = true;
    }
}