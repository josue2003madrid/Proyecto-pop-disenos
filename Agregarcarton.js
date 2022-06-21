var Productos=[]
var spTotal=document.getElementById("total");
var listaProductos= document.getElementById("carrito");

function agregarCarro1(){
    var objProducto={
        id:1, 
        nombre: "Caja Sublimable para taza", 
        precio: 13
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro2(){
    var objProducto={
        id:2, 
        nombre: "Folder Sublimable", 
        precio: 13
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro3(){
    var objProducto={
        id:3, 
        nombre: "Caja p/ playera blanca", 
        precio: 10.50
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro4(){
    var objProducto={
        id:4, 
        nombre: "Caja Blister 17 oz. y tarro", 
        precio: 8.50
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro5(){
    var objProducto={
        id:5, 
        nombre: "Caja Blister 11 oz", 
        precio: 7.50
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