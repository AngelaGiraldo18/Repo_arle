const dividir = require('../funciones jest/dividir.js');

test('la divicion 78 dividido 5 es igual',()=>{
    expect(dividir(75,5)).toBe(15);
})