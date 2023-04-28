let d = +prompt("Unesite duzinu terena");
let s = +prompt("Unesite sirinu terena");
let r = +prompt("Unesite rastojanje od ograde do terena");

if (d < 90 || d > 120 || s < 45 || s > 90 || r < 2 || r > 10) {
  console.log("Niste uneli bas ono sto bi trebalo");
} else {
  console.log(2 * d + 2 * s + 8 * r);
}

//osnove o stringovima:
const recenica = "Necemo metematicke zadatke!";
console.log(recenica);
//Pristupanje nekom karakteru ide preko indeksa
// Indeksiranje ide od 0
// Poslednji karakter u stringu ima indeks(Cela duzina string -1)
console.log(recenica[0]);
// Za izracunavanje duzine stringa se koristi length metoda
const duzina = recenica.length;
console.log(duzina);
// Ispisivanje poslednjeg karaktera datog stringa
console.log(recenica[duzina - 1]);
