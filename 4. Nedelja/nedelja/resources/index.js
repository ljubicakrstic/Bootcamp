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

// 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада

function najjaciPokemon(pokemoni){
    let najjaci =  pokemoni.slice().sort((a, b) => a.karakteristike.napad - b.karakteristike.napad).slice(-1)[0];
    return najjaci;
 }

 //console.log(najjaciPokemon(pokemoni));

 // 5. Prikaz svih pokemona i najjaceg pokemona;
 const container = document.createElement("div");
 container.className = "grid-container";

 function ispisi(nizPokemona){
    nizPokemona.forEach(pokemon => {
        const noviDiv = document.createElement("div");
        noviDiv.className = Object.keys({pokemon})[0];
        const opis = document.createElement("p");
        opis.innerText = pokemon.opis;
        const img = document.createElement("img");
        img.src = `./images/${pokemon.ime}.png`;

        noviDiv.appendChild(opis);
        noviDiv.appendChild(img);
        container.appendChild(noviDiv);
    });
 }


 const prikazDugme = document.getElementById("prikaz");
 prikazDugme.addEventListener("click", (e) => {
    container.innerHTML = "";
    ispisi(pokemoni);
    const wrapper = document.querySelector(".wrapper");
    wrapper.appendChild(container);
 });



const pobednikDugme = document.getElementById("pobednik");
pobednikDugme.addEventListener("click", (e) => {
    container.innerHTML = "";
    let nizNajjaci = [najjaciPokemon(pokemoni)];
    ispisi(nizNajjaci);
    const wrapper = document.querySelector(".wrapper");
    wrapper.appendChild(container);
});


