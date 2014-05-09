$.index.open();

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

function login(){
	
	winCargando.open();
	
	var xhrMarcas = Ti.Network.createHTTPClient({
		onload: function(e){
			var marcas = JSON.parse(this.responseText);
			
			var vista = Alloy.createController('login',{marcas: marcas}).getView();
			winCargando.close();
			vista.open();
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
			winCargando.close();
		}
	});
	
	xhrMarcas.open('GET','http://tiendapet.cl/api/marcas');
	xhrMarcas.send();
} 

function registro(){
	
	Alloy.createController('registro').getView().open();
}

