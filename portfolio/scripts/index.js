const ham = document.querySelector('#mobile-link');
const navbar = document.querySelector('.nav');
const logo = document.querySelector('.logo-main');
const home = document.querySelector('.home-link');
let curr = window.location.pathname;

// Pre-Loader Script
window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});

// Mobile Nav Bar Script
ham.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.toggle('show');
});

//Home Page Button Click Event
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    const btn = document.querySelector('.button.page-link');
    btn.addEventListener('click', () => {
        window.open("/portfolio/projects.html", name = "_self");
    });
}

//Logo Click Event
logo.addEventListener('click', () => {
    window.open("/index.html", name = "_self");
})

// Adding Active Class to Current Page
if (curr === "/" || curr === "/index.html") {
    home.classList.add("active")
}
else if (curr === "/portfolio/skills.html") {
    home.nextElementSibling.classList.add("active");
}
else if (curr === "/portfolio/projects.html") {
    home.nextElementSibling.nextElementSibling.classList.add("active");
}
else if (curr === "/portfolio/contact.html") {
    home.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("active");
}

// Contact Form Event
if (curr === "/portfolio/contact.html") {
    const form = document.querySelector('.contact-form');
    const popup = document.querySelector('.popup-wrapper');
    const close = document.querySelector('.popup-close')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const now = new Date();
        const details = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
            date: firebase.firestore.Timestamp.fromDate(now)
        }
        db.collection('orders').doc(`Order_${form.name.value}`).set(details).then(() => {
            // window.alert("Message added")
            //Show Popup
            popup.style.display = 'block';
            close.addEventListener('click', () => {
                popup.style.display = 'none';
            })
            popup.addEventListener('click', () => {
                popup.style.display = 'none';
            })
            setTimeout(() => {
                popup.style.display = 'none';
            }, 5000)
            form.reset();
        }).catch(err => {
            console.log(err)
        })
    })
}