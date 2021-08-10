const burgerButton = document.querySelector('.header__button--burger');
const aside = document.querySelector('.aside');
const closeBurgerButton = document.querySelector('.button--burger-close')

burgerButton.addEventListener('click', () => {
    aside.classList.remove("not-visible");
})

closeBurgerButton.addEventListener('click', () => {
    aside.classList.add("not-visible");
})