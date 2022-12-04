
function saveData(){

  var myobj = {
   name : document.getElementById('name').value,
   email : document.getElementById('email').value
  }

  localStorage.setItem("myObj", JSON.stringify(myobj));
  
console.log(myobj);
}
