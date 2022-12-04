function saveData(){

  var name = document.getElementById('name');
  
  var email = document.getElementById('email');

  localStorage.setItem("Name", name.value);
  localStorage.setItem("Email", email.value);
}