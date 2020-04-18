const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_URL = 'pokemon/:id/'
const opts = { crossDomain: true }

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

async function obtenerPokemones() {
    let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let promesas = ids.map(id => obtenerPokemon(id))

    try {
        let pokemones = await Promise.all(promesas)
        console.log(pokemones);
    } catch (id) {
        onError(id)
    }
}

obtenerPokemones()