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

function attaquer(attaquant, defenseur) {
  console.log(`${attaquant.nom} attaque ${defenseur.nom}!`); 
  console.log(`${defenseur.nom} a ${defenseur.pointsDeVie} PV avant l'attaque.`); 
  
  const nombreAleatoire = Math.random(); 
  console.log(`Précision d'attaque: ${nombreAleatoire.toFixed(2)} (précision requise: ${attaquant.precision})`);  
  
  if (nombreAleatoire < attaquant.precision) {   
    const PV = defenseur.pointsDeVie;  
    defenseur.pointsDeVie -= attaquant.attaque; 
    
    console.log(`Touché! ${attaquant.nom} inflige ${attaquant.attaque} dégâts.`);  
    console.log(`${defenseur.nom}: ${PV} PV - ${attaquant.attaque} PV = ${defenseur.pointsDeVie} PV.`);  
    console.log(`${defenseur.nom} a maintenant ${defenseur.pointsDeVie} PV.`);   
  } else {
    
    console.log(`Raté! ${attaquant.nom} a manqué son attaque.`); 
  }
}

function estEnVie(personnage) {
  return personnage.pointsDeVie > 0;
}

console.log("=== DÉBUT DU COMBAT ===");
console.log(`${héro.nom}: ${héro.pointsDeVie} PV | Attaque: ${héro.attaque} | Précision: ${héro.precision * 100}%`);  // console.log qui affiche les characteristics des personnages. 
console.log(`${monstre.nom}: ${monstre.pointsDeVie} PV | Attaque: ${monstre.attaque} | Précision: ${monstre.precision * 100}%`);

let tour = 1;  

while (estEnVie(héro) && estEnVie(monstre)) {  
  console.log(`--- TOUR ${tour} ---`); 

  attaquer(héro, monstre); 
  
  if (estEnVie(monstre)) {    
    attaquer(monstre, héro);
  }
  
  tour++; 
}

console.log("=== FIN DU COMBAT ===");  
if (estEnVie(héro)) {        
  console.log(`${héro.nom} remporte le combat avec ${héro.pointsDeVie} PV restants!`); 
} else {     
  console.log(`${monstre.nom} remporte le combat avec ${monstre.pointsDeVie} PV restants!`); 
}