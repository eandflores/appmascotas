function recuperarContraseña(){
	
	var vista = Alloy.createController('recuperarContrasena').getView();
	vista.open();
}
function registro(){
	
	var vista = Alloy.createController('productos',{categoria: 'TODAS', marca: 'TODAS'}).getView();
	vista.open();
}