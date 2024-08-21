const user = [
    {id: 1, name: 'Diego'},
    {id: 2, name: 'Diego Velarde'},
    {id: 3, name: 'Frontend'},
    {id: 4, name: 'Developer'},
    {id: 5, name: 'Javascript'},

];


function getUserById( id,callback ) {
   const users = user.find((user) => {
        return user.id === id
    });

    if(!users){
       return callback(`Usuario con id ${id} no encontrado`, null);
    }
    return callback(null, users);
}

module.exports = {
    getUserById
}