let signUp = document.getElementById('signUp');
let title = document.getElementById('title');
let nameField = document.getElementById("nameField");
let logIn = document.getElementById('logIn');


signUp.onclick = function(){
    nameField.style.maxHeight = '0';
    title.innerHTML = 'LOGIN';
    
    
} 
logIn.onclick = function(){
    nameField.style.maxHeight = '65px';
    title.innerHTML = 'Sign Up';
    
} 

