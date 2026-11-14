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


// met un temps en ms dans un élément, comme ça : 01:23.45
function afficher(idElement, ms) {

    let total = Math.floor(ms / 10);

    let minutes = Math.floor(total / 6000);
    total = total - minutes * 6000;

    let secondes = Math.floor(total / 100);
    let centiemes = total - secondes * 100;

    let texteMinutes = "" + minutes;
    let texteSecondes = "" + secondes;
    let texteCentiemes = "" + centiemes;

    if (minutes < 10) {
        texteMinutes = "0" + minutes;
    }
    if (secondes < 10) {
        texteSecondes = "0" + secondes;
    }
    if (centiemes < 10) {
        texteCentiemes = "0" + centiemes;
    }

    document.getElementById(idElement).textContent =
        texteMinutes + ":" + texteSecondes + "." + texteCentiemes;
}


function nouveauMelange() {

    let melange = "";
    let derniereFace = 0;

    for (let i = 0; i < 20; i++) {

        let nombre = Math.floor(Math.random() * 6) + 1;

        // pas deux fois la même face de suite
        if (nombre === derniereFace) {
            nombre = nombre + 1;

            if (nombre === 7) {
                nombre = 1;
            }
        }

        derniereFace = nombre;

        let face;

        if (nombre === 1) {
            face = "R";
        }
        else if (nombre === 2) {
            face = "L";
        }
        else if (nombre === 3) {
            face = "U";
        }
        else if (nombre === 4) {
            face = "D";
        }
        else if (nombre === 5) {
            face = "F";
        }
        else {
            face = "B";
        }

        let nombre2 = Math.floor(Math.random() * 3) + 1;
        let modif;

        if (nombre2 === 1) {
            modif = "";
        }
        else if (nombre2 === 2) {
            modif = "'";
        }
        else {
            modif = "2";
        }

        melange = melange + face + modif + " ";
    }

    document.getElementById("melange").textContent = melange;
}

nouveauMelange();