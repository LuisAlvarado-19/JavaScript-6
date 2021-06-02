const valor = 10;
console.log('Hola Mundo', valor, valor*10);
// assert nos imprime un mensaje en caso de que una condicional sea falsa.
console.assert(valor < 10, 'fallo');
// Si por el contrario en vez de fallar si funciona, entonces no se imprime nada
console.assert(valor > 5, 'fallo');
// Por ultimo tenemos el metodo clear, que lo que hace es limpiar la consola.
console.clear();