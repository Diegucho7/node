
// import httpClientPlugin from '../plugins';

import { httpClientPlugin } from "../plugins/http-client.plugin";


export const getPokemonById = async(id: string|number): Promise<string> => {
    
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemon = await httpClientPlugin.get(URL);

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
