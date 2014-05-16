var args = arguments[0] || {};

var marcas = args['marcas'];

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
				var response = JSON.parse(this.responseText);
				var token = response['token'];
				
				getProductos(token,marcas);
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
	
	xhr.open('POST','http://tiendapet.cl/api/usuario/login');
	xhr.send({"email" : email,"password" : password});
}

function getProductos(token,marcas){
	
	var xhrProductos = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				var productos = JSON.parse(this.responseText);
		
				var vista = Alloy.createController('productos',{token: token,carro: [],marcas: marcas,productos: productos,medios: [],direcciones: [],usuario: null,medio: null, direccion: null,categoria: 'TODAS',marca: 'TODAS',nombre: "TODOS",pagina: 1}).getView();
				winCargando.close();
				vista.open();
			}
			catch(e){
				alert(e);
				winCargando.close();
			}
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
			winCargando.close();
		}
	});
	
	xhrProductos.open('GET','http://tiendapet.cl/api/productos/?desde=1&cantidad=-1');
	xhrProductos.send();
	
}


function atras(){
	$.registro.close();
}
