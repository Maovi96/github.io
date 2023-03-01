
function (){

var formulario = document.getElementsByName('formulario')[0],
elementos = formulario.elementos,
boton = document.getElementById('btn');


var validarNombre = function(){
    if (formulario.nombre.value == 0) {
    alert("Completa con tu nombre");
}
};

var validar = function() {
    validarNombre();

};

formulario.addEventListener("submit",validar);

}