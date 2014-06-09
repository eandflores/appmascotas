$.index.open();

var args = arguments[0] || {};

var token = args['token'];
var marcas = args['marcas'];
var productos = args['productos'];

cargarLoading();

$.inputCorreo.value = "prueba3";
$.inputClave.value = "123";

function login(){
	
	winCargando.open();
	
	if(token == null){
		var xhr = Ti.Network.createHTTPClient({
			onload: function(e){
				try{
					var response = JSON.parse(this.responseText);
					getMarcas(response['token']);
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
	else{
		getMarcas(token);
	}
}

function getMarcas(token){
	
	if(marcas == null){
		var xhrMarcas = Ti.Network.createHTTPClient({
			onload: function(e){
				try{
					getProductos(token,JSON.parse(this.responseText));
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
		
		xhrMarcas.open('GET','http://tiendapet.cl/api/marcas');
		xhrMarcas.send();
	}
	else{
		getProductos(token,marcas);
	}
} 

function getProductos(token,marcas){
	
	if(productos == null){
		winCargando.open();
		
		var xhrProductos = Ti.Network.createHTTPClient({
			onload: function(e){
				try{
					Alloy.createController('productos',{token: token,carro: [],marcas: marcas,productos: JSON.parse(this.responseText),medios: [],direcciones: [],usuario: null,medio: null, direccion: null,categoria: 'TODAS',marca: 'TODAS',nombre: "TODOS",pagina: 1}).getView().open();
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
	else{
		Alloy.createController('productos',{token: token,carro: [],marcas: marcas,productos: productos,medios: [],direcciones: [],usuario: null,medio: null, direccion: null,categoria: 'TODAS',marca: 'TODAS',nombre: "TODOS",pagina: 1}).getView().open();
	}
}

function registro(){
	Alloy.createController('registro').getView().open();
}

function recuperarContraseña(){
	Alloy.createController('recuperarContrasena').getView().open();
}