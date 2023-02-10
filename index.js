//detecting button press
var NumberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<NumberOfButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

  });
}
//detecting keyboard press
document.addEventListener("keypress",function(event)
{
makeSound(event.key);
buttonAnimation(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
    var audio=new Audio('sounds/crash.mp3');
     audio.play();
    case "a":
    var audio=new Audio('sounds/kick-bass.mp3');
     audio.play();
      break;
      case "s":
      var audio=new Audio('sounds/snare.mp3');
       audio.play();

        break;
        case "d":
        var audio=new Audio('sounds/tom-1.mp3');
         audio.play();

          break;
          case "j":
          var audio=new Audio('sounds/tom-2.mp3');
           audio.play();

            break;
            case "k":
            var audio=new Audio('sounds/tom-3.mp3');
             audio.play();

              break;
              case "l":
              var audio=new Audio('sounds/tom-4.mp3');
               audio.play();
                break;
    default:
    console.log(buttonInnerHTML);

  }
}
function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
   setTimout(function(){
     activeButton.classList.remove("pressed");
   },100);
}
/*another type of adding function without name also known as Anonymous function
document.querySelector("button").addEventListener("click",HandleClick);
function HandleClick(){
  alert("i got clicked");
*/

// var audio=new Audio('sounds/tom-1.mp3');
// audio.play();
