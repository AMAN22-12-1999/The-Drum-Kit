//Ist Type to Write Code for using addEventListener.
// document.querySelectorAll("button")[0].addEventListener("click",handle);
// document.querySelectorAll("button")[1].addEventListener("click",handle);
// document.querySelectorAll("button")[2].addEventListener("click",handle);
// document.querySelectorAll("button")[3].addEventListener("click",handle);
// document.querySelectorAll("button")[4].addEventListener("click",handle);
// document.querySelectorAll("button")[5].addEventListener("click",handle);
// document.querySelectorAll("button")[6].addEventListener("click",handle);
//
// function handle(){
//   alert("I got Clicked");
// }

//IInd type to write Code for using addEventListener.
//Detecting Button Press.
var numberofbutt=document.querySelectorAll(".drum").length;

for(var i=0; i<numberofbutt ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){  //here it is anonymus function
      var buttonInnerHTML= this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
  });
}

//Detecting Keyboard Press.
document.addEventListener("keydown",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
});


function makeSound(keyPressed){
  switch (keyPressed) {

    case "w":
     var tom1 = new Audio('sounds/tom-1.mp3');
     tom1.play();
    break;

    case "a":
     var tom2 = new Audio('sounds/tom-2.mp3');
     tom2.play();
    break;

    case "s":
     var tom3 = new Audio('sounds/tom-3.mp3');
     tom3.play();
    break;

    case "d":
     var tom4 = new Audio('sounds/tom-4.mp3');
     tom4.play();
    break;

    case "j":
     var snare = new Audio('sounds/snare.mp3');
     snare.play();
    break;

    case "k":
     var crash = new Audio('sounds/crash.mp3');
     crash.play();
    break;

    case "l":
     var kickBass = new Audio('sounds/kick-bass.mp3');
     kickBass.play();
    break;

    default:
      console.log(keyPressed);
  }

}


function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
