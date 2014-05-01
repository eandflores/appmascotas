var win =  $.login;
$.inputCorreo.value = "prueba3";
$.inputClave.value = "123";
function recuperarContraseña(){
	
	var vista = Alloy.createController('recuperarContrasena').getView();
	vista.open();
}
function registro(){
	
	var email = $.inputCorreo.value;
	var password = $.inputClave.value;
	
	xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			var response = JSON.parse(this.responseText);
			var token = response['token'];
			var vista = Alloy.createController('productos',{token : token,carro: [],categoria: 'TODAS',marca: 'TODAS'}).getView();
			vista.open();
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
		}
	});
	
	xhr.open('POST','http://tiendapet.cl/api/usuario/login');
	xhr.send({"email" : email,"password" : password});
}

function atras(){
	win.close();
}
