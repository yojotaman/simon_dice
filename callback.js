const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_URL = 'pokemon/:id/'
const opts = { crossDomain: true }

function obtenerPokemon(id, callback) {
    const url = `${API_URL}${POKE_URL.replace(':id',id)}`
    $
        .get(url, opts, callback)
        .fail(function() {
            console.log(`Ha ocurrido un error de conexión, no fue posible obtener el pokemon con id: ${id}`);
        })
}

obtenerPokemon(1, function(pokemon) {
    console.log(`Hola, mi nombre es ${pokemon.name}`);

    obtenerPokemon(2, function(pokemon) {

        console.log(`Hola, mi nombre es ${pokemon.name}`);
        debugger

        obtenerPokemon(3, function(pokemon) {
            console.log(`Hola, mi nombre es ${pokemon.name}`);

            obtenerPokemon(4, function(pokemon) {
                console.log(`Hola, mi nombre es ${pokemon.name}`);

                obtenerPokemon(5, function(pokemon) {
                    console.log(`Hola, mi nombre es ${pokemon.name}`);
                })
            })
        })
    })
})