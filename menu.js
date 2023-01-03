const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.mobile-menu li');
const mobileMenu = document.querySelector('.mobile-menu');
const cancelIcon = document.querySelector('.cancel-icon');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  cancelIcon.classList.toggle('active');
});

menuLinks.forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  cancelIcon.classList.remove('active');
}));

// const hamburger = document.querySelector('.hamburger');
// const ulCont = document.querySelector('.ul-cont');

// function myFunction() {
//   hamburger.classList.add('hamburger-disappear');
//   ulCont.classList.add('ul-cont-appear');
// }

// ulCont.addEventListener('click', ((e) => {
//   if (e.target.classList[0] === 'closeIcon') {
//     hamburger.classList.remove('hamburger-disappear');
//     ulCont.classList.remove('ul-cont-appear');
//   } else if (e.target.classList[0] === 'nav-link') {
//     hamburger.classList.remove('hamburger-disappear');
//     ulCont.classList.remove('ul-cont-appear');
//   }
// }));


// const menu = document.querySelector('.menu-icon');
// const closeItems = document.querySelectorAll('.closing');
// const displayMobileMenu = () => {
//   menu.style.display = 'block';
// };
// const closeMobileMenu = () => {
//   menu.style.display = 'none';
// };
// document
//   .querySelector('.openMenu')
//   .addEventListener('click', displayMobileMenu);
// closeItems.forEach((element) => element.addEventListener('click', closeMobileMenu));

