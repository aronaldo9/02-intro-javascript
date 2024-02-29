

const persona = {
    nombre: 'Leo',
    apellido: 'Pesqueira',
    edad: 5,
    direccion: {
        ciudad: 'Churriana de la Vega',
        cp: 18194,
        lat: 14.3232,
        lng: 34.923331,
    },
    };

// console.table( persona );

// const persona2 = persona;
// persona2.nombre = 'Bárbara';

// console.log(persona2);

// Esto no lo podemos hacer, porque si cambiamos el console.log de persona y lo ponemos al lado del console log de persona2, el nombre se cambiaría en las dos personas

// Lo que debemos hacer es lo siguiente...
const persona2 = { ...persona};
persona2.nombre = 'Bárbara';

console.log(persona);
console.log(persona2);