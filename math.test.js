const fibonacci = require('./math');

test('El fibonacci de 4 debe ser 3', ()=>{
    expect(fibonacci(4).toBe(3));
});

test('El factorial de 5 debe ser 120', () => {
  expect(factorial(5)).toBe(120); 
});