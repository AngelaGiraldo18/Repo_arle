
const {suma, sub, mul, div} = require ( '../funciones jest/math.js' ); 

describe ( 'conjunto de operaciones aritméticas' , () => { 
  
  test ( 'suma de números' , () => { 
    expect( suma ( 1 , 1 )). toBe ( 2 ); 
  }); 

  test ( 'resta de numeros' , () => { 
    expect( sub ( 1 , 1 )). toBe ( 0); 
  }); 

  test ( 'multiplicar números' , () => { 
    expect( mul ( 1 , 1 )). toBe ( 1 ); 
  }); 

  test ( 'dividir números' , () => { 
    expect( div ( 1 , 1 )). toBe ( 1 ); 
  }); 

});