// Get Elements from the Page
const btn = document.querySelector('.buttons');
const body = document.querySelector('body');


// Add Event Listener  to the button to listen for Click Events
btn.addEventListener('click', () =>{
    // Toggle the dark class so that the body changes its background color
     body.classList.toggle('dark');
     // To change the button text
    (body.classList.contains('dark'))? btn.innerHTML =  'Light' : btn.innerHTML =  'Dark';
});

