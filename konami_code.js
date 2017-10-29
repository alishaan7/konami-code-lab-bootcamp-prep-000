const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')
  body.addEventListener('keydown', function(e) {
    if (e.which === 71) {
      return e.preventDefault()
    }
  })
  var konamiCodePosition = 0;
  
  document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
    if (key == requiredKey) {
      // move to the next key in the konami code sequence
      konamiCodePosition++;
      // if the last key is reached, activate cheats
      if (konamiCodePosition == code.length) {
          activateCheats();
          konamiCodePosition = 0;
      }
    }else {
        konamiCodePosition = 0;
    }
  });
}
