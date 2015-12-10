var body = document.body;
//body.style.cursor = 'none';
var img = document.createElement('img');
img.src= chrome.extension.getURL('/images/finger.png');
img.id = 'sormi';
img.style.position = 'fixed';
img.style.zIndex = '999999';
img.style.top = '0px';
img.style.left = '0px';
body.appendChild(img);

body.addEventListener('mousemove', function(o) {
    var sormi = document.getElementById('sormi');
    sormi.style.left= o.screenX + 1 + 'px';
    sormi.style.top= o.screenY - 337 + 'px';
});
