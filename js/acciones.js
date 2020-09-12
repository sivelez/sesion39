var tituloRegistro = document.getElementById('tituloRegistro');
var btn = document.getElementById('btnAgregar');
var tabla = document.getElementById('tablaRegistro');
tituloRegistro.innerHTML="Registro de jugadores";

btn.addEventListener('click', function(){
	var cod = document.getElementById('txtCodigo').value;
	var nom = document.getElementById('txtNombre').value;
	var tel = document.getElementById('txtTelefono').value;
	var dir = document.getElementById('txtDireccion').value;

	tabla.insertRow(-1).innerHTML = '<td>'+cod+'</td><td>'+nom+'</td><td>'+tel+'</td><td>'+dir+'</td><td><button class="btn btn-info mr-1" data-toggle="modal" data-target="#registro" onclick="nuevaFila();"><i class="far fa-file text-light"></i></button><button class="btn btn-warning mr-1" data-toggle="modal" data-target="#registro" onclick="modificarFila(this);"><i class="far fa-edit text-light"></i></button><button class="btn btn-danger"><i class="fa fa-trash text-light"></i></button></td>';
});


function nuevaFila(){
	tituloRegistro.innerHTML="Nuevo registro";
	document.getElementById("txtCodigo").value = "";
	document.getElementById("txtNombre").value = "";
	document.getElementById("txtTelefono").value = "";
	document.getElementById("txtDireccion").value = "";
}

function modificarFila(fila){

	var numeroFila = fila.parentNode.parentNode.rowIndex;
	var miFila = document.getElementsByTagName("tr")[numeroFila];
	var miCelda = miFila.getElementsByTagName("td");

	document.getElementById("txtCodigo").value = miCelda[0].innerHTML;
	document.getElementById("txtNombre").value = miCelda[1].innerHTML;
	document.getElementById("txtTelefono").value = miCelda[2].innerHTML;
	document.getElementById("txtDireccion").value = miCelda[3].innerHTML;

	tituloRegistro.innerHTML="Modificar registro";

}