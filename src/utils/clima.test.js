const { toCelsius, toFahrenheit, movingAverage } = require ('./clima');

describe('Clima y Conversion', () => {

    //1. Funcion toCelsius(f)
    describe('toCelsius', () => {
        test('Debe convertir 32°F a 0.0°C', () => {
            expect(toCelsius(32)).toBe(0.0);
        });

        test('Debe convertir -40°F a -40.0°C', () => {
            expect(toCelsius(-40)).toBe(-40.0);
        });

        test('Debe redondearse a 1 decimal', () => {
            expect(toCelsius(98.6)).toBe(37.0);
        });

        test('Debe lanzar TypeError si el valor no es finito', () => {
            expect(() => toCelsius(NaN)).toThrow(TypeError);
            expect(() => toCelsius('abc')).toThrow(TypeError);
        });
    });

    //2. Funcion toFahrenheit(c)
    describe('toFahrenheit', () => {
        test('Debe convertir 0°C a 32.0°F', () => {
            expect(toFahrenheit(0)).toBe(32.0);
        });

        test('Debe convertir 100°C a 212.0°F', () => {
            expect(toFahrenheit(100)).toBe(212.0);
        });

        test('Debe convertir -40°C a -40.0°F', () => {
            expect(toFahrenheit(-40)).toBe(-40.0);
        });

        test('Debe redondearse a 1 decimal', () => {
            expect(toFahrenheit(37)).toBe(98.6);
        });

        test('Debe lanzar TypeError si el valor no es finito', () => {
            expect(() => toFahrenheit(NaN)).toThrow(TypeError);
            expect(() => toFahrenheit('abc')).toThrow(TypeError);
        });
    });

    //3. Funcion movingAverange(series, window)
    describe('movingAverage', () => {
        test('Debe calcular [10,20,30,40] con w=2 a [15.00, 25.00, 35.00]', () => {
            expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
        });

        test('Debe calcular [1,2,3] con w=3 a [2.00]', () => {
            expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
        });

        test('Debe lanzar TypeError si series no contiene numeros', () => {
            expect(() => movingAverage([1, 'abc', 3], 2)).toThrow(TypeError);
        });

        test('Debe lanzar RangeError si window < 2', () => {
            expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
        });

        test('Debe lanzar RangeError si window > series.length', () => {
            expect(() => movingAverage([1, 2, 3], 4)).toThrow(RangeError);
        });
    });
});
