const modalWindow = document.querySelector('.openModal');
const openModalbtn = document.querySelectorAll('.project-button');


function openModalfnct() {
  modalWindow.classList.remove('hidden');
  modalWindow.style.display = 'flex';
}

openModalbtn.addEventListener('click', openModalfnct);




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
