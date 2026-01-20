const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Show registration form when "Register" link is clicked
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Show login form when "Login" link is clicked
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Show popup when "Login" button is clicked
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Close popup when close icon is clicked
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
