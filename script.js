const navOverlay = document.querySelector('.nav-overlay');
const navHumburger = document.querySelector('.nav-humburger');
const xIcon = document.querySelector('.xicon-image');
const overlayNav = document.querySelectorAll('.overlay-link');

function displayOn() {
  navOverlay.classList.remove('off-display');
  document.body.classList.add('scroll');
}

function displayOff() {
  navOverlay.classList.add('off-display');
  document.body.classList.remove('scroll');
  for (let j = 0; j < overlayNav.length; j += 1) {
    overlayNav[j].addEventListener('click', displayOff);
  }
}

navHumburger.addEventListener('click', displayOn);
xIcon.addEventListener('click', displayOff);
overlayNav.addEventListener('click', displayOff);

// Start pop up window Array
const main_works_section = document.querySelector('.main--works--section');
const popupContainer = document.querySelector('main .popup--container');

const projects = [
  {
    id: 'project_1',
    images: {
      img: './images/Snapshoot-Portfolio-mobile1@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_1',
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
      img: './images/Snapshoot-Portfolio-mobile2@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 2 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_2',
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
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 3 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_3',
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
      img: './images/Snapshoot-Portfolio-mobile4@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 4 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_4',
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
      img: './images/Snapshoot-Portfolio-mobile5@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 5 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_5',
    heading: 'Keeping track of hundreds of components_5',
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
      img: './images/Snapshoot-Portfolio-mobile6@2x.png',
      cancelPop: './assets/icons/Disabled@2x.png',
      altText: 'project 6 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_6',
    heading: 'Keeping track of hundreds of components_6',
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
        <li class="li--section>
           ${cardObject.languages.map((lang) => `<button class="btn">
            ${lang}</button>`).join('')}
        </li>
    </ul>
  </div>
 <div class="see--project">
 <button type="button" class="btn--style ${cardObject.id}">See Project</button>;
</div>`

  return li;
}