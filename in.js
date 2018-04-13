var nosq=6;
var colors= genertaterandomcolors(nosq);
var pickedColor=pickColor();
var squares=document.querySelectorAll(".squares");
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;

var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
    nosq=3;
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    colors=genertaterandomcolors(nosq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i=0;i<squares.length;i++){
        if (colors[i]){
         squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})

hardbtn.addEventListener("click",function(){
    nosq=6;
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    colors=genertaterandomcolors(nosq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i=0;i<squares.length;i++){
        
         squares[i].style.background=colors[i];
       
            squares[i].style.display="block";
        }
    
})


var resetButton=document.querySelector("#reset");
 resetButton.addEventListener("click",function(){
     // all new colors
     colors=genertaterandomcolors(nosq);
     //pick a new random color
     pickedColor=pickColor();
     // change color display to matched color
     colorDisplay.textContent=pickedColor;
     //change the colors of the squares;
     for (var i=0;i<squares.length;i++){
         squares[i].style.backgroundColor=colors[i];
     }
     h1.style.backgroundColor="#232323";
 })
for (var i=0;i<squares.length;i++){
    // add initial colors
    squares[i].style.backgroundColor=colors[i];
    // click event listener
    squares[i].addEventListener("click",function(){
        // get the color of the clicked square
        var clickedColor=this.style.backgroundColor;
        // compare the clicked color
        if (clickedColor===pickedColor){

            messageDisplay.textContent="CORRECT";
            resetButton.textContent="play again?";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else{
         this.style.backgroundColor="#232323";
         messageDisplay.textContent="Try Again";
        }

    });
}
 function changeColor(color){
      // loop through each square 
      for (var i=0;i<colors.length;i++){
      // change the color
      squares[i].style.backgroundColor=color;
      }

 };
 function pickColor(){
     var random=Math.floor(Math.random()*colors.length);
     return colors[random];
 }
 function genertaterandomcolors(num){
     // make an array
     var arr=[];
     // add num random color to array
      for (var i=0;i<num;i++){
       //get random color and push into array
       arr.push(randomColor());
      };
     // return the array
     return arr;
 }
 function randomColor(){
     // pick red
     var r=Math.floor(Math.random()*256);
     //pick green
     var g=Math.floor(Math.random()*256);
     // pick blue
     var b=Math.floor(Math.random()*256);
     return ("rgb("+r+", "+g+", "+b+")");
 }