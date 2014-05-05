var win =  $.medioPago;

var args = arguments[0] || {};
	
carro = args['carro'];
token = args['token'];

marcas = args['marcas'];
productos = args['productos'];
medios = args['medios'];
direcciones = args['direcciones'];

medio = args['medio'];
direccion = args['direccion'];
correo = args['correo'];
telefono = args['telefono'];

if(medios.length > 0){
	cargarMedios(medios);
}
else{
	xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			medios = JSON.parse(this.responseText);
			
			cargarMedios(medios);
	
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
		}
	});
	xhr.open('GET','http://tiendapet.cl/api/pagos');
	xhr.send();
}

function cargarMedios(medios){
	
	var mainScroll = $.mainScroll;
	
	for(i=0;i<medios.length;i++){
		
		var MedioPago = Ti.UI.createView({
			backgroundImage:"/img/flechaPagos.jpg",
			width:"100%",
			id: medios[i]['id'],
			height:"98px"
		});
		
		MedioPago.addEventListener("click",function(){
			selectMedio(this['id']);
		});
		
		var Margen = Ti.UI.createView({
			width:"100%",
			height:"2px",
			backgroundColor:"#e8e8e8"
		});
		
		var Label = Ti.UI.createLabel({
			left:"7%",
			width:"86%",
			height:"100%",
			color:"#5c5c5b",
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold"
			},
			text: medios[i]['paym_name']
		});
		
		MedioPago.add(Label);
		mainScroll.add(MedioPago);
		mainScroll.add(Margen);
	}
	
}

function selectMedio(medio_id){
	var vista = Alloy.createController('realizarPedido',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio_id, direccion: direccion,correo: correo,telefono: telefono}).getView();
	vista.open();
}

function productosPerroGato(){
	
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[3], marca: "TODAS"}).getView();
	vista.open();
}

function productosPerro(){
	
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[1], marca: "TODAS"}).getView();
	vista.open();
}

function productosGato(){
	
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[2], marca: "TODAS"}).getView();
	vista.open();
}

function atras(){
	win.close();
}
