/* section cube  */
let cube = document.getElementById("cube");

cube.classList.add("animation_cube");
/* 
fin section cube */

let enigme1 = "Qu'est qui peut être dans la mer et dans le ciel";
let reponse1 = ""
document.getElementsByClassName("lien_acceuil")[0].onclick = function() {
    window.alert("Pourquoi aller sur une page que vous êtes déjà dessus ?");
    
    let reponse1 = window.prompt(`Juste pour ça voici une énigme : ${enigme1}`);
    
    if (reponse1 !== null) {
        
        if (
            reponse1.toLowerCase() === "etoile" || 
            reponse1.toLowerCase() === "une etoile" || 
            reponse1.toLowerCase() === "une étoile" || 
            reponse1.toLowerCase() === "étoile"
        ) {
            window.alert("Oh bonne réponse désoler pour le dérangement !");
        } else {
            window.alert("Vous n'êtes vraiment pas l'étoile la plus brillante !");
        }
    }
};


let tempsDebut = 0;
let intervalle;
let enCours = false;

let meilleur = 0;
let somme = 0;
let nombreTemps = 0;

document.getElementById("btn-demarrer").onclick = function () {

    if (enCours === false) {
        demarrer();
    }
    else {
        arreter();
    }
};

document.getElementById("btn-recommencer").onclick = function () {
    recommencer();
};


function demarrer() {

    tempsDebut = Date.now();
    enCours = true;

    document.getElementById("chrono").style.color = "#4169b0";
    document.getElementById("btn-demarrer").textContent = "Arrêter";

    intervalle = setInterval(function () {
        afficher("chrono", Date.now() - tempsDebut);
    }, 10);
}

function arreter() {

    clearInterval(intervalle);
    enCours = false;

    let resultat = Date.now() - tempsDebut;

    afficher("chrono", resultat);
    document.getElementById("chrono").style.color = "#2b2b2b";
    document.getElementById("btn-demarrer").textContent = "Démarrer";

    nombreTemps++;
    somme = somme + resultat;

    if (nombreTemps === 1 || resultat < meilleur) {
        meilleur = resultat;
    }

    afficher("meilleur", meilleur);
    afficher("moyenne", somme / nombreTemps);
    afficher("dernier", resultat);

    nouveauMelange();
}

function recommencer() {

    clearInterval(intervalle);
    enCours = false;

    document.getElementById("chrono").textContent = "00:00.00";
    document.getElementById("chrono").style.color = "#2b2b2b";
    document.getElementById("btn-demarrer").textContent = "Démarrer";

    nouveauMelange();
}