const mostrarError = (e) => {
//Nos va mostrar un objeto relacionado con este error.
console.log('Error', e.error);
//Nos va mostrar en un linea de caracteres, un mensaje del error que esta ocurriendo.
console.log('Mensaje',e.message);
//Nos va entregar un valor numero que corresponde a la linea donde se a ejecuado un error dentro del documento.
console.log('linea', e.lineno);
//Nos va entregar el numero de la columna donde comienza la culumna donde ocurre un error.
console.log('Columna', e.colno);
//Nos entrega la Url del archivo donde a ocurrido un error.
console.log('Url',filename);
}

addEventListener('error', mostrarError);

mifuncion();