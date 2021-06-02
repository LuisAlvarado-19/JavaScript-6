const vender = (cantidad, existencia) =>{
    if (cantidad > existencia){
        const error = {
            name:'Error existencia',
            massage:'La cantidad solicitada excede la existencia'
        }
    // throw es similar a return, con la diferencia que se utiliza para regresar valor y ser interpretados como error.
    throw error;
    }else{
        existencia -= cantidad;
        return existencia;
    }
}

// Try y catch van fuera de todo las llaves o corchetes.
// Dentro de try vamos a colocar la funcion o funciones que vamos a intentar ejecutar
try{
 // Le voy a pasar que quiero los elementos de x existencia en este caso 10.
//  Luego o antes lo guardo en otra variable en este caso existenciaTotal.
    const existenciaTotal = vender(15, 10);
// Por ultimo imprimo la variable
    console.log(existenciaTotal);
}
// si la condicion anterior me muestra un error y lo que deseo con catch es atrapar el error para despues procesarlo.
// para este caso deseo imprimir porque ocurrio un error
// catch recibe una variable enviada desde throw en caso de la sentencia no se cumpla.
catch (error) {
    // el Mensaje antes definido en el objeto error.
    console.log(error.massage);
};