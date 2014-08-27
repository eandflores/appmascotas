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
	$.resetearContrasena.close();
}

function resetear(){
	
	if($.inputPass.value != '' && $.inputCodigo.value != ''){
		
		if($.inputPass.value == $.inputPass2.value){
			
			var xhr = Ti.Network.createHTTPClient({
				onload: function(e){
					try{
						Ti.API.info(this.responseText);
						var response = JSON.parse(this.responseText);
						
						Alloy.createController('index',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
					}
					catch(e){
						alert(e);
					}
				},
				onerror: function(e){
					alert(e);
				}
			});
			
			xhr.open('POST','http://tiendapet.cl/api/usuario/resetear_contrasena?reset_pass='+$.inputCodigo.value);
			xhr.send({'password' : $.inputPass.value,'password2' : $.inputPass2.value}); 
		}
		else{
			alert("La contraseña debe coincidir con la cofirmación.");
		}
	}
	else{
		alert("Debe llenar todos los campos.");
	}
}