var args = arguments[0] || {};

var token = args['token'];
var carro = args['carro'];

var marcas = args['marcas'];
var productos = args['productos'];
var medios = args['medios'];
var direcciones = args['direcciones'];

var usuario = args['usuario'];
var medio = args['medio'];
var direccion = args['direccion'];

cargarLoading();

function registro(){
	
	if($.inputNombre.value != "" && $.inputTelefono.value != "" && $.inputCorreo.value != "" && $.inputContraseña.value != ""){
		
		if($.inputContraseña.value == $.inputContraseña2.value){
		
			if(Titanium.Network.online) {
				winCargando.open();
				
				var nombre = $.inputNombre.value;
				var telefono = $.inputTelefono.value;
				var email = $.inputCorreo.value;
				var password = $.inputContraseña.value;
				var password2 = $.inputContraseña2.value;
				
				var xhr = Ti.Network.createHTTPClient({
					onload: function(e){
						try{
							Ti.API.info(this.responseText);
							var response = JSON.parse(this.responseText);
							getMarcas(response);
							getMarcas(response['token']);
						}
						catch(e){
							alert(e);
							winCargando.close();
							winCargando.close();
							winCargando.close();
						}
			
					},
					onerror: function(e){
						alert(e);
						winCargando.close();
						winCargando.close();
						winCargando.close();
					}
				});
				Ti.API.info(nombre+" "+telefono+" "+email+" "+password);
				xhr.open('POST','http://tiendapet.cl/api/usuario/registrar');
				xhr.send({"nombre" : nombre,"telefono" : telefono,"email" : email,"password" : password});
			}
			else{
				alert("No hay conexión a la red.");
			}
		}
		else{
			alert("La contraseña debe coincidir con la cofirmación.");
		}
	}
	else{
		alert("Debe llenar todos los campos.");
	}
}

function getMarcas(token){
	
	if(marcas.length == 0){
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
	
	if(productos.length == 0){
		
		var xhrProductos = Ti.Network.createHTTPClient({
			onload: function(e){
				try{
					getUsuario(token,marcas,JSON.parse(this.responseText));
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
		getUsuario(token,marcas,productos);
	}
}

function getUsuario(token,marcas,productos){
	
	if(usuario != null){
		Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: 'TODAS',marca: 'TODAS',nombre: "TODOS",pagina: 1}).getView().open();
	}
	else{
		var xhrProductos = Ti.Network.createHTTPClient({
			
			onload: function(e){
				try{
					Alloy.createController('productos',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: JSON.parse(this.responseText),medio: medio, direccion: direccion,categoria: 'TODAS',marca: 'TODAS',nombre: "TODOS",pagina: 1}).getView().open();
				}
				catch(e){
					alert("Error de conexión con el servidor.");
				}
			},
			onerror: function(e){
				alert("Error de conexión con el servidor.");
			}
		});
		
		xhrProductos.open('GET','http://tiendapet.cl/api/usuario/?user_token='+token);
		xhrProductos.send();
	}	
}

function atras(){
	$.registro.close();
}
