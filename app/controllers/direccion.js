var args = arguments[0] || {};

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "Perro";
categorias[2] = "Gato";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";

var carro = args['carro'];
var token = args['token'];

var marcas = args['marcas'];
var productos = args['productos'];
var medios = args['medios'];
var direcciones = args['direcciones'];

var usuario = args['usuario'];
var medio = args['medio'];
var direccion = args['direccion'];

if(direcciones.length > 0){
	cargarDirecciones(direcciones);
}
else{
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			direcciones = JSON.parse(this.responseText);
			
			cargarDirecciones(direcciones);
	
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
		}
	});
	xhr.open('GET','http://tiendapet.cl/api/usuario/direcciones?user_token='+token);
	xhr.send();
}

function cargarDirecciones(direcciones){
	
	for(i=0;i<direcciones.length;i++){
		
		var Direccion = Ti.UI.createView({
			width:"100%",
			height:"73px",
			layout:"horizontal"
		});
		
		var EliminarDireccion = Ti.UI.createView({
			backgroundImage:"/img/eliminarDireccion.jpg",
			width:"14.8%",
			id: direcciones[i]['id'],
			height:"100%"
		});
		
		EliminarDireccion.addEventListener("click",function(){
			eliminarDireccion(this['id']);
		});
		
		var SeleccionarDireccion = Ti.UI.createView({
			backgroundImage:"/img/seleccionarDireccion.jpg",
			width:"85.2%",
			id: direcciones[i],
			height:"100%",
		});
		
		SeleccionarDireccion.addEventListener("click",function(){
			selectDireccion(this['id']);
		});
		
		var Margen = Ti.UI.createView({
			width:"100%",
			height:"2px",
			backgroundColor:"#e8e8e8"
		});
		
		var Label = Ti.UI.createLabel({
			right:"20%",
			width:"80%",
			height:"100%",
			color:"#5c5c5b",
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold"
			},
			text: direcciones[i]['direccion']
		});
		
		SeleccionarDireccion.add(Label);
		Direccion.add(EliminarDireccion);
		Direccion.add(SeleccionarDireccion);
		$.mainScroll.add(Direccion);
		$.mainScroll.add(Margen);
	}
	
}

function selectDireccion(direccion_selected){
	Alloy.createController('realizarPedido',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion_selected}).getView().open();
}

function eliminarDireccion(direccion_id){
	/*
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			var response = JSON.parse(this.responseText);
			Ti.API.info(response);
			
			direcciones = null;
			
			if(direccion != 0){
				if(direccion_id == direccion['id']){
					direccion = null;
				}
			}
			
			Alloy.createController('realizarPedido',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion}).getView().open();
		},
		onerror: function(e){
			alert(e);
		}
	});
	
	xhr.open('POST','http://tiendapet.cl/api/usuario/direccionesEliminar/?direccion='+direccion_id);
	xhr.send(); 
	*/
}

function productosPerroGato(){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: categorias[3], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosPerro(){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: categorias[1], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosGato(){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: categorias[2], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosNombre(nombre){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: "TODAS", marca: "TODAS",nombre: nombre,pagina: 1}).getView().open();
}

function agregarDireccion(){
	
	Alloy.createController('agregarDireccion',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion}).getView().open();
}

function atras(){
	$.direccion.close();
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
