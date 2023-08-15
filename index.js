var nobuttons = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function(event)
{
  click(event.key);
});

for (var i = 0; i < nobuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var deeznuts = this.innerHTML;
    click(deeznuts);
  });
}



function click(key) {

  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/highhat.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/snare.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kickdrum.mp3");
      kick.play();
      break;
    default:
      console.log("chuitiya hai kya??");

  }

}
