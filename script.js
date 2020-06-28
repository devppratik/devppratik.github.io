const form = document.querySelector('form');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

form.addEventListener('submit',e =>{
  e.preventDefault();
  //Add Data to Firebase
  const Title  = (form.title.value==="-none-")?"":form.title.value;
  const formData ={

    title: Title,
    first_name : form.fname.value.trim(),
    last_name : form.lname.value.trim(),
    email : form.email.value.trim(),
    phone : form.phone.value.trim(),
    message : form.message.value.trim()
  };

  db.collection('forms').add(formData).then(()=>{
  form.reset();
  popup.style.display = 'block';
  setTimeout(()=>{
    
    popup.style.display = 'none';
      }, 5000);
    }).catch(err =>{
      console.log(err);
    });
})
close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
    if(e.target.className === 'popup-wrapper'){
        popup.style.display = 'none';
    }
});

