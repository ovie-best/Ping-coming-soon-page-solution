'use strict';

const form = document.querySelector('form');
const submit = document.querySelector('input[type="submit"]');
const errorMsg = document.querySelector('.error');
const input = document.querySelector('input[type="email"]');

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


function checkEmail(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    if (validateEmail(email)) {
        errorMsg.style.display = 'none';
        input.classList.remove('er')
    } else {
        errorMsg.style.display = 'block';
        input.classList.add('er');
    }
}

form.addEventListener('submit', checkEmail);