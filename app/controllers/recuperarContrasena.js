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
var descuento = args['descuento'];

var pedidos = args['pedidos'];
var notificaciones = args['notificaciones'];

function atras(){
	$.recuperarContrasena.close();
}

function recuperar(){
	Ti.API.info($.inputCorreo.value);
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				Ti.API.info(this.responseText);
				var response = JSON.parse(this.responseText);
				
				Alloy.createController('resetearContrasena',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
			}
			catch(e){
				alert("Error de conexión con el servidor.");
			}
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
		}
	});
	
	xhr.open('POST','http://tiendapet.cl/api/usuario/recuperar_contrasena');
	xhr.send({'email' : $.inputCorreo.value}); 
	
}