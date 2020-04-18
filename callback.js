// const API_URL = 'https://pokeapi.co/api/v2/'
// const pokemon_url = 'pokemon/:id/'

// const character_url = `${API_URL}${pokemon_url.replace(':id', 2)}`
// const opts = { crossDomain: true } // le indica a Jquery que el request se realiza a otra página

// const onPokeResponse = function(pokemon) {
//     console.log(`Hola mi nombre es ${pokemon.name}`);
// }


// $.get(character_url, opts, onPokeResponse)


const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_URL = 'pokemon/:id/'

const opts = { crossDomain: true }

const onPokeResponse = function(pokemon) {
    console.log(`Hola mi nombre es ${pokemon.name}`);
}


$.get(`${API_URL}${POKE_URL.replace(':id',1)}`, opts, onPokeResponse)