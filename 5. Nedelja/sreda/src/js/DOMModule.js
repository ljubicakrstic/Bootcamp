    const container = document.createElement("div");
    container.className = "grid-container";


export function ispisi(nizPokemona){
    container.innerHTML = "";
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
        const wrapper = document.querySelector(".wrapper");
        wrapper.appendChild(container);
    });
 }