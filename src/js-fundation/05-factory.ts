import { getUUID } from '../plugins/get-id.plugin';

interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOtions {
    name: string;
    birthdate: string;
}
export const buildMakePerson = ( {getUUID, getAge}: BuildMakePersonOptions) => {

    return ({name, birthdate}:PersonOtions) => {
    
    return {
        id: getUUID(),
        name,
        birthdate,
        age: getAge(birthdate)  
    }
}
}



