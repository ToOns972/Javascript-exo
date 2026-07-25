const reverseString = function(string) {
  let reverse = "";
  let longueur = string.length;
  for (let i=0; i<longueur; i++){
    reverse += string.charAt(longueur-1-i);
    // la chaine de caractère commence par 0 soit 0=h et 4=O .
    // la longueur de la chaine est de 5 donc pour commencer à la letre O 
    // on doit faire 5-1 puis soustraire l'itération i pour obtenir le reste des lettres
  }

  return reverse;

};
// Do not edit below this line
module.exports = reverseString;
