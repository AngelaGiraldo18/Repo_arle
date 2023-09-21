function convertirNumero(cadena) {
    try {
        const numero = parseFloat(cadena);
        if (isNaN(numero)) {
            throw new Error('la cadena no es numero valido')
        }
        return numero
    } catch (error) {
        console.error('Error'+ error.message);
        return null
    }
}

const cadenaNUmero = "12";
const numeroConvertido = convertirNumero(cadenaNUmero);

if (numeroConvertido !== null) {
    console.log('NUmero voncertido',numeroConvertido);
}else{
    console.log('No se pudo convertir la cadena a número');
}