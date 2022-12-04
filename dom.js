
// function saveData(){

//   var myobj = {
//    name : document.getElementById('name').value,
//    email : document.getElementById('email').value
//   }

//   localStorage.setItem("myObj", JSON.stringify(myobj));
  
// console.log(myobj);
// }

function saveData(){
var emailId = document.getElementById("email").value;
  var name = document.getElementById("name").value;

  if (emailId.length > 0 && name.length > 0) {
    var object = {
      name: name,
      emailId: emailId 

    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    addNewLineElement(object);
  }
  
}



function addNewLineElement(object) {
  var ul = document.getElementById("listOfPeople");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(object.name + " " + object.emailId + " ")); // li.appendChild()

  console.log(document.createElement("i"));
  var a1 = document.createElement("input");
  a1.id = "yash";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", function () {
    console.log(object);
    document.getElementById("name").value = object.name;
    document.getElementById("email").value = object.emailId;
    li.remove();
  });
  a1.className = "delete";
  a1.style.border = "2px solid green";
  console.log(a1);
  li.appendChild(a1);
  var a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", function () {
    localStorage.removeItem("userDetails" + object.emailId); // axios.delete(`${apiendpoint}/registeruser/${object._id}`);

    li.remove();
  });
  a.className = "delete";
  a.style.border = "2px solid red";
  console.log(a);
  li.appendChild(a);
  console.log(li);
  ul.appendChild(li);
}