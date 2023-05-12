//Trazi da se unese username sve dok ne unese 6 karaktera

let username = "";
while (username.length < 6) {
  username = prompt("Unesite ispravan username");
}

//DRY

//Funkcije prestavljaju deo koda koji ce se izvrsavati samo u slucaju njihovog pozivanja. Koristimo ih da bi nas
// kod bio reusable(isti kod resava vise problema slicnog tipa)

// Funkciju mozemo napraviti na dva nacina:
// 1. Preko function keyword;
function myFunc() {
  //kod unutar funkcije
}

// 2. Arrow function
const myFunc2 = () => {
  // kod unutar funkcije
};

// funkcija ispisuje zdravo
function greeting() {
  console.log("zdravo");
}
greeting();

// Prilikom definisanja funckije mozemo joj proslediti parametre koji su neophodni za izvrsavanje koda date funkcije.
// Dok prilikom pozivanja funkcije to sto saljemo funkciji se zove argumenti.
function greeting2(ime) {
  console.log("zdravo " + ime);
}
greeting2("Tarike");

// Napraviti funkciju koja nam vraca zbir 3 i 5.
function zbirTriIPet() {
  const prom1 = 3;
  const prom2 = 5;

  //   kada se izvrsi cela logika funkcije, krajnji rezultat treba vratiti u return keyword(rezervisanoj reci)
  return prom1 + prom2;
  //   kod koji se nadje nakon se nece primeniti
}

// Napraviti funkciju koja sabira bilo koja dva broja
