const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-links');
const mobileMenu = document.querySelector('.mobile-menu');



const openMobilemenu = function () {
    mobileMenu.classList.remove('hidden');
    mobileMenu.style.display = 'flex';
  };

  const closeMobileMenu = function () {
    mobileMenu.style.display = 'none';
    mobileMenu.classList.add('hidden');
  };