var selectorM =document.getElementById("efc2");
selectorM.addEventListener("click", obtenerseleccion);

function obtenerseleccion(){
    var opc;
    for(var i = 0; i<selectorM.options.length; i++){
    opc=selectorM.options[i];
    if(opc.selected)
        alert(opc.value);  
}
}