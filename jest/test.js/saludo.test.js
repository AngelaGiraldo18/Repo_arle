const saludo = require('../funciones jest/saludo.js');

test('saludar',()=>{
    const hola = 'hola mundo';
    expect(saludo(hola)).toBe('hola mundo')
})