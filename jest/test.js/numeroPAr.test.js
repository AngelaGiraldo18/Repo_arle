const esNumeroPar = require('../funciones jest/numeroPar');

test('esNumeroPar devuelve true para números pares', () => {
    const numeroPar = 4;

    const resultado = esNumeroPar(numeroPar);
  
    expect(resultado).toBe(true);
  });
  
  test('esNumeroPar devuelve false para números impares', () => {
    const numeroImpar = 3;
  
    const resultado = esNumeroPar(numeroImpar);
  
    expect(resultado).toBe(false);
  });