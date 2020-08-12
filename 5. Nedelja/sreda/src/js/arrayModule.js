function getAbilities(pokemoni){
    return pokemoni.map(pokemon =>pokemon.sposobnosti).flat();
}

function sortBySpeed(pokemoni){
    return pokemoni.sort((a, b) => a.karakteristike.brzina - b.karakteristike.brzina).map(pokemon => pokemon.ime);
}

function strongestPokemon(pokemoni){
    return pokemoni.slice().sort((a, b) => a.karakteristike.napad - b.karakteristike.napad).slice(-1)[0];
 }

 export default {getAbilities, sortBySpeed, strongestPokemon};