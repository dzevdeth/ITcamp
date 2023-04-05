//Korisnik unosi 2 broja:
//Na osnovu toga koje je broj manji, interakcija se vrsi od njega do veceg broja
//Ispisuju se brojevi od manjeg ka vecem

const broj1 = +prompt("Unesite prvi broj"); //plus pretvara u broj
const broj2 = prompt("Unesite drugi broj");

if (isNaN(broj1) || isNaN(broj2)) {
  console.log("Morate uneti korektne brojeve");
}

if (broj1 < broj2) {
  for (let i = broj1; i <= broj2; i++) console.log(i);
} else if (broj2 < broj1) {
  for (let i = broj2; i <= broj1; i++) console.log(i);
} else if (broj1 === broj2) {
  console.log("Uneli ste iste brojeve");
}

console.log("drugi zadatak");

//2
//Preko switch naredbe
console.log(new Date().getDay());
// getDay()- daje vrednost 0-6
// switch (new Date().getDay())
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case_ove i eventualne default
// "Dans je radni dan"
// Ugodno provedite vikend

switch (new Date().getDay()) {
  //   case 0:
  //     console.log("Ugodno provedite vikend");
  //     break;

  //   case 6:
  //     console.log("Ugodno provedite vikend");
  //     break;

  //   case 1:
  //     console.log("Danas je radni dan");
  //     break;

  //   case 2:
  //     console.log("Danas je radni dan");
  //     break;

  //   case 3:
  //     console.log("Danas je radni dan");
  //     break;

  //   case 4:
  //     console.log("Danas je radni dan");
  //     break;

  //   case 5:
  //     console.log("Danas je radni dan");
  //     break;

  case 0:
  case 6:
    console.log("Ugodno provedite vikend");
    break;

  default:
    console.log("Danas je radni dan");
}

//3
//Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.
console.log("treci zadatak");

let n = +prompt("Unesite broj:");
let suma = 0;
let brojBrojeva = 0;

for (let i = 1; i < n; i++) {
  if (i % 5 === 0) {
    suma += i;
    brojBrojeva += 1;
  }
}
console.log(suma);
console.log(brojBrojeva);

//Nek se izvrsi interacija od broja 99 do -99

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
