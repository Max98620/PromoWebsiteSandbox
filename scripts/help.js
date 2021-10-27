var rTheme = ["../css/terror.css", "../css/style.css", "../css/terror2.css"];
var path = rTheme[Math.floor(Math.random() * rTheme.length)];

function setTheme(rTheme, theme) {
  var theme = document.querySelector("link");
  theme.setAttribute('href', path);
  console.log(path)
}

if (path == "../css/terror2.css") {
  webcam()
} else if (path == "../css/style.css") {
  console.log("penis")
}
function webcam() {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        fear();
      });
  }
}

function fear() {
  console.log("fear")
}
