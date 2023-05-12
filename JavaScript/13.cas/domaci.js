// Domaci zadaci:

//  1. Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisati "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

//  3. Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.

// // 1.
// const recenica5 = prompt("Unesite neku recenicu: ");
// let recenica6 = "";
// for (let i = 0; i < recenica5.length; i++) {
//   if (recenica5[i] === " ") {
//     continue;
//   } else {
//     recenica6 += recenica5[i];
//   }
// }
// console.log(recenica6);

//2.
const recenica = prompt("Unesite neku recenicu:");
let recenica2 = "";
for (let i = 0; i < recenica.length; i++) {
  if (recenica[i] === "a" && recenica[i + 1] === "n") {
    recenica2 += "d";
  } else if (recenica[i] === "a") {
    recenica2 += "t";
  } else {
    recenica2 += recenica[i];
  }
}
console.log(recenica2);
