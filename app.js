
// const {emailTemplate} = require ('./src/js-fundation/01-tempate.js');
// require ('./src/js-fundation/02-destructuring.js')
// const { getUserById } = require ('./src/js-fundation/03-callback.js')
const {buildMakePerson} = require('./src/js-fundation/05-factory');
const { getUUID, getAge } = require('../02-node/src/plugins');



const makePerson = buildMakePerson({getUUID, getAge});
const obj = {name: 'Diego', birthdate: '1993-08-15'};

const jonh = makePerson(obj);
console.log(jonh)