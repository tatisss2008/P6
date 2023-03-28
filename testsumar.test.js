
const sumar = require("./sumar");

test("probar dos enteros",()=>{
    let resultado= sumar(3,5);
    expect(resultado).toBe(8);
});

test("probar dos reales",()=>{
    let resultado= sumar(3.05,5.3);
    expect(resultado).toBeCloseTo(8.35);
});

//npm install -g npm@latest
//Actualizar version