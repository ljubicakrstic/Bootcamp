// 1. Napraviti onjekte pokemone i niz objekata; 

let pokemon1 = {
    ime: "Pikacu", 
    vrsta: "elektricni", 
    sposobnosti: ["Statički eektricitet", "Munje", "Gromovi"],
    karakteristike: {
                    napad: 55,
                    odbrana: 30, 
                    brzina: 90
    }
}


let pokemon2 = {
    ime: "Bulbasaur",
    vrsta: "Otrovni",
    sposobnosti: ["Bujanje", "Hlorofil"],
    karakteristike: {
                    napad: 65, 
                    odbrana: 40,
                    brzina: 72
    }
}

let pokemon3 = {
    ime: "Skvirtl", 
    vrsta: "Vodeni",
    sposobnosti: ["Vodeni mladz", "Torpedo", "Kisa"],
    karakteristike: {
                    napad: 40,
                    odbrana: 60,
                    brzina: 65
    }
}

let pokemon4 = {
    ime: "Abra",
    vrsta: "Telepatski",
    sposobnosti: ["Sinhronizacija", "Unutrasnji fokus", "Magicni stit"],
    karakteristike: {
                    napad: 20,
                    odbrana: 30, 
                    brzina: 0
    }
}

let pokemon5 = {
    ime: "Dragonajt",
    vrsta: "Vatreni",
    sposobnosti: ["Bljuvanje vatre", "Uragan"],
    karakteristike: {
                    napad: 70,
                    odbrana: 40, 
                    brzina: 90
    }
}

let pokemon6 = {
    ime: "Ivi",
    vrsta: "Normalni",
    sposobnosti: ["Bezanje", "Adaptacija", "Anticipacija"],
    karakteristike: {
                    napad: 65,
                    odbrana: 50, 
                    brzina: 40
    }
}

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];


// 2. Napraviti f-ju koja prima gornji niz i vraca niz sposobnosti svih pokemona;
function vratiSposobnosti(pokemoni){
    return pokemoni.map(pokemon =>pokemon.sposobnosti).flat();
}

console.log(vratiSposobnosti(pokemoni));


// 3. Sortirati pokemone po brzini, rastuce;
{
    pokemoni.sort((a, b) => b.karakteristike.brzina - a.karakteristike.brzina);
    console.log(pokemoni);
}

