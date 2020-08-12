import ArrayFunc from "./arrayModule.js";
import {ispisi} from "./DOMModule.js";

let pokemon1 = {
    ime: "Pikacu", 
    vrsta: "elektricni", 
    sposobnosti: ["Statički eektricitet", "Munje", "Gromovi"],
    karakteristike: {
                    napad: 55,
                    odbrana: 30, 
                    brzina: 90
    },
    opis: "Pikacu je elektricni pokemon zute boje."
}


let pokemon2 = {
    ime: "Bulbasaur",
    vrsta: "Otrovni",
    sposobnosti: ["Bujanje", "Hlorofil"],
    karakteristike: {
                    napad: 65, 
                    odbrana: 40,
                    brzina: 72
    },
    opis: "Bulbasaur je jedan od najpoznatijih pokemona na svetu."
}

let pokemon3 = {
    ime: "Skvirtl", 
    vrsta: "Vodeni",
    sposobnosti: ["Vodeni mladz", "Torpedo", "Kisa"],
    karakteristike: {
                    napad: 40,
                    odbrana: 60,
                    brzina: 65
    },
    opis: "Skvirtl je miljenik publike. Vodeni pokemon."
}

let pokemon4 = {
    ime: "Abra",
    vrsta: "Telepatski",
    sposobnosti: ["Sinhronizacija", "Unutrasnji fokus", "Magicni stit"],
    karakteristike: {
                    napad: 20,
                    odbrana: 30, 
                    brzina: 0
    }, 
    opis: "Abra ima snazne telepatske sposobnosti."
}

let pokemon5 = {
    ime: "Dragonajt",
    vrsta: "Vatreni",
    sposobnosti: ["Bljuvanje vatre", "Uragan"],
    karakteristike: {
                    napad: 70,
                    odbrana: 40, 
                    brzina: 90
    },
    opis: "Dragonajt je snazan vatreni pokemon."
}

let pokemon6 = {
    ime: "Ivi",
    vrsta: "Normalni",
    sposobnosti: ["Bezanje", "Adaptacija", "Anticipacija"],
    karakteristike: {
                    napad: 65,
                    odbrana: 50, 
                    brzina: 40
    }, 
    opis: "Ivi moze da evoluira i tri razlicita pokemona."
}

var pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];

const prikazDugme = document.getElementById("prikaz");
const pobednikDugme = document.getElementById("pobednik");


console.log(ArrayFunc.getAbilities(pokemoni));
console.log(ArrayFunc.sortBySpeed(pokemoni));
console.log(ArrayFunc.strongestPokemon(pokemoni));



prikazDugme.addEventListener("click", (e) => {
   ispisi(pokemoni);
});



pobednikDugme.addEventListener("click", (e) => {
   let najjaci = [ArrayFunc.strongestPokemon(pokemoni)];
   ispisi(najjaci);
});