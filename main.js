var Username = document.getElementById('User-name');
var Email = document.getElementById('E-mail');
var form = document.getElementById('booking-form');
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    localStorage.setItem('Username',Username.value);
    localStorage.setItem('Email',Email.value);
  
  }