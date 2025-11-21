// Création des deux personnages
let héro = {
  nom: "Héro",
  pointsDeVie: 100,
  attaque: 20,
  precision: 0.7 
};

let monstre = {
  nom: "Monstre",
  pointsDeVie: 100,
  attaque: 15,
  precision: 0.6 
};

// Fonction pour attaquer
function attaquer(attaquant, defenseur) {
  console.log(`${attaquant.nom} attaque ${defenseur.nom}!`);  // console.log qui montre qui attaque qui
  console.log(`${defenseur.nom} a ${defenseur.pointsDeVie} PV avant l'attaque.`); // console.log qui affiche les points de vie du defenseure de l'attaque avant l'attaque.
  
  // Vérifier la précision
  const nombreAleatoire = Math.random(); // genere un nombre aleatoire et le met dans la variable nombreAleatoire
  console.log(`Précision d'attaque: ${nombreAleatoire.toFixed(2)} (précision requise: ${attaquant.precision})`); // console.log qui affiche la precision qu'a l'attaquant et la precision requise. ToFixed qui sert a arrondir le nombre generer par la fonction math.random et garde 2 chiffre apres la virgule. 
  
  if (nombreAleatoire < attaquant.precision) {   // if pour comparer la precision de l'attaquant avec la precision requise
    // L'attaque touche
    const PV = defenseur.pointsDeVie;  // Sauvegarde les PV actuelle. 
    defenseur.pointsDeVie -= attaquant.attaque; // soubstraction des PV
    
    console.log(`Touché! ${attaquant.nom} inflige ${attaquant.attaque} dégâts.`);  //console.log pour dire si l'attaque est touché et combien de dégats elle a infligé. 
    console.log(`${defenseur.nom}: ${PV} PV - ${attaquant.attaque} PV = ${defenseur.pointsDeVie} PV.`); // console.log qui montre les détails des calculs par rapport au PV perdu. 
    console.log(`${defenseur.nom} a maintenant ${defenseur.pointsDeVie} PV.`);   // console.log qui affiche les points de vie du personnage apres l'attaque. 
  } else {
    
    console.log(`Raté! ${attaquant.nom} a manqué son attaque.`); // console.log qui affiche l'attaque raté
  }
}

// Fonction pour vérifier si un personnage est toujours en vie
function estEnVie(personnage) {
  return personnage.pointsDeVie > 0;
}

console.log("=== DÉBUT DU COMBAT ===");
console.log(`${héro.nom}: ${héro.pointsDeVie} PV | Attaque: ${héro.attaque} | Précision: ${héro.precision * 100}%`);  // console.log qui affiche les characteristics des personnages. 
console.log(`${monstre.nom}: ${monstre.pointsDeVie} PV | Attaque: ${monstre.attaque} | Précision: ${monstre.precision * 100}%`);

let tour = 1;  // Definis le premier tour

while (estEnVie(héro) && estEnVie(monstre)) {  // condition qui fait en sorte que tant que le héro et le monstre sont en vie, la fonction attaquer est éxecuter et les tour augmente. 
  console.log(`\n--- TOUR ${tour} ---`); // Affiche le numéro de tour actuelle

  attaquer(héro, monstre); // Le héro attaque en premier, la fonction attaquer est executer. 
  
  if (estEnVie(monstre)) {      // Vérifier si le monstre est encore en vie avant qu'il attaque
    attaquer(monstre, héro);
  }
  
  tour++; // Augmente le nombre de tour. 
}

console.log("=== FIN DU COMBAT ===");   // Annonce la fin du combat
if (estEnVie(héro)) {        // Condition qui verifie si le héro est en vie. 
  console.log(`${héro.nom} remporte le combat avec ${héro.pointsDeVie} PV restants!`); // console.log qui affiche le gagnant avec le nombre de PV restant. 
} else {      // Si le héro n'est plus en vie, c'est le monstre qui gagne. 
  console.log(`${monstre.nom} remporte le combat avec ${monstre.pointsDeVie} PV restants!`); // console.log qui affiche que le monstre a gagné. 
}