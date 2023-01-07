// Mobile menu //
const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');
const closeIcon = document.querySelector('.cancel-icon');

function openMobileMenu() {
  mobileMenu.classList.remove('hidden');
  mobileMenu.style.display = 'flex';
}

hamburger.addEventListener('click', openMobileMenu);

function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenu.style.display = 'none';
}

menuLinks.addEventListener('click', closeMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);

// Popup Cards //
const modal = document.querySelector('.popup-window');
const overlay = document.querySelector('.overlay');
const openModalBtn1 = document.querySelector('.project-button1');
const openModalBtn2 = document.querySelector('.project-button2');
const openModalBtn3 = document.querySelector('.project-button3');
const openModalBtn4 = document.querySelector('.project-button4');
const closeModalBtn = document.querySelector('.closeIcon-popup');

// Card Objects //
const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    image: 'Images/Snapshoot_Portfolio_project5.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing...',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
    tags1: ['HTML', 'css', 'Javascript'],
    tags2: ['Github', 'Ruby', 'Frontend'],
  },
  {
    name: 'Multi Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'Images/Snapshoot Portfolio (3).png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing...',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook,s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: 'Images/Snapshoot Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing...',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'Images/Snapshoot Portfolio (1).png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing...',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
  },
];

const popupsProjectImage = document.querySelector('.popup-img');
const popupsProjectTitle = document.querySelector('.popups-proj-title');
const popupsProjectDesktop = document.querySelector('.popups-project-p-desktop');
const popupsProjectMobile = document.querySelector('.popups-project-p-mobile');
const tagsUp = document.querySelectorAll('.card-tags-up');
const tagsDown = document.querySelectorAll('.card-tags-down');

// Opening 1st Card //
const openModal1 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';

  // Populating cards with object items //
  popupsProjectImage.src = projects[0].image;
  popupsProjectTitle.innerHTML = projects[0].name;
  popupsProjectDesktop.innerHTML = projects[0].content1;
  popupsProjectMobile.innerHTML = projects[0].content2;
  tagsUp.innerHTML = projects[0].tags1;
  tagsDown.innerHTML = projects[0].tags2;
  document.documentElement.scrollTop = 0;
};

openModalBtn1.addEventListener('click', openModal1);

// Opening 2nd Card //
const openModal2 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';

  popupsProjectImage.src = projects[1].image;
  popupsProjectTitle.innerHTML = projects[1].name;
  popupsProjectDesktop.innerHTML = projects[1].content1;
  popupsProjectMobile.innerHTML = projects[1].content2;
  tagsUp.innerHTML = projects[1].tags1;
  tagsDown.innerHTML = projects[1].tags2;
  document.documentElement.scrollTop = 0;
};

openModalBtn2.addEventListener('click', openModal2);

// Opening 3rd Card //
const openModal3 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';

  popupsProjectImage.src = projects[2].image;
  popupsProjectTitle.innerHTML = projects[2].name;
  popupsProjectDesktop.innerHTML = projects[2].content1;
  popupsProjectMobile.innerHTML = projects[2].content2;
  tagsUp.innerHTML = projects[2].tags1;
  tagsDown.innerHTML = projects[2].tags2;
  document.documentElement.scrollTop = 0;
};

openModalBtn3.addEventListener('click', openModal3);

// Opening 4th Card //
const openModal4 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';

  popupsProjectImage.src = projects[3].image;
  popupsProjectTitle.innerHTML = projects[3].name;
  popupsProjectDesktop.innerHTML = projects[3].content1;
  popupsProjectMobile.innerHTML = projects[3].content2;
  tagsUp.innerHTML = projects[3].tags1;
  tagsDown.innerHTML = projects[3].tags2;
  document.documentElement.scrollTop = 0;
};

openModalBtn4.addEventListener('click', openModal4);

// Closing Popup //
const closeModal = function () {
  modal.style.display = 'none';
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);

// Email Validation //
document.getElementById('contact-form').onsubmit = (e) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    document.getElementById('error').innerHTML = 'Email must be in lowercase';
  }
};
