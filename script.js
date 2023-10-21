var  child = document.querySelector(".child");
//console.log(child);

// var childAttirbute = child.getAttribute("parents");
// console.log(childAttirbute);

var andre = document.getElementById("andre");
//console.log(andre);

var courses = document.querySelectorAll(".courses ")
//console.log(courses);


// var btn =document.getElementById("myBtn");
// btn.setAttribute("class", "click-btn" );
// btn.removeAttribute("class")
// console.log(btn);
var btn = document.querySelector(".andre")
btn.addEventListener("click", function(){
    alert("welcome to my page")
})
var form = document.querySelector(".form");

form.addEventListener('submit', function(e){
    e.preventDefault();

    var name = document.loginForm.name.value;
    var password = document.loginForm.password.value;

    if(name == 0){
        alert("Name is expected");
    } else if (password.length < 5){
        alert("Password is less than 5 characters. Please increase it");
    } else {
        alert("Your details have been successfully submitted");
    }
})


