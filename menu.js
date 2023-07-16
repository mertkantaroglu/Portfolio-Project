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

// // Card Objects //
// const projects = [
//   {
//     name: 'Conference Project',
//     description: 'A conference website for anime fans and comicon lovers. Built with HTML, CSS and JS.',
//     image: 'Images/Conference_1.png',
//     technologies: ['html', 'css', 'javaScript'],
//     link: 'https://mertkantaroglu.github.io/Capstone-Conference-Project/',

//     content1: 'A conference website for anime fans and comicon lovers. Built with HTML, CSS and JS.',
//     content2: 'A conference website for anime fans and comicon lovers. Built with HTML, CSS and JS.',
//     tags1: ['HTML', 'CSS', 'JavaScript'],
//     tags2: ['Frontend', 'Full-stack Development','Github',],
//   },
//   {
//     name: 'TV Show App',
//     image: 'Images/js project ss.png',
//     technologies: ['HTML', 'CSS', 'JavaScript'],
//     link: 'https://mertkantaroglu.github.io/JS-Capstone-Project/dist/index.html',
//     content1: 'A dynamic website displaying information about TV shows.',
//     content2: 'A dynamic website displaying information about TV shows.',
//     tags1: ['HTML', 'CSS', 'JavaScript'],
//     tags2: ['Frontend', 'Full-stack Development','Github',]
//   },
//   {
//     name: 'Crypto Market App',
//     image: 'Images/react project ss.png',
//     technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
//     link: 'https://coin-market-app-project.netlify.app/',
//     content1: ' In this project you can see the current prices and details of cryptocoins.',
//     content2: ' In this project you can see the current prices and details of cryptocoins.',
//     tags1: ['HTML', 'CSS', 'JavaScript', 'React'],
//     tags2: ['Frontend', 'Full-stack Development','Github',]
//   },
//   {
//     name: 'Uber Navigation',
//     description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
//     image: 'Images/Snapshoot Portfolio (1).png',
//     technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
//     link: 'link_to_live_version.com',
//     content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer ...',
//     content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
//   },
// ];

// Fetch Projects
fetch("projects.json")
  .then(response => response.json())
  .then(data => renderProjects(data))
  .catch(error => console.error(error));

// Render Projects
function renderProjects(projects) {
  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((project, index) => {
    const projectCard = `
      <section class="cards">
        <div class="projects project${index + 1}">
          <img
            class="picture picture${index + 1}"
            src="${project.image}"
            alt="${project.name}"
          />
          <div class="project-info project-info${index + 1}">
            <h2 class="project-title">${project.name}</h2>
            <ul class="project-summary">
              <li><h3 class="back-end-dev">${project.technologies[0]}</h3></li>
              <li><h3 class="dot"></h3></li>
              <li><h3 class="year">${project.year}</h3></li>
            </ul>
            <p class="project-details">${project.description}</p>
            <div class="project-button-below">
              <ul class="dev-list">
                ${project.technologies
                  .map(tech => `<li><h3 class="html">${tech}</h3></li>`)
                  .join("")}
              </ul>
              <button class="project-button1 project-button" type="submit">
                Live Demo
              </button>
              <button class="project-button2 project-button" type="github">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </section>
    `;

    projectsContainer.innerHTML += projectCard;
  });
}


const popupsProjectImage = document.querySelector('.popup-img');
const popupsProjectTitle = document.querySelector('.popups-proj-title');
const popupsProjectDesktop = document.querySelector('.popups-project-p-desktop');
const popupsProjectMobile = document.querySelector('.popups-project-p-mobile');
const tagsUp = document.querySelectorAll('.card-tags-up');
const tagsDown = document.querySelectorAll('.card-tags-down');

function openModal(index) {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';

  popupsProjectImage.src = projects[index].image;
  popupsProjectTitle.innerHTML = projects[index].name;
  popupsProjectDesktop.innerHTML = projects[index].content1;
  popupsProjectMobile.innerHTML = projects[index].content2;
  tagsUp.innerHTML = projects[index].tags1;
  tagsDown.innerHTML = projects[index].tags2;
  document.documentElement.scrollTop = 0;
}

openModalBtn1.addEventListener('click', function() {
  openModal(0);
});

openModalBtn2.addEventListener('click', function() {
  openModal(1);
});

openModalBtn3.addEventListener('click', function() {
  openModal(2);
});

openModalBtn4.addEventListener('click', function() {
  openModal(3);
});

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
