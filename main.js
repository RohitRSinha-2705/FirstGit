var form = document.getElementById('booking-form');
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    var Username = document.getElementById('User-name').value;
    var Email = document.getElementById('E-mail').value;
    localStorage.setItem('Username',Username);
    localStorage.setItem('Email',Email);
  
  }