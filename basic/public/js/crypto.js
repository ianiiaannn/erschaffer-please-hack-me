// https://stackoverflow.com/questions/24775725/loop-through-childnodes
// No flag inside.
NodeList.prototype.forEach = Array.prototype.forEach;
window.addEventListener('load', () => {
  const form = document.getElementById('inputForm');
  form.addEventListener('submit', () => {
    event.preventDefault();
    const XHR = new XMLHttpRequest();
    XHR.responseType = 'json';
    let req = '';
    form.childNodes.forEach((e) => {
      if (e.nodeName == 'INPUT') {
        if (e.value) {
          req += e.name;
          req += '=';
          req += e.value;
          req += '&';
        }
      }
    });
    XHR.addEventListener('error', () => {
      console.log('error');
    });
    XHR.onreadystatechange = () => {
      if (XHR.readyState == XMLHttpRequest.DONE) {
        console.log(XHR.response.message);
        document.getElementById('message').innerText = XHR.response.message;
        if (XHR.response.flag) {
          const child = document.createElement('div');
          child.innerText = XHR.response.flag;
          document.getElementById('flag').appendChild(child);
        }
      }
    };
    XHR.open('POST', '/crypto?' + req + '1', true);
    XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    XHR.send('/crypto?' + req + '1');
  });
});
