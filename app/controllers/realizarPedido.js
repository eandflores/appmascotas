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

$.mainScroll.removeAllChildren();

for(var i = 0; i < productos.length; i++){
	
	for(var j = 0; j < productos[i]['producto_precios'].length; j++){
		
		for(var k = 0; k < carro.length; k++){
			
			if(carro[k]['id'] ==  productos[i]['producto_precios'][j]['id']){
				
				var Main = Ti.UI.createView({
					width:"100%",
					layout:'horizontal',
					height:"232px",
					id: productos[i]['producto_precios'][j]['id']
				});
				
				var Margen = Ti.UI.createView({
					width:"100%",
					height:"2px",
					backgroundColor:"#e8e8e8"
				});
				
				var ImageViewProducto = Ti.UI.createImageView({
					image : productos[i]['prod_pic'],
					defaultImage: "/img/Perro1.jpg",
					width:"25%",
					height:"100%"
				});
				
				var ViewLabels = Ti.UI.createView({
					width:"75%",
					height:"100%",
					layout:"vertical",
					top:"0%"
				});
				
				var LabelGroup = Ti.UI.createView({
					width:"75%",
					height:"60%",
					layout:"vertical",
					top:"0%"
				});
				
				var LabelNombre = Ti.UI.createLabel({
					color:"#cc5122",
					width:"100%",
					height:"40%",
					top:"20%",
					left:"8%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : productos[i]['brand']
				});
				
				var LabelDescripcion = Ti.UI.createLabel({
					color:"gray",
					width:"100%",
					height:"40%",
					top:"0%",
					left:"8%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : productos[i]['prod_name']
				});
				
				var LabelGroup2 = Ti.UI.createView({
					width:"75%",
					height:"40%",
					layout:"horizontal",
					top:"0%"
				});
				
				var LabelDetalle = Ti.UI.createLabel({
					width:"60%",
					height:"50%",
					color:"#5c5c5b",
					top:"25%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : productos[i]['producto_precios'][j]['sku_description']+
							" x "+carro[k]['qty']
				});
								
				var LabelPrecio = Ti.UI.createLabel({
					width:"40%",
					height:"50%",
					color:"#5c5c5b",
					top:"25%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : "$"+(carro[k]['qty'] * productos[i]['producto_precios'][j]['sku_price'])
				});
				
				LabelGroup.add(LabelNombre);
				LabelGroup.add(LabelDescripcion);
				
				LabelGroup2.add(LabelDetalle);
				LabelGroup2.add(LabelPrecio);
				
				ViewLabels.add(LabelGroup);
				ViewLabels.add(LabelGroup2);
				
				Main.add(ImageViewProducto);
				Main.add(ViewLabels);
				
				$.mainScroll.add(Main);	
				$.mainScroll.add(Margen);
			}
		}
	}
}

if(medio != null){
	$.pago.text = medio['paym_name'];
}
if(direccion != null){
	$.direccion.text = direccion['direccion'];
}

$.telefono.text = usuario['cust_phone'];
$.correo.text = usuario['cust_email'];


function productosNombre(nombre){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: "TODAS", marca: "TODAS",nombre: nombre,pagina: 1}).getView().open();
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

function setDireccion(){
	
	Alloy.createController('direccion',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion}).getView().open();
}

function setCorreo(){
	
	Alloy.createController('email',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion}).getView().open();

}

function setMedioPago(){
	
	Alloy.createController('medioPago',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion}).getView().open();
}

function setTelefono(){
	
	Alloy.createController('telefono',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion}).getView().open();
}

function setCupon(){
	
}

function gracias(){
	
	if(medio != null && direccion != null){
		var xhr = Ti.Network.createHTTPClient({
			onload: function(e){
				try{
					var response = JSON.parse(this.responseText);
					Alloy.createController('gracias',{token: token,carro: [],marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: null, direccion: null}).getView().open();
				}
				catch(e){
					alert("Error de conexión con el servidor.");
				}
			},
			onerror: function(e){
				alert("Error de conexión con el servidor.");
			}
		});
		Ti.API.info(medio['id']);
		Ti.API.info(direccion['id']);
		Ti.API.info(carro);
		xhr.open('POST','http://tiendapet.cl/api/comprar?user_token='+token);
		xhr.send({"pago" : medio['id'],"cart" : carro,"direccion" : direccion['id']}); 
	}
	else{
		alert("Debe seleccionar una dirección y medio de pago.");
	}
}

function atras(){
	$.realizarPedido.close();
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