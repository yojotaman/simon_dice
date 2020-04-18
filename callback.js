const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_URL = 'pokemon/:id/'
const opts = { crossDomain: true }

// function obtenerPokemon(id, callback) {

//     const url = `${API_URL}${POKE_URL.replace(':id',id)}`
//     $
//         .get(url, opts, callback)
//         .fail(function() {
//             console.log(`Ha ocurrido un error de conexión, no fue posible obtener el pokemon con id: ${id}`);
//         })
// }

// obtenerPokemon(1, function(pokemon) {
//     console.log(`Hola, mi nombre es ${pokemon.name}`);
// })


function obtenerPokemon(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${POKE_URL.replace(':id',id)}`
        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })

}

function onError(id) {
    console.log(`Error obteniendo el id ${id}`);
}

obtenerPokemon(1)
    .then(function(poke) {
        console.log(`Hola soy el pokemon  ${poke.name}`);
    })
    .catch(onError)