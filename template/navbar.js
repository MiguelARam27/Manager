let button = document.getElementsByClassName('navbar__togglebutton')[0];
let navBarLinks = document.getElementsByClassName('navbar__links')[0];

button.addEventListener('click', () => {
  navBarLinks.classList.toggle('active');
});
