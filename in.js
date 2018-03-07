var colors=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];
var pickedColor=pickColor();
var squares=document.querySelectorAll(".squares");
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
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
            changeColor(clickedColor);
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