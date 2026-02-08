const { factorial, fibonacci } = require('./math');

describe('Pruebas unitarias para funciones matemáticas', () => {
    
    // Tests para Factorial
    test('El factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('El factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('Debe retornar null al calcular negativos', () => {
        expect(factorial(-1)).toBeNull();
    });

    // Tests para Fibonacci
    test('Debe devolver el quinto número de Fibonacci (5)', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('El primer número de Fibonacci debe ser 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('Debe retornar null para números negativos en fibonacci', () => {
        expect(fibonacci(-5)).toBeNull();
    });
});

