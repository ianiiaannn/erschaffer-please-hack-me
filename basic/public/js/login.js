/* eslint-disable max-len */
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (document.getElementById('username').value == 'ianiiaannn') {
    if (btoa(document.getElementById('password').value) == 'U3VwZXIgc3VwZXIgc2VyZXRjdCBwYXNzd29yZCB5b3Ugd29uJ3QgYWxiZSB0byBndWVzcyB0aGlzIGhhaGFoYWhoYWhhaGFoYWhoYWhhaGFoYWhoYQ==') {
      alert('Access Granted. Top serect: eleCTF{Rushia_not_b01ng_b01ng_Rushia_fla-}');
    } else {
      alert('noob little hacker what is my password?');
    }
  } else {
    alert('user not found');
  }
});
