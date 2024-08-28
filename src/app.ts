
import { buildLogger } from "./plugins/logger.plugin";

import {getPokemonById} from "./js-fundation/06-promise";
// const {emailTemplate} = require ('./src/js-fundation/01-tempate.js');
// require ('./src/js-fundation/02-destructuring.js')
// const { getUserById } = require ('./src/js-fundation/03-callback.js')
// const {buildMakePerson} = require('./src/js-fundation/05-factory');
// const { getUUID, getAge } = require('../02-node/src/plugins');
// const { buildLogger } = require('./src/plugins');

getPokemonById
 
const logger = buildLogger('app.js');
 
logger.log("Hola Mundo");
logger.error("Esto es algo malo");
// clase 6 inicio

getPokemonById(4).then((pokemon:string) =>console.log({pokemon}))
//  const info =  getPokemonById(25).then((pokemon:string) =>console.log({pokemon}))
                                // .catch((err:    string) => console.log({err}))
                                // .finally(() => console.log('Finalizo'))
// fin clase 6 
// export const info = 'Hola Mundo'

// console.log({info});


//  console.log({info})
//  setTimeout(()=>{
//     console.log({info});

//  },3000)
// const makePerson = buildMakePerson({getUUID, getAge});
// const obj = {name: 'Diego', birthdate: '1993-08-15'};

// const jonh = makePerson(obj);
// console.log(jonh)

//Token de Acceso
//Public