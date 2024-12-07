const pro1 = document.getElementById('segmentation');
const about = document.getElementById('knowButton');
const projectsSection = document.getElementById('projects');
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

pro1.addEventListener('click', function() {
   window.location.href = './ProjectsInfo/SegmentationProject.html'
});

about.addEventListener('click', function() { 
    projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
});