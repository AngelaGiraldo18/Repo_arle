const resta = require('../funciones jest/resta.js');

test('la resta de 5 - 1 es igual a 4',()=>{
    expect(resta(5,1)).toBe(4)
})