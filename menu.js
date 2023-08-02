// Mobile menu //
const mobileMenu = document.querySelector('.mobile-menu');
// const hamburger = document.querySelector('.hamburger');
// const menuLinks = document.querySelector('.menu-links');
const closeIcon = document.querySelector('.cancel-icon');

// function openMobileMenu() {
//   mobileMenu.classList.remove('hidden');
//   mobileMenu.style.display = 'flex';
// }

// hamburger.addEventListener('click', openMobileMenu);

function closeMobileMenu(event) {
  const clickedElement = event.target;
  const isMenuLink = clickedElement.closest('.menu-links');

  if (isMenuLink) {
    event.preventDefault(); // Prevent the default behavior of the anchor links
  }

  mobileMenu.classList.add('hidden');
  mobileMenu.style.display = 'none';
}

document.addEventListener('click', closeMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);

// Render Projects
function renderProjects(projects) {
  const projectsContainer = document.querySelector('.projects-container');

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
    .map((tech) => `<li><h3 class="html">${tech}</h3></li>`)
    .join('')}
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

// Fetch Projects
fetch('projects.json')
  .then((response) => response.json())
  .then((data) => renderProjects(data));

/* eslint-disable no-unused-vars */

// Download Resume //
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1jcn9RwozxEyINlMCQGXqkDtTkGhV19Rp';
  link.download = 'Mert_Kantaroglu_Resume.pdf';

  // Trigger the download by programmatically clicking the link
  link.dispatchEvent(new MouseEvent('click'));
}