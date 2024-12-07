const header = document.querySelector('header');
const brandName = document.querySelector('.brandName');
const imgLogo = document.querySelector('.imgLogo');

function toggleSticky() {
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.addEventListener('scroll', toggleSticky);