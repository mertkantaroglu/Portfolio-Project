const modal = document.querySelector('.popup-window');
const overlay = document.querySelector('.modal');
// const openModal = document.querySelectorAll('.project-button');
// const closeModal = document.querySelector('.modal-close-icon');
// const modalProjectContent = document.querySelector('.modal-project-content');

const openModalBtn = document.querySelector('.card-button');
const openModalBtn2 = document.querySelector('.card-button2');
const openModalBtn3 = document.querySelector('.card-button3');
const openModalBtn4 = document.querySelector('.card-button4');

const closeModalBtn = document.querySelector('.modal-close-icon');

const projects = [
  {
    id: 1,
    title: 'Tonic',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2015',
    image: 'Snapshoot_Portfolio_project5.png'
    shortDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the release printer took a galley of type and scrambled it 1960s with the release.',
    devList: ['html', 'css', 'javaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    company: 'FACEBOOK',
    position: 'Full Stack Dev',
    year: '2015',
    image: 'Snapshoot Portfolio (3).png'
    shortDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the release printer took a galley of type and scrambled it 1960s with the release.',
    devList: ['html', 'css', 'javaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 3,
    title: 'Facebook 360',
    company: 'FACEBOOK',
    position: 'Full Stack Dev',
    year: '2015',
    image: 'Snapshoot Portfolio.png'
    shortDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the release printer took a galley of type and scrambled it 1960s with the release.',
    devList: ['html', 'css', 'Ruby on Rails', 'javaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    company: 'Uber',
    position: 'Lead Developer',
    year: '2015',
    image: 'Snapshoot Portfolio (1).png'
    shortDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the release printer took a galley of type and scrambled it 1960s with the release.',
    devList: ['html', 'css', 'Ruby on Rails', 'javaScript'],
    liveLink: '',
    sourceLink: '',
  },
];


// projects.forEach((project) => {
//   const article = document.createElement('article');
//   article.classList.add('work-card');

//   function openModalWindow() {
//     modal.classList.remove('hidden');
//     modal.style.display = 'flex';
//   }

//   const modalCard = document.createElement('modal-card');

//   openModal.addEventListener('click', () => {
//     modalProjectContent.innerHTML =
//       ` <div class="modal-close">
//       <h2 class="modal-project-title">${project.title}</h2>
//       <span class="modal-close-icon">x</span>
//     </div>
//         <ul class="modal-project-summary">
//           <li><h3 class="canopy">${project.company}</h3></li>
//           <li><h3 class="dot"></h3></li>
//           <li><h3 class="back-end-dev">${project.position}</h3></li>
//           <li><h3 class="dot"></h3></li>
//           <li><h3 class="year">${project.year}</h3></li>
//         </ul>
//         <img
//         class="modal-picture" id="${projects.id}"
//         src="Images/${projects.image}"
//           alt="${projects.title}"
//           />
//           <p class="project-details">
//             ${projects.longDetails}  
//           </p>
//           <div class="project-button-below">
//             <ul class="dev-list modal-dev-list">
//               ${projects.devList}
//             </ul>
//           <div class="modal-bar"></div>
//           <div class="modal-buttons">
//             <button class="project-button modal-live-button" type="button" onClick="location.href='${projects.liveLink}'">See Live
//               <img src="./Images/live-icon.png" class="live-icon"></button>
//               <button class="project-button modal-source-button" type="button" onClick="location.href='${projects.sourceLink}'">See Source
//                 <img src="./Images/github-button.png" class="source-icon"></button>
//           </div>  
//         </div>
//       </div>    
//     </div>
//   </section>
//   `; modal.classList.remove('hidden');

//   })
// })

// function closeModalWindow() {
//   modal.classList.add('hidden');
//   modal.style.display = 'none';
// }

// closeModal.addEventListener('click', closeModalWindow);

const projectImgSrc = document.querySelectorAll('.tonic');
const projectLanguagesHtml = document.querySelectorAll('.project-languages-html');
const projectLanguagesRuby = document.querySelectorAll('.project-languages-ruby');
const projectLanguagesCss = document.querySelectorAll('.project-languages-css');
const projectLanguagesJs = document.querySelectorAll('.project-languages-js');
const projectsDescription = document.querySelectorAll('.projects-description');

for (let i = 0; i < projectLanguagesHtml.length; i++) {
  projectImgSrc[i].src = projects[i].imagesrc;
  projectLanguagesHtml[i].innerHTML = projects[i].technologies[0];
  projectLanguagesRuby[i].innerHTML = projects[i].technologies[1];
  projectLanguagesCss[i].innerHTML = projects[i].technologies[2];
  projectLanguagesJs[i].innerHTML = projects[i].technologies[3];
  projectsDescription[i].innerHTML = projects[i].description;
}

const popupsProjectImage = document.querySelector('.popup-img');
const popupsProjectTitle = document.querySelector('.popups-proj-title');
const popupsProjectDesktop = document.querySelector('.popups-project-p-desktop');
const popupsProjectMobile = document.querySelector('.popups-project-p-mobile');
const tagsUp = document.querySelectorAll('.card-tagsLi');
const tagsDown = document.querySelectorAll('.card-tagsLi1');

const openModal = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = projects[0].imagesrc2;
  popupsProjectTitle.innerHTML = projects[0].name;
  popupsProjectDesktop.innerHTML = projects[0].content1;
  popupsProjectMobile.innerHTML = projects[0].content2;
  tagsUp.innerHTML = projects[0].tags1;
  tagsDown.innerHTML = projects[0].tags2;
  document.documentElement.scrollTop = 0;
};

openModalBtn.addEventListener('click', openModal);

const openModal2 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[1].imagesrc;
  popupsProjectTitle.innerHTML = storeData[1].name;
  popupsProjectDesktop.innerHTML = storeData[1].content1;
  popupsProjectMobile.innerHTML = storeData[1].content2;
  popupsProjectTitle.style.fontSize = '20px';
  document.documentElement.scrollTop = 0;
};

openModalBtn2.addEventListener('click', openModal2);

const openModal3 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[2].imagesrc;
  popupsProjectTitle.innerHTML = storeData[2].name;
  popupsProjectDesktop.innerHTML = storeData[2].content1;
  popupsProjectMobile.innerHTML = storeData[2].content2;
  popupsProjectTitle.style.fontSize = '20px';
  document.documentElement.scrollTop = 0;
};

openModalBtn3.addEventListener('click', openModal3);

const openModal4 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[3].imagesrc;
  popupsProjectTitle.innerHTML = storeData[3].name;
  popupsProjectDesktop.innerHTML = storeData[3].content1;
  popupsProjectMobile.innerHTML = storeData[3].content2;
  document.documentElement.scrollTop = 0;
};

openModalBtn4.addEventListener('click', openModal4);

const closeModal = function () {
  modal.style.display = 'none';
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);

