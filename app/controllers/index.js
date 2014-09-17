$.index.open();

var args = arguments[0] || {};
    
var token = null;
var carro = [];

var marcas = [];
var productos = [];
var medios = [];
var direcciones = [];

if(args.length > 0){
	marcas = args['marcas'];
	productos = args['productos'];
	medios = args['medios'];
}

var usuario = null;
var medio = null;
var direccion = null;
var descuento = null;

var pedidos = [];
var notificaciones = [];

cargarLoading();

var db = Ti.Database.open('TiendaPet');
 
db.execute('CREATE TABLE IF NOT EXISTS params(name TEXT, user TEXT, pass TEXT)');
 
var row = db.execute('SELECT user,pass FROM params where name=?', 'cookie');

if (row.rowCount > 0) {
    while (row.isValidRow())
	{
	    if (row.fieldByName('user') && row.fieldByName('pass')) {
	    	login2(row.fieldByName('user'),row.fieldByName('pass'));
		} else {
	    	alert('Empty');
	    }
	    row.next();
	}
}
 
db.close();

$.inputCorreo.value = "gabriel@octano.cl";
$.inputClave.value = "12345";

function login(){
	
	if($.inputCorreo.value != "" && $.inputClave.value != ""){
	
		if (Titanium.Network.online) {
			winCargando.open();
			
			if(token == null){
				var xhr = Ti.Network.createHTTPClient({
					onload: function(e){
						try{
							var response = JSON.parse(this.responseText);
							
							var db = Ti.Database.open('TiendaPet');
							db.execute('INSERT INTO params (name, user, pass) VALUES (?,?,?)', 'cookie', $.inputCorreo.value,$.inputClave.value); 
							db.close();
							
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
		else{
			alert("No hay conexión a la red.");
		}
	}
	else{
		alert("Debe llenar todos los campos.");
	}
}

function login2(correo,pass){
	
	if (Titanium.Network.online) {
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
			xhr.send({"email" : correo,"password" : pass});
		}
		else{
			getMarcas(token);
		}
	}
	else{
		alert("No hay conexión a la red.");
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
	Ti.API.info(token);
	if(usuario != null){
		Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: 'TODAS',marca: 'TODAS',nombre: "TODOS",pagina: 1}).getView().open();
	}
	else{
		var xhrUsuario = Ti.Network.createHTTPClient({
			
			onload: function(e){
				try{
					Alloy.createController('productos',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: JSON.parse(this.responseText),medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: 'TODAS',marca: 'TODAS',nombre: "TODOS",pagina: 1}).getView().open();
				}
				catch(e){
					alert("Error de conexión con el servidor.");
				}
			},
			onerror: function(e){
				alert("Error de conexión con el servidor.");
			}
		});
		
		xhrUsuario.open('GET','http://tiendapet.cl/api/usuario/?user_token='+token);
		xhrUsuario.send();
	}	
}

function registro(){
	Alloy.createController('registro',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
}

function recuperarContraseña(){
	Alloy.createController('recuperarContrasena',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
}