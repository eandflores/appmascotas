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

function buscarProducto(){
	if(Titanium.Platform.name == "iPhone OS"){
		var winModal = Ti.UI.createWindow({
	        backgroundColor : '#000',
	        width:'100%',
	        top: "3.5%",
	        height:'9.1%',
	    });
	    
	    var viewModal = Ti.UI.createView({
			width:"100%",
			height:"100%",
			layout:"horizontal",
			backgroundImage: "/img/fondoBuscar.jpg",
			top:"0%"
		});
		
		var buscar = Ti.UI.createTextField({
			width:"72%",
			height:"100%",
			hintText: "¿Que es lo que buscas?",
			color: "white",
			textAlign:'center'
		});
		
		var inputsBuscar = Ti.UI.createView({
			width:"28%",
			height:"100%",
			layout:"horizontal"
		});
		
		var lupa = Ti.UI.createView({
			width:"40%",
			height:"70%",
			left:"5%",
			right:"5%",
			top:"15%",
			bottom:"15%",
			backgroundImage:"/img/lupaBuscar.jpg"
		});
		
		lupa.addEventListener("click",function(){
			productosNombre(buscar.value);
		});
		
		var cerrar = Ti.UI.createView({
			left:"7.5%",
			right:"7.5%",
			top:"25%",
			bottom:"25%",
			width:"25%",
			height:"50%",
			backgroundImage:"/img/cerrar.jpg"
		});
		
		cerrar.addEventListener("click",function(){
			winModal.close();
		});
	}
	else{
		$.wrapper.opacity = 0;
		
		var winModal = Ti.UI.createWindow({
	        backgroundColor : '#000',
	        width:'100%',
	        height:'100%',
	        opacity:0.85,
	        navBarHidden: "true"
	    });
		
		var viewModal = Ti.UI.createView({
			width:"100%",
			height:"9.5%",
			layout:"horizontal",
			backgroundImage: "/img/fondoBuscar.jpg",
			top:"0%"
		});
		
		var buscar = Ti.UI.createTextField({
			width:"72%",
			height:"100%",
			hintText: "¿Que es lo que buscas?",
			textAlign:'center',
			color:"white",
			backgroundColor:"#cb5122"
		});
		
		var inputsBuscar = Ti.UI.createView({
			width:"28%",
			height:"100%",
			backgroundColor:"#cb5122",
			layout:"horizontal"
		});
		
		var lupa = Ti.UI.createView({
			width:"40%",
			height:"70%",
			left:"5%",
			right:"5%",
			top:"15%",
			bottom:"15%",
			backgroundImage:"/img/lupaBuscar.jpg"
		});
		
		lupa.addEventListener("click",function(){
			$.wrapper.opacity = 1;
			winModal.close();
			productosNombre(buscar.value);
		});
		
		var cerrar = Ti.UI.createView({
			left:"7.5%",
			right:"7.5%",
			top:"25%",
			bottom:"25%",
			width:"25%",
			height:"50%",
			backgroundImage:"/img/cerrar.jpg"
		});
		
		cerrar.addEventListener("click",function(){
			$.wrapper.opacity = 1;
			winModal.close();
		});
		
		winModal.addEventListener('android:back',function(){
			$.wrapper.opacity = 1;
			winModal.close();
			return true;
		});
	}
	
	viewModal.add(buscar);
	inputsBuscar.add(lupa);
	inputsBuscar.add(cerrar);
	viewModal.add(inputsBuscar);
	winModal.add(viewModal);
	winModal.open();
}


function productosNombre(nombre){
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: "TODAS", marca: "TODAS",nombre: nombre}).getView();
	vista.open();
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
