var Productos=[]
var spTotal=document.getElementById("total");
var listaProductos= document.getElementById("carrito");

function agregarCarro1(){
    var objProducto={
        id:1, 
        nombre: "Tequilero cerámica 2.5oz.", 
        precio: 24
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro2(){
    var objProducto={
        id:2, 
        nombre: "Tequilero Cristal", 
        precio: 35
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