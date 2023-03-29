function doblar(n){
  return n*2;  
}

function arreglar(){
    
    //Arreglo: Listado de datos (variables, objectos, funciones)
    //let compras = ["pan", "carne","cuchillas", "queso"];
    //let miArreglo = [1, "e", true, 3.85, "hola"];
    let miArreglo = ["Santa Fé","Nacional","Millonarios","Medellin"];

    let longitud =miArreglo.length;

    //para referirme a un elemento uso la posicion relativo al primer elemento
    // console.log(compras[0]);    
    // console.log(miArreglo[4][1]);
    console.log(miArreglo);
    miArreglo.push("Tolima","Cartagena");
    console.log(miArreglo);
    miArreglo.pop();
    console.log(miArreglo);
    miArreglo.shift();
    console.log(miArreglo);
    miArreglo.splice(3);
    console.log(miArreglo);
    miArreglo.splice(1,1);
    console.log(miArreglo);


    //Ciclo
    let i=0;
    while (i<miArreglo.length){
        console.log(miArreglo[i]);
        i++;
    }

    for(const equipo of miArreglo){
        console.log(equipo);
    }
    
    let miArreglo2 =[ 2,4,5,6,7];
    console.log(miArreglo2);

    //Crear un arrglo que contenga el doble de mi Arrglo2
    let a=[];
    for(const item of miArreglo2){
        a.push(item*2);
    }

    console.log(a);

    //Mapear
    let b =miArreglo2.map(doblar);
    console.log(b);


}

 arreglar();