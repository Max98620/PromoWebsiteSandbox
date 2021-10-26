
function setTheme(theme, randomizer) {
  var theme = document.getElementsByTagName('link')[0];
  var randomizer = Math.floor(Math.random() * 5);

  if (randomizer < 2) {
    theme.setAttribute('href', '../terror.css');
    document.getElementById("run").innerHTML = "ESCAPE"
  }
  console.log(randomizer)
  }
