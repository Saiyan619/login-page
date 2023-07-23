let clickThere = document.getElementById('clickThere');
let title = document.getElementById('title');
let myEmail = document.getElementById("myEmail");
let logInBtn = document.getElementById('logIn');
let choicesBetweenAvatars = document.getElementsByClassName('gender');
let vanish = document.getElementById('vanish');
let username = document.getElementById('username');
let passcode = document.getElementById('passcode');

let checker, checker2;
checker = document.getElementsByClassName('checker');
checkerPassword = document.getElementsByClassName('checker2');
    
clickThere.onclick = function (){
    myEmail.style.display = 'flex';
    title.innerHTML = 'Signup';
    logIn.innerHTML = 'done';
    // choicesBetweenAvatars.style.display = 'flex';
    vanish.style.display = 'none';
} 
logInBtn.addEventListener('click', function () {
    myEmail.style.display = 'none';
    title.innerHTML = 'Login';
    logIn.innerHTML = 'login';
    
    vanish.style.display = 'block';
});

logInBtn.addEventListener('submit', function (e) {
    e.preventDefault()
    let messages = [];
    if (username.value === '' || username.value == null) {
        checker.style.display = 'block';
    }
    
})











