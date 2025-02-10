// Sélectionner toutes les cellules du plateau
var cellules = document.querySelectorAll(".oval");

// Variable pour suivre le joueur actuel
var joueurActuel = "jaune";

// Parcourir chaque cellule et ajouter un écouteur d'événement
cellules.forEach(function (cellule) {
    cellule.addEventListener("click", function () {
        var image = cellule.querySelector("./");

        // Vérifier si la cellule est vide ou déjà remplie
        if (image) {
            return; // Empêche de changer une case déjà remplie
        }

        // Créer une nouvelle image pour le jeton
        var jeton = document.createElement("img");

        if (joueurActuel === "jaune") {
            jeton.src = "./data/svg/Oval Jaune.svg";
            joueurActuel = "rouge"; // Changer de joueur
        } else {
            jeton.src = "./data/svg/Oval Rouge.svg";
            joueurActuel = "jaune"; // Changer de joueur
        }

        // Ajouter le jeton à la cellule
        cellule.appendChild(jeton);
    });
});