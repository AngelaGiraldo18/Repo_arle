function calcularAreaCirculo(radio) {
    const area = Math.PI * radio * radio;
    console.log("Área calculada: " + area); // Agregar esta línea
    return area;
}

const radio = 5;
const areaCirculo= calcularAreaCirculo(radio);
console.log('El área del círculo es: '+ areaCirculo);