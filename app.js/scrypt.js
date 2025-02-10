const $ovals = document.querySelectorAll(".oval") // [Element] -> boucler dessus pour sélectionner chacun des éléments





$ovals.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.addEventListener("click", function () {
      const dataX = $gameScreenGridCell.getAttribute("data-x");
      const dataY = $gameScreenGridCell.getAttribute("data-y");
  
      console.log(dataX)
      console.log(dataY)
    });
})

