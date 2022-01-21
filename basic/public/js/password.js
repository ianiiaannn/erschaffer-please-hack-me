/* eslint-disable max-len */
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  input=atob(document.getElementById('password').value);
});
