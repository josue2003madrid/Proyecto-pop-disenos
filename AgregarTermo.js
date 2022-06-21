var Productos=[]
var spTotal=document.getElementById("total");
var listaProductos= document.getElementById("carrito");

function agregarCarro1(){
    var objProducto={
        id:1, 
        nombre: "Taza Viajera 16 oz", 
        precio: 130
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro2(){
    var objProducto={
        id:2, 
        nombre: "Termo Lata Grande", 
        precio: 135
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro3(){
    var objProducto={
        id:3, 
        nombre: "Botella Lechera", 
        precio: 147
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro4(){
    var objProducto={
        id: 4, 
        nombre: "Vaso Viajero", 
        precio: 175
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro5(){
    var objProducto={
        id: 5, 
        nombre: "Termo Lata Chica", 
        precio: 115
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro6(){
    var objProducto={
        id: 6, 
        nombre: "Vaso Viajero 20 oz.", 
        precio: 175
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