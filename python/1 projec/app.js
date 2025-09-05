
let index = 0;

function changeColor(){
    let colors = ["red","blue","orange","yellow","green","aqua"]

    document.querySelector("body")[0].style.background = colors[index++]

    index++
 
}