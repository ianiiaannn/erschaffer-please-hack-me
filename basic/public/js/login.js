const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (document.getElementById('username').value == 'ianiiaannn') {
    // eslint-disable-next-line max-len
    if (btoa(document.getElementById('password').value) == 'U3VwZXIgc3VwZXIgc2VyZXRjdCBwYXNzd29yZCB5b3Ugd29uJ3QgYWxiZSB0byBndWVzcyB0aGlzIGhhaGFoYWhoYWhhaGFoYWhoYWhhaGFoYWhoYQ==') {
      alert('Access Granted. Welecome back, ian. nunLCO{NISJEJBLARYC}');
    } else {
      alert('noob little hacker what is my password?');
    }
  } else {
    alert('user not found');
  }
});
