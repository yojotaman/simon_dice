const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_URL = 'pokemon/:id/'
const opts = { crossDomain: true }

function obtenerPokemon(id, callback) {
    const url = `${API_URL}${POKE_URL.replace(':id',id)}`
    $.get(url, opts, function(pokemon) {
        console.log(`Hola, mi nombre es ${pokemon.name}`);
    })
    if (callback) {
        callback()
    }
}

obtenerPokemon(1, function() {
    obtenerPokemon(2, function() {
        obtenerPokemon(3, function() {
            obtenerPokemon(4, function() {
                obtenerPokemon(5)
            })
        })
    })
})