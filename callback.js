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

let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let promesas = ids.map(id => obtenerPokemon(id))

Promise.all(promesas)
    .then(poke => console.log(poke))
    .catch(onError)




// obtenerPokemon(1)
//     .then(function(poke) {
//         console.log(`Hola soy el pokemon ${poke.name}`);
//         return obtenerPokemon(2)
//     })
//     .then(function(poke) {
//         console.log(`Hola soy el pokemon ${poke.name}`);
//         return obtenerPokemon(3)
//     })
//     .then(function(poke) {
//         console.log(`Hola soy el pokemon ${poke.name}`);
//         debugger
//         return obtenerPokemon(4)
//     })
//     .then(function(poke) {
//         console.log(`Hola soy el pokemon ${poke.name}`);
//         return obtenerPokemon(5)
//     })
//     .then(function(poke) {
//         console.log(`Hola soy el pokemon ${poke.name}`);
//         // return obtenerPokemon()
//     })
//     .catch(onError)