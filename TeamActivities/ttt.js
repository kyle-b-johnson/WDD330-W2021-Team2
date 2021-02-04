const playerTurn = 1;
let boxes = document.querySelectorAll("td");

boxes.forEach((el) => el.

if (playerTurn == 1){
     ;
}

document.getElementById("reset").ontouchend(clearBoard());

function clearBoard(){
    let boxes = document.querySelectorAll("td");

    boxes.forEach((el) => el.innerHTML = "");
}