const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var konamiCodePosition = 0;

  const body = document.querySelector('body');

  body.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  // var key = allowedKeys[e.keyCode];
  const key = parseInt(e.detail || e.which);
  // compare the key with the required key
    if (key == code[konamiCodePosition]) {
      // move to the next key in the konami code sequence
      konamiCodePosition++;
      // if the last key is reached, activate cheats
      if (konamiCodePosition == code.length) {
          alert("Hurray!");
          konamiCodePosition = 0;
      }
    }else {
        konamiCodePosition = 0;
    }
  });
}