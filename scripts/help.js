
let rTheme = ["../css/terror.css", "../css/style.css"];
var path = rTheme[Math.floor(Math.random() * rTheme.length)];

function setTheme(theme, path, rTheme) {
  var theme = document.getElementsByTagName('link')[0];
  theme.setAttribute('href', path);
}

if (path == 3) {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }
}
console.log(path)
