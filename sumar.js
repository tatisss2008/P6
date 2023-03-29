
function sumar(a,b){
    return a+b;
}

let resultado=sumar(3,5);
console.log("Resultado:"+resultado);


//Exportarla como un modulo y q la pueda usar otro archivo.js
module.exports=sumar

