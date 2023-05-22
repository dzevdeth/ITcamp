// Search metoda:

const recenica = "danas je lep dan.";

// indexOf() metoda nam vraca poziciju karaktera ili niza karaktera koje smo poslali kao argument.
// Ako se taj argument nalazi vise puta unutar stringa dobijamo poziciju prvog pojavljivanja tog argumenta.
// Ako se argument ne nadje unutar stringa, rezultat ce biti -1

console.log(recenica.indexOf("d"));
console.log(recenica.indexOf("dan"));

// lastIndexOf() metoda nam vraca poziciju poslednjeg pojavljivanja karaktera (niza karaktera) koje smo poslali kao argument
// Ako se argument ne nadje unutar stringa rezultat ce biti -1

console.log(recenica.lastIndexOf("dan"));
console.log(recenica.lastIndexOf("lep"));

// Obe metode prihvataju drugi argument, koji oznacava poziciju od koje pocinje trazenje.
// Napomena. Brojac se ne resetuje ako krenemo od drugog argumenta da trazimo, i brojanje ide od drugog argumenta

console.log(recenica.indexOf("dan", 6));
console.log(recenica.indexOf("danas", 6));

// search() metoda takodje vraca poziciju trazenog stringa, s tim sto kod ove metode ne mozemo poslati drugi argument

console.log(recenica.search("dan"));
console.log(recenica.search("noc"));

// startsWith() metoda proverava da li neki string pocinje argumentom koji joj saljemo.
// vraca boolean (true ili false)
// Opciono mozemo poslati drugi argument koji ce da bude index od kojeg zelimo da trazimo poziciju nekog stringa

console.log(recenica.startsWith("Danas"));
console.log(recenica.startsWith("danas"));
console.log(recenica.startsWith("je", 6));

// endsWith() metoda proverava da li neki string zavrsava argumentom koji joj saljemo.
// vraca boolean (true ili false)
// Opciono  mozemo poslati drugi argument koji predstavlja ukupnu duzinu posmatranja datog stringa

console.log(recenica.endsWith("dan"));
console.log(recenica.endsWith("dan."));
console.log(recenica.length);
console.log(recenica.endsWith("dan", 15));

// Zadatak
// Napisi funkciju koja prima tri argumenta: orginalni string, pocetni indeks i poslednji indeks.

const deoStringa1 = (string, pocetak, kraj) => {
  return string.slice(pocetak, kraj + 1);
};
console.log(deoStringa1("Hello, World", 7, 11));

const deoStringa = (string, pocetak, kraj) => {
  return string.substr(pocetak, kraj + 1 - pocetak);
};
console.log(deoStringa("Hello, World", 7, 11));
