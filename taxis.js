// on definit le personage, il s'appelle Jhon, il a 10 point de santée mentale
const personage = {
prenom : "john",
santeementale : 10,}



// on definit les musiques qu'il peut y avoir dans le taxi dans un tableau
const listemusiques = ["Anissa - Wejdene", 
"Paranoid by Black Sabbath",
"Johnny B. Goode by Chuck Berry",
"Swlabr by Cream",
"The House Of The Rising Sun by The Animals"]


// on definit le trajet, on commence avec 30 feuxrouge et 0 arret
const trajet = {
    feuxrouge : 30,
    arret : 0,

}
// on definit une fonction qui choisi aléatoirement une muique, on crée ensuite 
function choisirMusique() {
    const randommusic = Math.floor(Math.random() * 5); // on genere un chiffre aleatoire que compris entre 1 et 5 qui correspond au 5 musique du tableau
    return listemusiques[randommusic];} // ensuite il nous renvoie une valeur aleatoire
    

    
    while (trajet.feuxrouge > 0) { // tant que la valeur de feux rouge est inferieur à 0 on repete l'action
          let musiqueEnCour = choisirMusique(); // on choisit une musique aléatoirement
        console.log("Musique en cours :" + musiqueEnCour + "- Feux rouges restants :" + trajet.feuxrouge); // la console nous renvoie une phrase ou apparait la musique qui a été jouer + le nombre de feu rouge restant
    
        



    

if ( musiqueEnCour === "Anissa - Wejdene"){  // si la musique Anissa est jouer
    personage.santeementale -= 1; // la personage perd un point de santée mentale
    trajet.arret += 1; // et le personage à un arret suplementaire
    console.log ('  je deteste cette chanson, je change de taxi '); // la console renvoie une phrase ou apparait le nombre d'arret restant
}
trajet.feuxrouge -= 1} // dans tout les cas lorsqu'une musique est jouer on enleve 1 à la valeur de feu rouge car on passe un feu rouge
    
  // Vérification des conditions de fin
  if (trajet.feuxrouge === 0 && personage.santeementale > 0) { // si on passe tout les feux rouge et que la santée mentale de Jhon n'est pas inferieur à 0
    console.log(personage.prenom + "est bien arrivé à destination après " + trajet.arret + " changements de taxi."); // la console affiche que le personage est bien arrivé a destination avec le nombre d'arret qu'il à effectuer
  } else {
    console.log("Explosion !"); // si  la santé mental de john arrive à 0 alors on écrit explosion
  }