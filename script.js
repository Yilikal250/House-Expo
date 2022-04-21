const houseProjects = [
  {
    cname: 'six',
    url1: '/image/house1.jfif',
    h1: 'house-detail',
    h2: 'Details of the house',
    par: 'description of the hous what we have know',

  },
  {
    cname: 'fifth',
    url1: '/image/house8.jpg',
    h1: 'house-detail',
    h2: 'Details of the house',
    par: 'description of the hous what we have know',

  },

  {
    cname: 'forth',
    url1: '/image/house6.jpeg',
    h1: 'house-detail',
    h2: 'Details of the house',
    par: 'description of the hous what we have know',

  },
  {
    cname: 'third',
    url1: '/image/house11.jpg',
    h1: 'house-detail',
    h2: 'Details of the house',
    par: 'description of the hous what we have know',

  },
  {
    cname: 'second',
    url1: '/image/house9.jpg',
    h1: 'house-detail',
    h2: 'Details of the house',
    par: 'description of the hous what we have know',

  },
  {
    cname: 'first',
    url1: '/image/house12.jpeg',
    h1: 'house-detail',
    h2: 'Details of the house',
    par: 'description of the hous what we have know',

  },

];

function renderCards(i) {
  const div = document.createElement('div');
  div.className = 'house-cards';

  div.innerHTML = `<div class="square-holder">
  <img class="${houseProjects[i].cname}" src="/image/speaker-back.jpeg" alt="">
  <img class="house-img" src="${houseProjects[i].url1}" alt="">
  </div> 
    <div class="discribe">
     <h1>
     ${houseProjects[i].h1} 
     </h1>
     <h2>${houseProjects[i].h2}</h2>
     <hr>
     <p>${houseProjects[i].par}</p>
    </div>`;
  document.querySelector('.house-detais-conatiner').appendChild(div);
}

for (let i = 0; i < 6; i += 1) {
  renderCards(i);
}

const cards = document.querySelectorAll('.house-cards');
const morebtn = document.querySelector('.more');
const lessbtn = document.querySelector('.less');
let opened = false;

function moreCards() {
  if (!opened) {
    for (let i = 2; i < 6; i += 1) {
      cards[i].style.display = 'flex';
    }
    opened = true;
    morebtn.classList.toggle('hide-card');
    lessbtn.classList.toggle('hide-card');
  } else {
    for (let i = 2; i < 6; i += 1) {
      cards[i].style.display = 'none';
    }
    opened = false;
    morebtn.classList.toggle('hide-card');
    lessbtn.classList.toggle('hide-card');
  }
}

const menuBtn = document.querySelector('#mobile-humberg');
const menuBar = document.querySelector('#popup-1');

let menuClicked = false;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('popup');

  if (!menuClicked) {
    menuBar.style.display = 'block';
    menuClicked = true;
  } else {
    menuBar.style.display = 'none';
    menuClicked = false;
  }
});

function togglePopup() {
  menuBar.style.display = 'none';
}

if (1 === 10) {
  moreCards();
  togglePopup();
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    for (let i = 2; i < 6; i += 1) {
      cards[i].style.display = 'flex';
    }
    menuBar.style.transform = 'translateY(0)';
  } else {
    for (let i = 2; i < 6; i += 1) {
      cards[i].style.display = 'none';
    }
    menuBar.style.transform = 'translateY(-110vh)';
  }
});