const navMain = document.querySelector('.menu');
const navToggle = document.querySelector('.menu__button');

//Убирает класс menu--nojs

navMain.classList.remove('menu--nojs');
navMain.classList.add('menu--opened');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('menu--closed');
  navMain.classList.toggle('menu--opened');
});

const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector(".closeModal");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
  modal.showModal()
});

modal.addEventListener("click", (event) => {
  if(event.target === modal) modal.close()
})
