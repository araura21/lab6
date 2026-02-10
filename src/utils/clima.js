//Clima & Conversion

//1. toCelsius(f)
const toCelsius = (f) => {
    if (!Number.isFinite(f)) {
        throw new TypeError('El numero (f) debe ser finito');
    }

    let formula = ((f - 32) * 5 / 9);
    
    return Math.round(formula * 10) / 10;
};


//2. toFahrenheit(c)
const toFahrenheit = (c) => {
    if (!Number.isFinite(c)) {
        throw new TypeError('El numero (c) debe ser finito');
    }

    let formula = (c * 9 / 5) + 32;

    return Math.round(formula * 10) / 10;
};

//3. movingAverage(series, window)
//serie: series = [x1,x2,...]
//ventana: w = entero >=2 y <=series.length

const movingAverage = (series, window) => {

    // Validar series
    if (!Array.isArray(series) || series.length === 0) {
        throw new TypeError('series debe ser un array no vacío');
    }
    if (!series.every(Number.isFinite)) {
        throw new TypeError('series debe contener solo números finitos');
    }

    // Validar window
    if (!Number.isInteger(window)) {
        throw new TypeError('window debe ser un número entero');
    }
    if (window < 2 || window > series.length) {
        throw new RangeError(`window debe ser mayor o igual 2 y menor o igual a ${series.length}`);
    }

    const resultado = [];

    for (let i = 0; i <= series.length - window; i++) {
        let suma = 0;
        for (let j = i; j < i + window; j++) {
            suma = suma + series[j];
        }

        let promedio = suma / window;
        promedio = Math.round(promedio * 100) / 100;
        resultado.push(promedio);
    }

    return resultado;
};

module.exports= { toCelsius, toFahrenheit, movingAverage };