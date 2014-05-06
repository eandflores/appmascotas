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
			//alert("Iniciando sesión, espere unos segundos.");

			var response = JSON.parse(this.responseText);
			var token = response['token'];
			
			getMarcas(token);

		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
		}
	});
	
	xhr.open('POST','http://tiendapet.cl/api/usuario/login');
	xhr.send({"email" : email,"password" : password});
}

function getMarcas(token){
	
	xhrMarcas = Ti.Network.createHTTPClient({
		onload: function(e){
			var marcas = JSON.parse(this.responseText);
			getProductos(token,marcas);
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
		}
	});
	
	xhrMarcas.open('GET','http://tiendapet.cl/api/marcas');
	xhrMarcas.send();
} 

function getProductos(token,marcas){
	
	xhrProductos = Ti.Network.createHTTPClient({
		onload: function(e){
			var productos = JSON.parse(this.responseText);
		
			var vista = Alloy.createController('productos',{token: token,carro: [],marcas: marcas,productos: productos,medios: [],direcciones: [],medio: null, direccion: null,correo: null,telefono: null,categoria: 'TODAS',marca: 'TODAS',nombre: "TODOS"}).getView();
			vista.open();
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
		}
	});
	
	xhrProductos.open('GET','http://tiendapet.cl/api/productos');
	xhrProductos.send();
	
}

function atras(){
	win.close();
}
