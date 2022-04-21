const menuBtnabout = document.querySelector('#mobile-humberg-about');
const menuBarabout = document.querySelector('#popup-1-about');

let menuClickedabout = false;

menuBtnabout.addEventListener('click', () => {
  menuBtnabout.classList.toggle('popup');

  if (!menuClickedabout) {
    menuBarabout.style.display = 'block';
    menuClickedabout = true;
  } else {
    menuBarabout.style.display = 'none';
    menuClickedabout = false;
  }
});

function togglePopup() {
  menuBarabout.style.display = 'none';
}

if (1 === 10) {
  togglePopup();
}
