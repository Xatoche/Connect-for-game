const $gameCells = document.querySelectorAll(".game-cell"); // [Element] -> boucler dessus pour sélectionner chacun des éléments
const imgContainer = document.getElementById("img-container");

//  Cree un function gameCell qui selection data-x et data-y quand on clique et envoie à la console

//  Matrix tableau
let currentPlayer = "r";
let gameBoard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""]
];

console.log(gameBoard)


document.querySelector(".players-vs-player-btn").addEventListener("click", function() {
  document.querySelector(".game-menu").style.display = "none";
  document.querySelector(".game-board").style.display = "block"; 

    // const element = document.getElementById("game-cell");
    // element.remove(img); 

    $gameCells.forEach(function($gameCell) {
      $gameCell.innerHTML = ""
    })
    

    console.log("Bouton Cliquer")
});


$gameCells.forEach(function ($gameScreenGridCell) {
  $gameScreenGridCell.addEventListener("click", function () {
    let dataX = parseInt($gameScreenGridCell.getAttribute("data-x"));

    for (let i = 5; i >= 0; i--) {
      if (gameBoard[i][dataX] === "") {
        gameBoard[i][dataX] = currentPlayer;

        let targetCell = document.querySelector(".game-cell[data-x='" + dataX + "'][data-y='" + i + "']");
        if (targetCell) {
          let img = targetCell.querySelector("img");

          if (!img) {
            img = document.createElement("img");
            targetCell.appendChild(img);
          }

          img.src = currentPlayer === "r" ? "./data/svg/Oval rouge.svg" : "./data/svg/Oval Jaune.svg";
          img.alt = currentPlayer === "r" ? "Pion Rouge" : "Pion Jaune";
          img.style.display = "block";
        }

        // Vérifier la victoire après avoir joué

        if (verifVictoire(i, dataX, currentPlayer)) {
          console.log(`🎉 Joueur ${currentPlayer.toUpperCase()} a gagné !`);
        }

        // Change de joueur
        currentPlayer = currentPlayer === "r" ? "y" : "r";
        break;
      }
    }
  });
});

// Fonction de Vérification de victoire
function verifVictoire(row, col, player) {
  return (
    checkDirection(row, col, player, 1, 0) || // Horizontal
    checkDirection(row, col, player, 0, 1) || // Vertical
    checkDirection(row, col, player, 1, 1) || // Diagonale /
    checkDirection(row, col, player, 1, -1)   // Diagonale \
  );
}

// Vérifie une direction donnée (dx, dy)

function checkDirection(row, col, player, dx, dy) {
  let count = 1;

  // Vérification vers l'avant

  for (let step = 1; step < 4; step++) {
    let newRow = row + step * dy;
    let newCol = col + step * dx;
    if (newRow < 0 || newRow >= 6 || newCol < 0 || newCol >= 7 || gameBoard[newRow][newCol] !== player) {
      break;
    }
    count++;
  }

  // Vérification vers l'arrière
  for (let step = 1; step < 4; step++) {
    let newRow = row - step * dy;
    let newCol = col - step * dx;
    if (newRow < 0 || newRow >= 6 || newCol < 0 || newCol >= 7 || gameBoard[newRow][newCol] !== player) {
      break;
    }
    count++;
  }

  return count >= 4; // Retourne vrai si 4 alignés
}







// // Affiche la grille quand on clique sur le bouton du game-menu


// $gameCells.forEach(function ($gameScreenGridCell) {
//   $gameScreenGridCell.addEventListener("click", function () {
//     let dataX = parseInt($gameScreenGridCell.getAttribute("data-x"));

//     console.log("X:", dataX);

//     for (let i = 5; i >= 0; i--) {
//       console.log("Y:", i);

//       if (gameBoard[i][dataX] === "") {
//         console.log("C'est vide");

//         gameBoard[i][dataX] = currentPlayer; 
//       }
//     }

//         // Cree un variable targetCell et selectionne ce que contient game-celle à la position data x et data x cliquer via la function gameCeels  

//         let targetCell = document.querySelector(".game-cell[data-x='" + dataX + "']    [data-y='" + i + "']");
//         if (targetCell) {
//           let img = targetCell.querySelector("img");

//           if (!img) {
//             img = document.createElement("img");
//             targetCell.appendChild(img);
//           }

          // console.log(gameBoard)

//             if (currentPlayer === "r") {
//               img.src = "./data/svg/Oval rouge.svg";
//             img.alt = "Pion Rouge";
//           } else {

//             img.src = "./data/svg/Oval Jaune.svg";
//                 img.alt = "Pion Jaune";
//           }
//               img.style.display = "block";
//         }

//         // Fais en sorte que les players varie entre rouger et jaune

//         currentPlayer = currentPlayer === "r" ? "y" : "r";
//         break; 
//       } else {
        // console.log("C'est pas vide");
//       }
//     }
//    });
// });