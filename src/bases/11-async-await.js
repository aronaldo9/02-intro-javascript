

// const getImagenPromesa = () => {
//     const promesa = new Promise( ( resolve, reject) => {
//         resolve('https://agyevjhvhjmb.com')
//     })
//     return promesa;
// }

// getImagenPromesa().then( console.log);


// LO PODEMOS SIMPLIFICAR...
// const getImagenPromesa = () => {
//     return new Promise( ( resolve, reject) => {
//         resolve('https://agyevjhvhjmb.com')
//     })
// }

// getImagenPromesa().then( console.log);


// LO SIMPLIIFICAMOS AÚN MÁS
// const getImagenPromesa = () => new Promise(  resolve => 
//         resolve('https://agyevjhvhjmb.com') )


// getImagenPromesa().then( console.log);


// VAMOS A HACER LO MISMO PERO USANDO ASYNC
const getImagen = async () => {

    try {
        const apiKey = '7YOb3tHIVT5AgyGzjLcscQMtt259kxCY';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // manejo del error
        console.log(error)
    }


}

getImagen();

