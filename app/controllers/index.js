$.index.open();

var args = arguments[0] || {};

var productos = args['productos'];

cargarLoading();

if(productos == null){
	winCargando.open();
	
	var xhrProductos = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				productos = JSON.parse(this.responseText);
		
				winCargando.close();
				winCargando.close();
				winCargando.close();
			}
			catch(e){
				alert("Error de conexión con els ervidor.");
				winCargando.close();
				winCargando.close();
				winCargando.close();
			}
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
			winCargando.close();
			winCargando.close();
			winCargando.close();
		}
	});
	
	xhrProductos.open('GET','http://tiendapet.cl/api/productos/?desde=1&cantidad=-1');
	xhrProductos.send();
}

$.inputCorreo.value = "prueba3";
$.inputClave.value = "123";

function recuperarContraseña(){
	
	Alloy.createController('recuperarContrasena').getView().open();
}

function login(){
	
	winCargando.open();
	
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				var response = JSON.parse(this.responseText);
				var token = response['token'];
				
				getMarcas(token);
			}
			catch(e){
				alert("Error de conexión con el servidor.");
				winCargando.close();
				winCargando.close();
				winCargando.close();
			}

		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
			winCargando.close();
			winCargando.close();
			winCargando.close();
		}
	});
	
	xhr.open('POST','http://tiendapet.cl/api/usuario/login');
	xhr.send({"email" : $.inputCorreo.value,"password" : $.inputClave.value});
}

function getMarcas(token){
	
	var xhrMarcas = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				var marcas = JSON.parse(this.responseText);
			
				var vista = Alloy.createController('productos',{token: token,carro: [],marcas: marcas,productos: productos,medios: [],direcciones: [],usuario: null,medio: null, direccion: null,categoria: 'TODAS',marca: 'TODAS',nombre: "TODOS",pagina: 1}).getView();
				vista.open();
			}
			catch(e){
				alert(e);
			}
			
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
		}
	});
	
	xhrMarcas.open('GET','http://tiendapet.cl/api/marcas');
	xhrMarcas.send();
} 

function registro(){
	
	winCargando.open();
	
	var xhrMarcas = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				var marcas = JSON.parse(this.responseText);
			
				var vista = Alloy.createController('registro',{marcas: marcas,productos: productos}).getView();
				winCargando.close();
				vista.open();
			}
			catch(e){
				alert("Error de conexión con el servidor.");
				winCargando.close();
			}
			
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
			winCargando.close();
		}
	});
	
	xhrMarcas.open('GET','http://tiendapet.cl/api/marcas');
	xhrMarcas.send();
}

