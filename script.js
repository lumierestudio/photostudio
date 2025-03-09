const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const navMenu = document.querySelector('.nav');

burgerMenuIcon.addEventListener('click', () => {
  burgerMenuIcon.classList.toggle('open');
  navMenu.classList.toggle('show');
});