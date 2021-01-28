const board = document.querySelector('.magic');

const player1 = 'X';
const player2 = 'O';

let player = player1;

function addPiece(e) {
  console.log(e.target);
  e.target.innerHTML = player;
  if (player === player1) player = player2;
  else player = player1;
}

board.addEventListener('click', addPiece);

// function playGame(){
//   let x = "X";
//   let o = "O";

//     if(player%2 == 0){
//       //player 1 and uses X
//       document.getElementById('bx1').innerHTML = x;
//     } else {
//       //player 2 and uses O
//       document.getElementById('bx1').innerHTML = o;
//     }

//     console.log(player);

//     player = player++;
//   }
// //   const el = document.getElementsByTagName('td');
  
  
// //   el.addEventListner("touchend", playGame, false);
// // }

// // function playGame(){
// //   //loop through and if the index is even then its player 1 else player 2, 
  
// //   //inside loop we do the start and end touch handler


// // }
function resetGame(){
document.getElementById("reset").ontouchend(clearBoard());
}

function clearBoard(){
    let boxes = document.querySelectorAll("td");

    boxes.forEach((el) => (el.innerHTML = ""));
}



// // document.addEventListener("DOMContentLoaded", startup);