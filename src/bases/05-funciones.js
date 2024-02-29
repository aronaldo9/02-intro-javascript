
// Funciones en JS
const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => 'Hola Mundo';

console.log( saludar );
console.log ( saludar2('Leo') );
console.log ( saludar3('Leo') );
console.log ( saludar4() );


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
})

// console.log( getUser() );
console.log( getUser2() );

const user = getUser();
console.log(user);


// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Aarón');
// console.log(usuarioActivo);

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre    
});

const usuarioActivo = getUsuarioActivo('Aarón');
console.log(usuarioActivo);