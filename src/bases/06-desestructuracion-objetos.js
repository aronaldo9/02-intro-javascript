/* eslint-disable react-hooks/rules-of-hooks */


// Desestructuración

const persona = {
    nombre: 'Aarón',
    edad: 43,
    clave: 'Batman'
};


// console.log( nombre );
// console.log(edad);
// console.log(clave);

const useContext = ( { nombre, edad, clave, rango = 'Caballero Oscuro' }) => {
    
    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { nombreClave, años, latlng: { lat, lng } } = useContext ( persona );

console.log(nombreClave, años);
console.log( lat, lng );