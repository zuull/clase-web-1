let números = [1, 2, 3, 4, 5];
números.push(6);
números.pop();
 números.shift();
números.unshift(0);
console.log(números); // [0, 2, 3, 4, 5]

let colores = ["rojo", "verde", "azul", "amarillo"];
colores.push("naranja");
colores.pop();
colores.shift();
colores.unshift("violeta");
console.log(colores); // ["violeta", "verde", "azul", "amarillo"]

let booleanos = [true, false, true, false];
booleanos.push(true);
booleanos.pop();
booleanos.shift();
booleanos.unshift(false);
console.log(booleanos); // [false, false, true, false]

let personas = [{ nombre: "Juan", edad: 25 }, { nombre: "María", edad: 30 }, { nombre: "Pedro", edad: 35 }];
personas.push({ nombre: "Ana", edad: 20 });
personas.pop();
personas.shift();
personas.unshift({ nombre: "Luis", edad: 40 });
console.log(personas); // [{ nombre: "Luis", edad: 40 }, { nombre: "María", edad: 30 }, { nombre: "Pedro", edad: 35 }]

let mixto = [1, "dos", true, { nombre: "tres" }, 4.5];
mixto.push("cinco");
mixto.pop();
mixto.shift();
mixto.unshift(0);
console.log(mixto); // [0, "dos", true, { nombre: "tres" }, 4.5]