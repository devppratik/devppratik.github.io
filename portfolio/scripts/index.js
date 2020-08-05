const ham = document.querySelector('#mobile-link');
const navbar = document.querySelector('.nav');
const home = document.querySelector('.home-link');
ham.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.toggle('show');
});
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    const btn = document.querySelector('.button.page-link');
    btn.addEventListener('click', () => {
        window.open("/projects.html", name = "_self");
    });
}
let curr = window.location.pathname;
if (curr === "/" || curr === "/index.html") {
    home.classList.add("active")
}
else if (curr === "/skills.html") {
    home.nextElementSibling.classList.add("active");
}
else if (curr === "/projects.html") {
    home.nextElementSibling.nextElementSibling.classList.add("active");
}
else if (curr === "/contact.html") {
    home.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("active");
}