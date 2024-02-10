document.getElementById("btn_login").addEventListener("click", loginn);
document.getElementById("btn_register").addEventListener("click", register);
window.addEventListener("resize", switchPage);

var login = document.querySelector(".login");
var register_form = document.querySelector(".register_form");
var login_form = document.querySelector(".login_form");
var backbox_login = document.querySelector(".backbox_login");
var register_box = document.querySelector(".register_box");


function switchPage(){

    if (window.innerWidth > 850){
        register_box.style.display = "block";
        backbox_login.style.display = "block";
    }else{
        register_box.style.display = "block";
        register_box.style.opacity = "1";
        backbox_login.style.display = "none";
        login.style.display = "block";
        login_form.style.left = "0px";
        register_form.style.display = "none";   
    }
}

switchPage();


    function loginn(){
        if (window.innerWidth > 850){
            login.style.display = "block";
            login_form.style.left = "10px";
            register_form.style.display = "none";
            register_box.style.opacity = "1";
            backbox_login.style.opacity = "0";
        }else{
            login.style.display = "block";
            login_form.style.left = "0px";
            register_form.style.display = "none";
            register_box.style.display = "block";
            backbox_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            register_form.style.display = "block";
            login_form.style.left = "410px";
            login.style.display = "none";
            register_box.style.opacity = "0";
            backbox_login.style.opacity = "1";
        }else{
            register_form.style.display = "block";
            login_form.style.left = "0px";
            login.style.display = "none";
            register_box.style.display = "none";
            backbox_login.style.display = "block";
            backbox_login.style.opacity = "1";
        }
}

 // Login form validation
 const loginForm = document.getElementById('login_form');
 loginForm.addEventListener('submit', function(event) {
     event.preventDefault();
     const username = document.getElementById('user').value;
     const password = document.getElementById('password').value;

     if (username.length >= 6 && password.length >= 8) {
         window.location.href = 'valid.html';
     } else {
         alert('Invalid username or password');
     }
 });

 // Register form validation
 const signupForm = document.querySelector('.register_form');
 signupForm.addEventListener('submit', function(event) {
     event.preventDefault();
     const firstName = document.getElementById('first_name').value;
     const lastName = document.getElementById('last_name').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('signup_password').value;

     if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
         alert('Please fill in all the fields');
     } else if (firstName.length < 2 || lastName.length < 2) {
         alert('First name and last name must be at least 2 characters long');
     } else if (password.length < 8) {
         alert('Password must be at least 8 characters long');
     } else {
         alert('Registration successful');
         signupForm.reset(); 
     }
 });













