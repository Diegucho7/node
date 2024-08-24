
const {http} = require  ('../plugins')

const getPokemonById = async(id) => {
    
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemon = await http.get(URL);

    return pokemon.name;
    // const resp = await fetch(URL);
    // const pokemon = await resp.json();

    // throw new Error('Pokemon no encontrado');
    
    // return pokemon.name;

    // return fetch(URL)
    // .then((resp) => resp.json())
    // .then((pokemon) => pokemon.name
    // .then(()=>{throw new Error('Pokemon no encontrado')})

    // )
    // ;

}

module.exports = {
    getPokemonById
}