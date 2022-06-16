var Productos=[]
var spTotal=document.getElementById("total");
var listaProductos= document.getElementById("carrito");
function agregarCarro1(){
    var objProducto={
        id:1, 
        nombre: "Producto1", 
        precio: 345,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro2(){
    var objProducto={
        id:2, 
        nombre: "Producto2", 
        precio: 3500,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro3(){
    var objProducto={
        id:3, 
        nombre: "Producto3", 
        precio: 6000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro4(){
    var objProducto={
        id:4, 
        nombre: "Producto4", 
        precio: 1500,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro5(){
    var objProducto={
        id:5, 
        nombre: "Producto5", 
        precio: 15000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro6(){
    var objProducto={
        id:6, 
        nombre: "Producto6", 
        precio: 2000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro7(){
    var objProducto={
        id:7, 
        nombre: "Producto 7", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro8(){
    var objProducto={
        id:8, 
        nombre: "Producto 8", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro9(){
    var objProducto={
        id:9, 
        nombre: "Producto 9", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro10(){
    var objProducto={
        id:10, 
        nombre: "Producto 10", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro11(){
    var objProducto={
        id:11, 
        nombre: "Producto 11", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro12(){
    var objProducto={
        id:12, 
        nombre: "Producto 12", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro13(){
    var objProducto={
        id:13, 
        nombre: "Producto 13", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro14(){
    var objProducto={
        id:14, 
        nombre: "Producto 14", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro15(){
    var objProducto={
        id:15, 
        nombre: "Producto 15", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro16(){
    var objProducto={
        id:16, 
        nombre: "Producto 16", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro17(){
    var objProducto={
        id:17, 
        nombre: "Producto 17", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro18(){
    var objProducto={
        id:18, 
        nombre: "Producto 18", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro19(){
    var objProducto={
        id:19, 
        nombre: "Producto 19", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro20(){
    var objProducto={
        id:20, 
        nombre: "Producto 20", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro21(){
    var objProducto={
        id:21, 
        nombre: "Producto 21", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro22(){
    var objProducto={
        id:22, 
        nombre: "Producto 22", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro23(){
    var objProducto={
        id:23, 
        nombre: "Producto 23", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro24(){
    var objProducto={
        id:24, 
        nombre: "Producto 24", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro25(){
    var objProducto={
        id:25, 
        nombre: "Producto 25", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro26(){
    var objProducto={
        id:26, 
        nombre: "Producto 26", 
        precio: 1000,
    };
    Productos.push(objProducto);
    calcularTotal();
    mostrarEnProductos();
}
function agregarCarro27(){
    var objProducto={
        id:27, 
        nombre: "Producto 27", 
        precio: 1000,
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
    listaCarro.textContent = "";
    for(var objP of Productos){
        var nodoProducto= document.createElement("li");
        nodoProducto.classList.add("list-group-item", "text-right", "mx-2");
        nodoProducto.textContent = objP.nombre+ " $ " + objP.precio;
        listaProductos.appendChild(nodoProducto);
    }
}