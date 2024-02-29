/* eslint-disable react-hooks/rules-of-hooks */

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArray = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArray();
console.log(letras, numeros);


// Tarea 
// 1. el primer valor del arr se llamará nombre
// 2. el segundo valor se llamará setNombre
const useState = (valor) => {
    return [ valor, ()=>{ console.log('Hola Mundo')} ];
}

const [nombre, setNombre] = useState( 'Goku');

console.log( nombre );
setNombre();