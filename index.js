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


