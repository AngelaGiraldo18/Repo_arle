const multiplicacion = require('../funciones jest/multiplicacion.js');

test('multiplicar 2 * 5 es igual a 10', () => {
  expect(multiplicacion(2, 5)).toBe(10);
});
