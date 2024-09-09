const menuBtn = document.querySelector("#menu");
const navLinks = document.querySelector("#navLinks");

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})