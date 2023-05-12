const prom1 =
  "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda";
console.log(prom1);

// const prom2 =
// "Sta ako zelimo da se data data recenica ispise u dva odvojena reda kada kucamo
// , ali njen prikaz ce izgledati u jednom redu.
// shjajj"

let br1 = 7;
let br2 = 13;
let zbir = br1 + br2;
console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + zbir);

// Resenje preko back-ticks

console.log(`Zbir brojeva ${br1} i ${br2} je ${br1 + br2}`);

// Zapisivanje navodnika se vrsi bez ikakvih problema kroz back-ticks sintaksu.
// Zapisivanje stringa u vise redova je ispravna sintaksa kroz back-ticks, navode.

let recenica = "Zelimo zameniti rec 'promenljivo' sa recju 'lepse' ";

// replace()metoda menja specifican karakter (Niz karaktera) nekim drugim (koji saljemo kroz drugi argument)
// console.log(recenica.replace("promenljivo ", "lepse"));
let recenica2 = recenica.replace("promenljivo", "lepse");
console.log(recenica2);

let recenica3 =
  "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu?";
let recenica4 = recenica3.replace("promenljivo", "lepse");
console.log(recenica4);

// replace() menja samo prvi karakter koji naidje, a regular expression mozemo zameniti koliko god istih argumenata
// Regular Expression g (global) menja sve reci u stringu nekom novom
let recenica5 = recenica3.replace(/promenljivo/g, "lepse");
console.log(recenica5);
// Regular Expression i (insesitive) menja rec drugom bez obzira na njen zapis
let recenica6 =
  "Zelimo zameniti rec 'promenljivO' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu?";

let recenica7 = recenica6.replace(/promenljivo/gi, "lepse");
console.log(recenica7);

// toUpperCase() metoda pretvara ceo string u velika slova, bez obzira na to kako je prethodno ispisan i koliko ima karaktera
console.log("Data recenica treba biti ispisana velikim slovima".toUpperCase());

// toLowerCase() pretvara sve u mala slova
console.log("OVA TREBA SVE MALIM".toLowerCase());

// concat() metoda spaja dva ili vise stringova u jedan
// Nismo ograniceni slanjem argumenata slanjem argumenata,
// Dodavanje se vrsi onim redosledom kako saljemo argumente.

let a = "Prvi deo ";
let b = "nase recenice";
let b2 = ".";
let c = a.concat(b, b2);
console.log(c);

// Sve metode vezane za stringove prave novi string, ne vrsi se modifikacije postojeceg

// zadatak.......
function myFunc(recenica) {
  const duzina = recenica.length;
  if (duzina > 9) {
    const novaRecenica = recenica.replace(/a/g, "B");
    return "Ovo je novo dobijena recenica".concat(novaRecenica);
  } else {
    return "Recenica je nedovoljne duzine za dalje ispitivanje";
  }
}
console.log(myFunc("Recenica za modifikaciju."));
console.log(myFunc("Nije do"));
