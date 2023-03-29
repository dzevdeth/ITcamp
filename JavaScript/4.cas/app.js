// Kondicionali:

if ("prvi uslov") {
  //blok koda za izvrsavanje u slucaju da je zadoovoljen prvi uslov
} else if ("drugi uslov") {
  //Blok koda koji ce se izvrsiti u slucaju da sve prethodno nije zadovoljeno
} else {
  //Blok koda koji ce se izvrsiti u slucaju da sve prthodno nije zadovoljeno
}

//Ako je broj godina >=18
//neka se ispise poruka "Punoletni ste"
const brojGodina = 26;
if (brojGodina >= 18) {
  console.log("Punoletni ste");
} else {
  console.log("Maloletni ste");
}

//Na osnovu dve promenljive x i y napisati program koji izracunava i stampa
//Kolicnik x/y, ako je broj y razlicit od nule, a inace ispisuje poruku: Deljenje je nemoguce.

let x = 16;
let y = 2;

if (y === 0) {
  console.log("Deljenje je nemoguce.");
} else {
  console.log(x / y);
}
