//Store the selecte elements that we are going to use.
const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelectorAll('#nav-bar');

//Toogle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});
