// includes() metoda vraca boolean(true ili false) u zavisnosti od toga da li se argument nalazi u stringu na kojem se primenjuje metoda ili ne
// Opciono, drugi argument predstavlja poziciju od koje cemo traziti dati argument u stringu

const recenica = "Dobar dan!";
console.log(recenica.includes("vece"));
console.log(recenica.includes("dan"));

const recenica2 = "Na koliko ste casova bili danas u skoli?";

// match() metoda vraca niz u zavisnosti od toga u kom obliku smo poslali argument dobijamo razlicite nizove

console.log(recenica2.match("a")); //niz sa informacijama vezane za argument i string
console.log(recenica2.match(/a/g)); //niz sa elementima iste vrednosti( ima ih onoliko koliko se argument pojavljuje puta u stringu)
console.log(recenica2.match(/adf/g)); //Ako posaljemo argument koji se ne nalazi u stringu, dobijamo null.

console.log("ko osvaja rec koju trazimo".match(/ko osvaja/g));

const zadatak = (recenica) => {
  if (!recenica.match(/ko osvaja/g)) {
    return "Nismo pronasli dati string";
  } else if (recenica.match(/ko osvaja/g).length === 1) {
    return recenica.indexOf("ko osvaja");
  } else {
    return `Pozicija prvog pojavljivanja: ${recenica.indexOf(
      "ko osvaja"
    )} \n Pozicija poslednjeg pojavljivanja: ${recenica.lastIndexOf(
      "ko osvaja"
    )}.`;
  }
};
console.log(zadatak("ko osvaja ligu sampiona "));
console.log(zadatak("Ko osvaja ligu sampiona "));
console.log(zadatak("Ko osvaja ligu sampiona? ko osvaja ko osvaja"));
