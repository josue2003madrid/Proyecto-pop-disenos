var Productos=[]
var spTotal=document.getElementById("total");
var listaProductos= document.getElementById("carrito");

function agregarCarro1(){
    var objProducto={
        id:1, 
        nombre: "Cílindro de botón", 
        precio: 86
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro2(){
    var objProducto={
        id:2, 
        nombre: "Botella cuello de color", 
        precio: 115
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro3(){
    var objProducto={
        id:3, 
        nombre: "Cílindro Llavero 600 ml", 
        precio: 49
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro4(){
    var objProducto={
        id: 4, 
        nombre: "Lata E. Chica", 
        precio: 52
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro5(){
    var objProducto={
        id: 5, 
        nombre: "Cilindro Tapa Transparente", 
        precio: 83
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro6(){
    var objProducto={
        id: 6, 
        nombre: "Cilindro Tapa Popote", 
        precio: 65
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro7(){
    var objProducto={
        id: 7, 
        nombre: "Cilindro llavero 750 ml", 
        precio: 61
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro8(){
    var objProducto={
        id: 8, 
        nombre: "Cilindro tapa chupón", 
        precio: 50
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro9(){
    var objProducto={
        id: 9, 
        nombre: "Botella Aro", 
        precio: 79
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function calcularTotal(){
    var elTotal= 0;
    for(var p of Productos){
        elTotal += p.precio;
    }
    spTotal.textContent = elTotal;
}
function mostrarEnProductos(){
    listaCarro.textContent = " ";
    for(var objP of Productos){
        var nodoProducto= document.createElement("li");
        nodoProducto.classList.add("list-group-item", "text-right", "mx-2");
        nodoProducto.textContent = objP.nombre + "_$ " + objP.precio;
        listaProductos.appendChild(nodoProducto);
    }
}