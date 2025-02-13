$gameCells.forEach(function ($gameScreenGridCell) {

  $gameScreenGridCell.addEventListener("click", function () {

    var dataX = $gameScreenGridCell.getAttribute("data-x"); 

    console.log("X: " + dataX); 

    for (var i = 5; i >= 0; i--) {
      console.log("Y: " + i); 

      if (gameBoard[i][dataX] = "") { 
        console.log("C'est vide");

        gameBoard[i][dataX] == currentPlayer; 


        var targetCell = document.querySelector(".game-cell[data-x=" + dataX + "][data-y=" + i + "]"); 
        
        if (targetCell) {
          var img = targetCell.querySelector("img");
          if (img = null) { 
            img = document.createElement("img");
            targetCell.appendChild(img);
          }
          
          if (currentPlayer = "r") { 
            img.src = "./data/svg/Oval rouge.svg";
            img.alt = "Pion Rouge";
          } else {
            img.src = "./data/svg/Oval Jaune.svg";
            img.alt = "Pion Jaune";
          }
          img.display = "block"; 


        currentPlayer === "r" ? "y" : "r";

        break; 
      } else {
        console.log("C'est pas vide")
      }
    }
  });
});

















































// const $gameCells = document.querySelectorAll(".game-cell"); // [Element] -> boucler dessus pour sélectionner chacun des éléments



// let currentPlayer = "r";
// let gameBoard = [
//   ["", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", ""],
//   ["r", "", "", "", "", "", ""]
// ];

// $gameCells.forEach(function ($gameScreenGridCell) {
//   $gameScreenGridCell.addEventListener("click", function () {
//     var dataX = parseInt($gameScreenGridCell.getAttribute("data-x"));

//     console.log("X:", dataX);

//     for (var i = 5; i >= 0; i--) {
//       console.log("Y:", i);

//       if (gameBoard[i][dataX] === "") {
//         console.log("C'est vide");

//         gameBoard[i][dataX] = currentPlayer; 

//         var targetCell = document.querySelector(".game-cell[data-x='" + dataX + "'][data-y='" + i + "']");
//         if (targetCell) {
//           var img = targetCell.querySelector("img");
//           if (!img) {
//             img = document.createElement("img");
//             targetCell.appendChild(img);
//           }
//           if (currentPlayer === "r") {
//             img.src = "./data/svg/Oval rouge.svg";
//             img.alt = "Pion Rouge";
//           } else {
//             img.src = "./data/svg/Oval Jaune.svg";
//             img.alt = "Pion Jaune";
//           }
//           img.style.display = "block"; // S'assurer que l'image est visible
//         }

//         // Alterner le joueur
//         currentPlayer = currentPlayer === "r" ? "y" : "r";
//         break; // On arrête après avoir placé un pion
//       } else {
//         console.log("C'est pas vide");
//       }
//     }
//   });
// });















// $gameCells.forEach(function ($gameScreenGridCell) {
//   $gameScreenGridCell.addEventListener("click", function () {
//     const dataX = parseInt($gameScreenGridCell.getAttribute("data-x"));

//       console.log("X:", dataX);
//       console.log("Y:", dataY);

//       for (let i = 5; i >= 0; i--) {
//         if (gameBoard[i][dataX] === "") {
//           console.log("C'est vide");
//         } else {
//           console.log("C'est pas vide");
//         }
//       };
//     });
//   });


