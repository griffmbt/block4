const burgerButton = document.querySelector(".header__button--burger");
const aside = document.querySelector(".aside");
const closeBurgerButton = document.querySelector(".button--burger-close");

const toggleAside = function () {
  aside.classList.toggle("not-visible");
};

burgerButton.addEventListener("click", (e) => {
  //  e.stopPropagation();
  toggleAside();
});

closeBurgerButton.addEventListener("click", (e) => {
  //  e.stopPropagation();
  toggleAside();
});

window.addEventListener("click", outsideClick);
function outsideClick(e) {
  if (e.target == aside) {
    toggleAside();
  }
}
