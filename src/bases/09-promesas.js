

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( ( ) => {
//         // Tarea
//         // importen el
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject( 'No se pudo encontrar el héroe');
//     }, 2000 )
// });

import { getHeroeById } from "./08-imports-exports.js";



// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ));


const getHeroebyIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const heroe = getHeroeById(id);
            if(heroe) {
                resolve( heroe);
            } else {
                reject( 'No se pudo encontrar el héroe'); 
            } 
            // reject( 'No se pudo encontrar el héroe');
        }, 2000)
    });
}

getHeroebyIdAsync(1)
    .then (console.log)
    .catch(console.warn);
