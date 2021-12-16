// Start pop up window Array
const htmls = document.getElementsByTagName('html')[0];
const mainWorkSection = document.querySelector('.main--works--section');
const popupContainer = document.querySelector('.main--container .popup--container');

const projects = [
  {
    id: 'project_1',
    images: {
      img: './assets/Snapshoot-Portfolio-mobile1@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components_1',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './assets/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './assets/icons/GitHub.svg',
      },
    ],
  },
  {
    id: 'project_2',
    images: {
      img: './assets/Snapshoot-Portfolio-mobile2@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 2 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components_2',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: 'Project_2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './assets/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './assets/icons/GitHub.svg',
      },
    ],
  },
  {
    id: 'project_3',
    images: {
      img: './assets/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 3 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components_3',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: 'Project_3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './assets/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './assets/icons/GitHub.svg',
      },
    ],
  },
  {
    id: 'project_4',
    images: {
      img: './assets/Snapshoot-Portfolio-mobile4@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 4 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components_4',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: 'Project_4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './assets/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './assets/icons/GitHub.svg',
      },
    ],
  },
  {
    id: 'project_5',
    images: {
      img: './assets/Snapshoot-Portfolio-mobile5@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 5 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: 'Project_5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './assets/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: '.assets/icons/GitHub.svg',
      },
    ],
  },
  {
    id: 'project_6',
    images: {
      img: './assets/Snapshoot-Portfolio-mobile6@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 6 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: 'Project_6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './assets/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './assets/icons/GitHub.svg',
      },
    ],
  },
];

function createCard(cardObject) {
  const li = document.createElement('li');
  li.className = 'card--section';
  li.innerHTML = `<div class="image--container">
  <img src="${cardObject.images.img}" alt="${cardObject.images.altText}">
  </div>
  <div class="btn--container">
    <h4>${cardObject.name}</h4>
    <ul class="ul--section">
        ${cardObject.languages.map((lang) => `<button type="button" class="btn">
        ${lang}</button>`).join('')}
    </ul>
  </div>
  <div class="see--project">
    <button type="button" class="btn--style ${cardObject.id}">See Project</button>
  </div>`;

  return li;
}

projects.forEach((project) => {
  const card = createCard(project);
  mainWorkSection.appendChild(card);
});

function createPopup(object) {
  const popupCard = document.createElement('div');
  popupCard.classList.add('card-popup');
  popupCard.id = object.id;
  popupCard.innerHTML = `
  <div class="project-img">
    <img class="card-img" src="${object.images.img}" alt="${object.images.altText}">
    <img class="hide-icon" src="./assets/icons/Disabled@2x.png"></div>
  
  <div class="article">
    <h4>${object.heading}</h4>
    <ul class="ul--section d-flex">
        ${object.languages.map((lang) => `<button class="btn mobile-invisible"> 
        ${lang}</button>`).join('')}

        ${object.technologies.map((tech) => `<button class="btn desktop-invisible"> 
        ${tech}</button>`).join('')}

    </ul>
    <p>${object.description}</p>
    <div class="see--live">
      <button type="button" class="btn--style"><span>See Live</span><img src="./assets/icons/Icon-Export@2x.svg" alt=""></button>
      <button type="button" class="btn--style"><span>See Source</span><img src="./assets/icons/GitHub.svg" alt=""></button>
    </div>
  </div>`;
  return popupCard;
}

projects.forEach((project) => {
  const popupCard = createPopup(project);
  popupContainer.appendChild(popupCard);
});

// Toggle PopUp window

const buttons = document.querySelectorAll('li.card--section .see--project .btn--style');
const closeButtons = document.querySelectorAll('.card-popup .hide-icon');

buttons.forEach((button) => {
  const currentModal = document.getElementById(button.classList[1]);
  button.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
    currentModal.classList.add('active');
    htmls.style.overflow = 'hidden';
  });
});

closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
  // const activePopup = document.querySelector('.card-popup.active');
    document.querySelector('.card-popup.active').classList.remove('active');
    popupContainer.style.display = 'none';
    htmls.style.overflow = 'auto';
  });
});