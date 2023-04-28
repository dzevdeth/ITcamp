// const broj = prompt("Unesite neki broj:");

// if (isNaN(broj)) {
//   console.log("Niste uneli konkretan broj");
// } else {
// }
// console.log(broj ** 2);

//Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FIZZ BUZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else if (i % 3 === 0) {
//     console.log("FIZZ");
//   } else {
//     console.log(i);
//   }
// }

// Ispisati prva tri broja koja su deljiva sa 4 i 6
// let brojac = 1;
// for (let i = 1; brojac < 4; i++) {
//   if (i % 4 === 0 && i % 6 === 0) {
//     console.log(i);
//     brojac++;
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//While petlja se takodje koristi za interakciju kroz neki objekat i izvrsavanje odredjenog koda
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//do while petlja se koristi za interakciju kroz neki objekat, s tim sto u ovakvoj petlji imamo prvo izvrsenje koda pa tek onda ispitavanje uslova.
// let k = 5;
// do {
//   console.log(k);
//   k++;
// } while (k < 10);

// Traziti od korsnika da unese neki broj
// Na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja:

// let broj1 = +prompt("Unesite neki broj:");

// let broj2 = 1;
// while (broj2 <= broj1) {
//   console.log(broj2 ** 2);
//   broj2++;
// }

//Traziti unos brojeva od korisnika sve dok ne unese nulu:

// let vrednost = 1; //Sve sem 0
// while (vrednost !== 0) {
//   vrednost = +prompt("Unesite neku vrednost:");
// }

// korisnik unosi dva broja na osnovu toga koji je broj manji vrsi se interakcija od nega do najveceg

let broj1 = +prompt("Unesite prvi broj");
let broj2 = +prompt("Unesite drugi broj");

if (broj1 < broj2) {
  while (broj1 <= broj2) {
    console.log(broj1);
    broj1++;
  }
} else if (broj2 < broj1) {
  while (broj2 < broj1) {
    console.log(broj2);
    broj2++;
  }
}
