/*Exercice : créer une fonction qui prend deux objets en entrée et écrit dans la console si leur type est * identique ou pas.

pareil(2, 3); // le type est le même
pareil(2,"2"); // le type est différent*/

var a = 2;
var b = "3";

function lememe(a,b) {
  if (typeof a == typeof b) {
  console.log("le type est le même");
} else if (typeof a != typeof b) {
  console.log("le type est différent");
  }
}

lememe(a,b);