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

//modal window
const modal = document.querySelector('.popup-window');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.project-button1');
const closeModalBtn = document.querySelector('.closeIcon-popup');

const storeData = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'Images/Snapshoot Portfolio (1).png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
    tags1: ['HTML', 'css', 'Javascript'],
    tags2: ['Github', 'Ruby', 'Frontend'],
  },
  {
    name: 'Multi Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    imagesrc: 'imgs/poster2.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook,s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    imagesrc: 'imgs/poster 3.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    imagesrc: 'imgs/poster 4.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
  },
];

const popupsProjectImage = document.querySelector('.popup-img');
const popupsProjectTitle = document.querySelector('.popups-proj-title');
const popupsProjectDesktop = document.querySelector('.popups-project-p-desktop');
const popupsProjectMobile = document.querySelector('.popups-project-p-mobile');
const tagsUp = document.querySelectorAll('.card-tags-up');
const tagsDown = document.querySelectorAll('.card-tags-down');

const openModal = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';

  popupsProjectImage.src = storeData[0].imagesrc;
  popupsProjectTitle.innerHTML = storeData[0].name;
  popupsProjectDesktop.innerHTML = storeData[0].content1;
  popupsProjectMobile.innerHTML = storeData[0].content2;
  tagsUp.innerHTML = storeData[0].tags1;
  tagsDown.innerHTML = storeData[0].tags2;
  document.documentElement.scrollTop = 0;
};

openModalBtn.addEventListener('click', openModal);

const closeModal = function () {
  modal.style.display = 'none';
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);