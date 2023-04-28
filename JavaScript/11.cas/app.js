// domaci

// const broj = +prompt("Unesite neki broj: ");

// if (isNaN(broj) || broj < 12 || broj >= 16) {
//   console.log("Niste uneli odgovarajucu vrednost");
// } else {
//   for (let i = broj; i >= 1; i--) {
//     console.log(i, i ** 2, i - 25);
//   }
// }

//Svaki karakter neke recenice neka se ispise jedan ispod drugog.

// const recenice =
//   "U ponedeljak je neradni dan, to zanci da je nas sledeci cas u sredu.";

// for (let i = 0; i <= recenice.length; i++) {
//   console.log(recenice[i]);
// }

//Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svki karakter ide jedan ispod drugog
//Dok ako je neki karakter "a" neka se ispise 5 a ako je "s" neka se ne ispise nista.

// const recenice = prompt("Napisi slobodno");

// for (let i = 0; i <= recenice.length; i++){

//   console.log(recenice[i]);
// }

//Metoda toLowerCase() pretvara se u ceo string u mala slova:

console.log("SVE VELIKA SLOVA".toLowerCase());

//m=Metoda toUpperCase() pretvara ceo string u velika slova

//Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom

const recenica1 = "ovde svaka rec pocinje velikim slovom";

let recenica2 = "";
for (let i = 0; i < recenica1.length; i++) {
  if (i === 0) {
    recenica2 += recenica1[i].toUpperCase();
  } else if (recenica1[i - 1] === " ") {
    recenica2 += recenica1[i].toUpperCase();
  } else {
    recenica2 += recenica1[i];
  }
}
console.log(recenica2);
