// Switching between login and signup forms
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');

    
});

function validateCNIC(input) {
    const regex = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
    if (regex.test(input.value)) {
        alert("Valid CNIC");
    } else {
        alert("CNIC must follow the XXXXX-XXXXXXX-X format!");
    }
}



function isValidPhoneNumber(phoneNumber) {
   
    const pattern = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
 
   
    if (!phoneNumber) {
        return "false";
    }
}