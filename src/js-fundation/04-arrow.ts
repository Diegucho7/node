interface User{
    id: number;
    name: string
}


const user:User[] = [
    {id: 1, name: 'Diego'},
    {id: 2, name: 'Diego Velarde'},
    {id: 3, name: 'Frontend'},
    {id: 4, name: 'Developer'},
    {id: 5, name: 'Javascript'},

];


export const getUserById = ( id:number,callback: (err?:string, user?:User) => void ) =>{
   const users = user.find( users =>{
        return users.id === id
   }

)

    if(!users){
       return callback(`Usuario con id ${id} no encontrado`, undefined);
    }
    return callback(undefined, users);
}

