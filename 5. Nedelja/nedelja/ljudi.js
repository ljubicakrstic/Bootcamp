class Covek{
    constructor(ime, prezime, godRodjenja){
        this.ime = ime;
        this.prezime = prezime;
        this.godRodjenja = godRodjenja;
    }
}
let pera = new Covek("Pera", "peric", 1984);
console.log(pera);


class Student extends Covek{
    constructor(ime, prezime, godRodjenja, godStudija, prosek){
        super(ime, prezime, godRodjenja);
        this.godStudija = godStudija;
        this.prosek = prosek;
    }
}
let zika = new Student("Zika", "Zikic", 1991, 3, 8.5);
console.log(zika);


class StudentOS extends Student{
    constructor(ime, prezime, godRodjenja, godStudija, prosek, smer){
        super(ime, prezime, godRodjenja, godStudija, prosek);
        this.smer = smer;
    }
}
let boba = new StudentOS("Boba", "Bobic", 1992, 2, 7.4, "Ekologija");
console.log(boba);


class StudentMS extends Student{
    constructor(ime, prezime, godRodjenja, godStudija, prosek, smer){
        super(ime, prezime, godRodjenja, godStudija, prosek);
        this.smer = smer;
    }
}
let marko = new StudentMS("Marko", "Nikolic", 1995, 1, 8.2, "Masinstvo");
console.log(marko);


class Zaposleni extends Covek{
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata){
        super(ime, prezime, godRodjenja);
        this.godZaposlenja = godZaposlenja;
        this.plata = plata;
    }
}
let mira = new Zaposleni("Mira", "Pavlovic", 1965, 2012, 60000);
console.log(mira);


class Nastavnik extends Zaposleni{
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, sviPredmeti){
        super(ime, prezime, godRodjenja, godZaposlenja, plata);
        this.omiljeniPredmet = omiljeniPredmet;
        this.sviPredmeti = sviPredmeti;
    }
}
let zoran = new Nastavnik("Zoran", "Krstic", 1954, 2005, 80000, "Molekularna biologija", ["Matematika", "Zastita zivotne sredine", "Uvod u ekonomiju"]);
console.log(zoran);


class Profesor extends Nastavnik{
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, sviPredmeti, titula){
        super(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, sviPredmeti);
        this.titula = titula;
    }
}
let marijana = new Profesor("Marijana", "Ilic", 1983, 2018, 90000, "Statistika", ["Sociologija", "Informatika", "Matematika", "Biologija"], "redovni");
console.log(marijana);


class Asistent extends Nastavnik{
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, sviPredmeti, smer){
        super(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, sviPredmeti);
        this.smer = smer;
    }
}
let ljubica = new Asistent("Ljubica", "Krstic", 1991, 2019, 70000, "Matematika", ["Sociologija", "Informatika", "Matematika", "Biologija"], "Opsti");
console.log(ljubica);


class Sluzbenik extends Zaposleni{
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata, odsek){
        super(ime, prezime, godRodjenja, godZaposlenja, plata);
        this.odsek = odsek;
    }
}
let snezana = new Sluzbenik("Snezana", "Marjanovic", 1965, 2001, 50000, "Opsti");
console.log(snezana);