//Za ekstratovanje (uzimanje jednog karaktera) mozemo iskoristiti jedan od 3 nacina:

// charAt(indeks) metoda uzima jedan argument(indeks) i vraca nam karakter koji zauzima tu poziciju
// charCodeAt(indeks) metoda uzima jedan argument(indeks) i vraca nam karakter koji zauzima tu poziciju
// string[indeks] nacin pristupa nekom karakteru iz string

let recenica = "Recenica za uzimanje karaktera.";

console.log(recenica.charAt(4));
console.log(recenica.charCodeAt(4));
console.log(recenica[4]);

console.log(recenica.charAt(100)); //rezultat karaktera koji ne postoji daje prazan string
console.log(recenica[100]); //rezultat karaktera koji ne postoji daje undefined

//Za ekstratovanje (uzimanje nekoliko karaktera) mozemo iskoristiti jednu od 3 metode:

//slice() metoda nam vraca deo strinda. Ona ima dva argumenta , prvi je pocetni indeks za uzimanje isecka,
// a drugi argument je indeks do kojeg idemo. Drugi argument se NE UKLJUCUJE
//drugi argument nije obavezan ako ga izostavimo, dobicemo string od prvog argumenta do kraja.
//omogucava koriscenje negativnih indeksa

console.log(recenica.slice(12, 20));

//substring() metoda nam vraca deo strinda. Ona ima dva argumenta , prvi je pocetni indeks za uzimanje isecka,
// a drugi argument je indeks do kojeg idemo. Drugi argument se NE UKLJUCUJE
//drugi argument nije obavezan ako ga izostavimo, dobicemo string od prvog argumenta do kraja.
//NE PODRZAVA koriscenje negativnih indeksa

//substr() metoda nam vraca deo strinda. Ona ima dva argumenta , prvi je pocetni indeks za uzimanje isecka,
// a drugi argument je duzina tog isecka.

console.log(recenica.substr(3, 10));

//split() metoda nam koristi da neki string pretvorimo u string od jednog ili vise elemenata
// Ako split() metodu primenimo na neki string bez da jpj posaljemo neki string dobicemo neki niz od samo jednog
//elemnta(cela recenica je taj elemnt)
console.log(recenica.split());

//slanje nekog argumenta predstavlja karakter gde  ce se deliti elementi niza.
console.log(recenica.split(" ")); //svaka rec predstavlja jedan element niza

console.log(recenica.split("")); //Svaki karakter predstavlja jedan element niza

console.log(recenica.split("*")); //dobili smo niz od jednog elementa (cela recenica)

//Zadatak

// Napisi funkciju koja prima jedan string kao argument i vraca broj karaktera u najduzoj reci u tom stringu.
// Pretpostavi da su reci odvojene samo jednim razmakom.
// Npr. za ulazni string "Danas je divan dan" funkcija treba da vrati broj 5

function najduzarec(string) {
  const nizReci = string.split(" ");

  let najduzarec = nizReci[0];
  for (let i = 0; i < nizReci.length; i++) {
    if (nizReci[i].length > najduzarec.length) {
      najduzarec = nizReci[i];
    }
  }

  return najduzarec;
}
console.log(najduzarec(recenica));
