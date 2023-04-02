/*
function saludar(tipo, nombre) {
    var tipo = tipo || "Hola";
    var nombre = nombre || "Carlos";
    return(tipo + "," + nombre + "!");
}

saludar();
saludar("Adios");
saludar("Hasta luego", "Pepe");
*/
/*
var valor = "global";
function funcionlocal() {
    var valor = "local"
    return valor;
}

console.log(valor);
console.log(funcionlocal());
console.log(valor);
*/

/*
var saludar = function (nombre) {
    return "Hola " + nombre;
    };
    saludar("Carlos"); // "Hola Carlos"
*/
/*
var a = "OLA";
function global () {
var b = "K";
function local () {
var c = "ASE";
return a + b + c;
}
return local;
}
global(); // Devuelve la función local: "function local() { var c ="ASE"...""
global()(); // Devuelve la ejecución de la función local: "OLAKASE"
var closure = global();
closure(); // Devuelve lo mismo que global()(): "OLAKASE"
*/
/*
var miContador = (function () {
    var contador = 0; // Por convención, a las variables "privadas" se las llama con un `` delante
    function incrementar () {
    return contador++;
    }
    function decrementar () {
    return contador--;
    }
    function valor () {
    return contador;
    }
    return {
    incrementar: incrementar,
    decrementar: decrementar,
    valor: valor
    }
    })();
    miContador.valor(); // 0
    miContador.incrementar();
    miContador.incrementar();
    miContador.valor(); // 2
    miContador.decrementar();
    miContador.valor(); // 1
*/

/*
 //no funciona
function inventario (nombre) {
    var nombre = nombre;
    var articulos = {};
    function add (nombre, cantidad) {
    articulos[nombre] = cantidad;
    }
    function borrar (nombre) {
    delete articulos[nombre];
    }
    function cantidad (nombre) {
    return articulos[nombre];
    }
    function nombre () {
    return nombre;
    }
    return {
    add: add,
    borrar: borrar,
    cantidad: cantidad,
    nombre: nombre
    }
}
*/

/*
var libros = inventario("libros");
libros.add("AngularJS", 3);
libros.add("JavaScript", 10);
libros.add("NodeJS", 5);
libros.cantidad("AngularJS"); // 3
libros.cantidad("JavaScript"); // 10
libros.borrar("JavaScript");
libros.cantidad("JavaScript"); // undefined
*/