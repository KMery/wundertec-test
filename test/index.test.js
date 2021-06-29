var assert = require('assert');
const ej1 = require('../src/ejercicio1/index');
const ej2 = require('../src/ejercicio2/index');

describe('Implementa una función que determine si una cadena de texto dada esta formada por caracteres únicos, considera mayúsculas, minúsculas', () => {
    it('Control con string que posee caracteres únicos, debe devolver true', () => {
        result   =  ej1.hasUniqueCharacters('letras');
        assert.strictEqual(result, true);
    });

    it('Control con string que no posee caracteres únicos, debe devolver false', () => {
        result   = ej1.hasUniqueCharacters('letTras');
        assert.strictEqual(result, false);
    });

    it('Control con string que no posee caracteres, devuelve true', () => {
        result   = ej1.hasUniqueCharacters('');
        assert.strictEqual(result, true);
    });
});


describe('Escribe un programa que guarde en un array e imprima los números primos dentro de un rango', () => {
    it('Devuelve solo números primos en un rango dado', () => {
        result   =  ej2.primeNumbers(2, 7);
        assert.deepStrictEqual(result, [2, 3, 5, 7]);
    });

    it('Devuelve array vacio al colocar inicio y fin como uno', () => {
        result   =  ej2.primeNumbers(1, 1);
        assert.deepStrictEqual(result, []);
    });

    it('Devuelve array con un solo valor al colocar inicio y fin como un numero primo', () => {
        result   =  ej2.primeNumbers(2, 2);
        assert.deepStrictEqual(result, [2]);
    });
});