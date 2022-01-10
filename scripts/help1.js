function getQuestion(){
  var option = document.getElementById('drop').value;
  if (option == 0) {
    document.getElementById("answer").innerHTML = ("You can download from the page titled 'Downloads', it will take you to the google play store where you can download a better game")
  }else {
    document.getElementById('answer').innerHTML = ("No")
  }
}
