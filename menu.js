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
              <li><h3 class="back-end-dev">${project.stack}</h3></li>
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
              <div class="button-list">
                <button class="project-button1 project-button" type="submit">
                <a class="live-link" href="${project.link}" target="_blank">
                  Live Demo
                </button>
                <button class="project-button2 project-button" type="github"><a class="github-link" href="${project.github}" target="_blank">
                  GitHub
                </button>
              </div>
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
