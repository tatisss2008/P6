
function sumar(a,b){
    
    //Arreglo: Listado de datos (variables, objectos, funciones)
    let compras = ["pan", "carne","cuchillas", "queso"];

    //para referirme a un elemento uso la posicion relativo al primer elemento
    console.log(compras[0]);

    return a+b;
}

let resultado=sumar(3,5);
console.log("Resultado:"+resultado);


//Exportarla como un modulo y q la pueda usar otro archivo.js
module.exports=sumar

