function recuperarContraseña(){
	
	var vista = Alloy.createController('recuperarContrasena').getView();
	vista.open();
}
function registro(){
	
	var opcion = 1;
	
	var vista = Alloy.createController('productos',{opcion: 1}).getView();
	vista.open();
}