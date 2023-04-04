const openFace = document.querySelector('.open');
const closedFace = document.querySelector('.closed');
const mendFace = document.querySelector('.mend')
// Add event listener
closedFace.addEventListener('click', () => {
  if (mendFace.classList.contains('mend')) {
    mendFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});
mendFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    mendFace.classList.remove('active');
  }
});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
});

