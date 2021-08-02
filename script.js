const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const buttonBrands = document.querySelector(".button__brands");
const buttonHidden = document.querySelectorAll(".brands__display--none");
const buttonNameBrands = document.querySelector(".brands__span");
const brandsImg = document.querySelector(".brands__img");
const buttonHiddenIpad = document.querySelectorAll(".brands__display--ipad");

hideButtonBrands();

function hideButtonBrands() {
  buttonHidden.forEach((item) => {
    if (item.style.display != "none") {
      item.style.display = "none";
      buttonNameBrands.textContent = "Показать все";
      brandsImg.src = "./img/main/icon.svg";
      buttonHiddenIpad.forEach((button) => {
        button.classList.remove("display--block");
      });
    } else {
      item.style.display = "flex";
      buttonNameBrands.textContent = "Скрыть";
      brandsImg.src = "./img/main/icon2.svg";
      buttonHiddenIpad.forEach((button) => {
        button.classList.add("display--block");
      });
    }
  });
}
buttonBrands.addEventListener("click", hideButtonBrands);

const buttonEquipment = document.querySelector(".button__equipment");
const equipmentItem = document.querySelectorAll(".equipment__display--none");
const buttonNameEquipment = document.querySelector(".equipment__span");
const equipmentImg = document.querySelector(".equipment__img");
const equipmentItemIpad = document.querySelector(".equipment__display--ipad");
hideButtonEquipment();

function hideButtonEquipment() {
  equipmentItem.forEach((item) => {
    if (item.style.display != "none") {
      item.style.display = "none";
      buttonNameEquipment.textContent = "Показать все";
      equipmentItemIpad.classList.remove("display--block");
      equipmentImg.src = "./img/main/icon.svg";
    } else {
      item.style.display = "block";
      buttonNameEquipment.textContent = "Скрыть";
      equipmentItemIpad.classList.add("display--block");
      equipmentImg.src = "./img/main/icon2.svg";
    }
  });
}
buttonEquipment.addEventListener("click", hideButtonEquipment);

function hiddenItemIpad() {
  if (window.innerWidth <= 768) {
    equipmentItemIpad.classList.add("equipment__display--none");
    buttonHiddenIpad.forEach((button) => {
      button.classList.add("brands__display--none");
    });
  }
  if (window.innerWidth > 768) {
    equipmentItemIpad.classList.remove("equipment__display--none");
    buttonHiddenIpad.forEach((button) => {
      button.classList.remove("brands__display--none");
    });
  }
}

hiddenItemIpad();
window.addEventListener("resize", hiddenItemIpad);
