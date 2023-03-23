console.log("Prvi cas javascript");
console.log("Nova poruka");

text = document.getElementById("paragraf");
console.log(text);

text.innerHTML = "Da li se vidi paragraf";

//TIPOVI PODATAKA//

//Postoje :
// 1. primitivni (vrednosni) tipovi podataka i
// 2. neprimitivni (referentni)

//Za proveru tipa odredjenje promenljive (varijable) se koristi typeof operator.

//PRIMITIVNI (VREDNOSNI) TIPOVI PODATAKA:
//1.string - promenljiva koja je zapisana unutar navodnika (obicnih ili duplih)

console.log("neki string");
console.log(typeof "neki string");

//2.number - brojevi mogu biti zapisani sa ili bez decimalnog zareza (".")

console.log(56);

//3.BigInt - brojevi koji su iznad ogranicenja za number tip podatka.

console.log(BigInt(1191238491023891029384573478301923849));

//4.boolean - logicki entitet koji ima dve vrednosti: TRUE i FALSE

console.log(true);
console.log(typeof true);

//5.undefined - Promenljiva koja je definisana u memoriji ali joj nije dodeljena vrednost, ima:
//tip: underfined i vrednost: underfined.

var a;
console.log(a);
console.log(typeof a);

//6.null - Nepostojeca ili nekoretna promenljiva ima vrednost null.
//tip promenljive cija je vrednost null u JavaScript je object.

b = null;
console.log(b);
console.log(typeof b);

//7.Symbol - Koristi se za promenljive koje su anonimne ili jedinstvene.

c = Symbol("IT CAMP");
console.log(c);
console.log(typeof c);

//Svi tipovi podataka koji nisu primitivni su tipa object.
//Promenljive koje mogu sadrzati vise vrednosti su referentnog tipa (neprimitivnog) tipa.

//1.Array(niz) - Strukturaa podataka za skladistenje vise vrednosti (te vrednosti mogu biti razlicitih vrednosti)

niz = ["Emir", 21, true];
console.log(niz);

//2.Object - -//- te vrednosti su prikazane u key:value (name:value) paru.

obj = {
  ime: "Emir",
  prezime: "Marukic",
  punoletan: true,
};
console.log(obj);
console.log(typeof obj);
