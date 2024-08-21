
// const {getUUID, getAge } = require('../plugins')

const buildMakePerson = ({getUUID, getAge}) => {

    return ({name, birthdate}) => {
    
    return {
        id: getUUID(),
        name,
        birthdate,
        age: getAge(birthdate)  
    }
}
}

// const BuildPerson = ({name, birthdate}) => {
// }

// const obj = {name: 'Diego', birthdate: '1993-08-15'};

// const jonh = BuildPerson(obj);

// console.log(jonh)

module.exports = {
    buildMakePerson
}