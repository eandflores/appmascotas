var args = arguments[0] || {};

var marcas = args['marcas'];
var productos = args['productos'];

if(Titanium.Platform.name == "iPhone OS"){
	var winCargando = Ti.UI.createWindow({
        backgroundColor : '#000',
        width:'100%',
        top: "3.5%",
        height:'96.5%',
        opacity:0.70
        
    });
    
    var labelCargando = Ti.UI.createLabel({
		width:"100%",
		height:"20%",
		top:"40%",
		bottom:"40%",
		text:"CARGANDO...",
		textAlign: "center",
		color:"white",
		font: {
			fontWeight:"bold"
		}
	});
}
else{
	var winCargando = Ti.UI.createWindow({
        backgroundColor : '#000',
        width:'100%',
        height:'100%',
        opacity:0.70,
        navBarHidden: "true"
    });
    
     var labelCargando = Ti.UI.createLabel({
		width:"100%",
		height:"20%",
		top:"40%",
		bottom:"40%",
		text:"CARGANDO...",
		textAlign: "center",
		color:"white",
		font: {
			fontWeight:"bold"
		}
	});
}

winCargando.add(labelCargando);

function registro(){
	
	winCargando.open();
	
	var email = $.inputCorreo.value;
	var password = $.inputContraseña.value;
	
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				Ti.API.info(this.responseText);
				var response = JSON.parse(this.responseText);
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
	Ti.API.info(email+" "+password);
	xhr.open('POST','http://tiendapet.cl/api/usuario/registrar');
	xhr.send({"email" : email,"password" : password});
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

function atras(){
	$.registro.close();
}
