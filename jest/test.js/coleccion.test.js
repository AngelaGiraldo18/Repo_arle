const coleccion = require('../funciones jest/triangulo');

test('la lista tiene string y numeros',()=>{
    expect(coleccion(12,'juan',23,'loco'));
})