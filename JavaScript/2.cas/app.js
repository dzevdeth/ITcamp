//Neku poruku u JavaScriptu mozemo prikazati na vise nacina:

// 1. innterHTML
naslov = document.getElementById("naslov");
naslov.innerHTML = "Prvi nacin ispisa";

// 2. document.write - obicno se koristi za testirsnje koda.

// 3. Alert() - upozorenju korisniku

// alert("Jos jedan nacin ispisa");

// 4. console.log() - Prikazivanje nekih informacija u konzoli. Naajcesce koriscen medot

console.log("poruka u konzoli");

// JavaScript nazivi promenljivih //

// Ime promenjive u Javi mora poceti:

//1. Velika ili mala slova (A-Z a-z)
//2. $(dolar sign)
//3. _(donja crta)

//Broj moze biti sadrzan u nazivu promenljive, ali promenljiva ne sme poceti brojem.

//Java je case sensitive (razlikuje velika i mala slova)

//Zapisivanje promenljivih koji sadrze 2 ili vise reci:

vecernji_termin = 19.3; //Ispravan nacin - Underscore
VecernjiTermin = 19.3; //Upper Camel Case (Pascal Case)
vecernjiTermin = 19.3; //Lowe Camel case

//deklaracija i inicijalizacija
//Postoje 4 nacina za deklarisanje promenljive u JavaScriptu:

// 1. Koriscenjem var rezervisane reci (keyword)

var a; //deklarisanje promenljive (obezbedjivanje lokacijske memorije za promenljivu a)
a = 10; //inicijalizacija promenjive (dodeljivanje vrednosti vec deklarisanmoj promenljivoj a)

var a = 10;

// 2. Koriscenjem let rezervisane reci (keyword). Promenljive koje su sklone menjanju vrednosti.

// let b;
// b = 14;

let b = 14;
console.log(b);

// 3.Koriscenjem const rezervisane reci (keyword). Na ovaj nacin deklarisemo promenljive cija se vrednost nece menjati.

//Nije moguce posebna deklaracija i inicijalizacija za promeljive definisane preko const keyword.
// const c;
// c = 20;

//Neophodno je odjednom izvrsiti deklaraciju i inicijalizaciju:
const c = 20;
console.log(c);

// 4.Koriscenjem nicega.
d = 5;
console.log(5);

//Varijable (promenljive) u JavaScriptu predstavlja kontejnere za skladistenje vrednosti.
