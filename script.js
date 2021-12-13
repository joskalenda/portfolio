let navOverlay = document.querySelector('.nav-overlay');
let navHumburger = document.querySelector('.nav-humburger');
let xIcon = document.querySelector('.xicon-image');
let overlayNav = document.querySelectorAll('.overlay-link');


function displayOn(){
  navOverlay.classList.remove('off-display');
  document.body.classList.add('scroll');
}
function displayOff(){
  navOverlay.classList.add('off-display');
  document.body.classList.remove('scroll');
  for (let j=0; j < overlayNav.length; j++){
    overlayNav[j].addEventListener('click',displayOff);
  }
}


navHumburger.addEventListener('click',displayOn);
xIcon.addEventListener('click',displayOff);
overlayNav.addEventListener('click',displayOff);


