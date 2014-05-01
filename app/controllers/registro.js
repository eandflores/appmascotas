var win =  $.registro;

function registro(){
	var email = $.inputCorreo.value;
	var password = $.inputContraseña.value;
	
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
	
	xhr.open('POST','http://tiendapet.cl/api/usuario/registrar');
	xhr.send({"email" : email,"password" : password});

}

function atras(){
	win.close();
}
