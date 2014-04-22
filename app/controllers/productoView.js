var args = arguments[0] || {};

Titanium.API.info(args['producto']);

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "PERRO";
categorias[2] = "GATO";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";

var marcas = new Array;

marcas.push({
	'id' : "1",
	'nombre' : "DOGUTOS",
	'imagen' : "/img/Doguitos.jpg",
	'categoria' : "PERRO"
});

marcas.push({
	'id' : "2",
	'nombre' : "ROYAL KANIN",
	'imagen' : "/img/RoyalKanin.jpg",
	'categoria' : "PERRO"
});

marcas.push({
	'id' : "3",
	'nombre' : "GATIS",
	'imagen' : "/img/Gati.jpg",
	'categoria' : "GATO"
});

marcas.push({
	'id' : "4",
	'nombre' : "EUKANUBA",
	'imagen' : "/img/Doguitos.jpg",
	'categoria' : "PERRO"
});

var marcasScroll = $.marcasScroll;

for(var i = 0; i < marcas.length; i++){
	
	var ImageViewMarca = Ti.UI.createImageView({
		backgroundImage : marcas[i]['imagen'],
		width:"153.6px",
		id: marcas[i]['id'],
		height:"100%"
	});
	
	ImageViewMarca.addEventListener("click",function(){
		productosMarca(this['id']);
	});
	
	marcasScroll.add(ImageViewMarca);	
	
}

var productos = new Array;

productos.push({
	'id' : 1,
	'nombre' : "DOGUITOS 1",
	'descripcion' : "Alimento para adultos",
	'detalle': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit lacus ut augue porta, eu facilisis neque pretium. Aliquam non tellus ut enim sagittis sollicitudin. Quisque convallis dictum risus a auctor. Maecenas egestas feugiat diam vel adipiscing. Sed vestibulum pellentesque enim. bibendum  1",
	'categoria' : categorias[1],
	'marca' : marcas[0]['id'],
	'imagen' : "/img/Perro1.jpg"
});

productos.push({
	'id' : 2,
	'nombre' : "GATIS 1",
	'descripcion' : "Alimento para adultos",
	'detalle': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit  adipiscing. Sed vestibulum pellentesque enim. bibendum  2",
	'categoria' : categorias[2],
	'marca' : marcas[2]['id'],
	'imagen' : "/img/Gato1.jpg"
});

productos.push({
	'id' : 3,
	'nombre' : "EUKANUBA 1",
	'descripcion' : "Alimento para cachorros",
	'detalle': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit lacus ut augue porta, eu facilisis neque pretium. Aliquam non tellus ut enim sagittis sollicitudin. Quisque convallis dictum risus a auctor. Maecenas egestas feugiat diam vel adipiscing. Sed vestibulum pellentesque enim. bibendum  3",
	'categoria' : categorias[1],
	'marca' : marcas[3]['id'],
	'imagen' : "/img/Perro1.jpg"
});

productos.push({
	'id' : 4,
	'nombre' : "GATIS 2",
	'descripcion' : "Alimento para cachorros",
	'detalle': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit lacus ut augue porta, eu facilisis neque pretium. Aliquam non tellus ut enim sagittis sollicitudin. Quisque convallis dictum risus a auctor. Maecenas egestas feugiat diam vel adipiscing. Sed vestibulum pellentesque enim. bibendum  4",
	'categoria' : categorias[2],
	'marca' : marcas[2]['id'],
	'imagen' : "/img/Gato1.jpg"
});

productos.push({
	'id' : 5,
	'nombre' : "DOGUITOS 2",
	'descripcion' : "Alimento para adultos",
	'detalle': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit lacus ut augue porta, eu facilisis neque pretium. Aliquam non tellus ut enim sagittis sollicitudin. Quisque convallis dictum risus a auctor. Maecenas egestas feugiat diam vel adipiscing. Sed vestibulum pellentesque enim. bibendum  5",
	'categoria' : categorias[1],
	'marca' : marcas[0]['id'],
	'imagen' : "/img/Perro1.jpg"
});

var productosPrecio = new Array;

productosPrecio.push({
	'id' : 1,
	'producto_id' : 1,
	'peso' : 1,
	'precio': 1500
});
productosPrecio.push({
	'id' : 2,
	'producto_id' : 1,
	'peso' : 2,
	'precio': 2500
});
productosPrecio.push({
	'id' : 3,
	'producto_id' : 2,
	'peso' : 1,
	'precio': 1500
});
productosPrecio.push({
	'id' : 4,
	'producto_id' : 3,
	'peso' : 1,
	'precio': 2500
});
productosPrecio.push({
	'id' : 5,
	'producto_id' : 4,
	'peso' : 1,
	'precio': 1500
});
productosPrecio.push({
	'id' : 6,
	'producto_id' : 5,
	'peso' : 1,
	'precio': 1000
});

var Main = $.Main;

for(var i = 0; i < productos.length; i++){
	
	if(productos[i]['id'] == args["producto"]){
		
		var Producto = Ti.UI.createView({
			width:"100%",
			layout:'horizontal',
			height:"28.7%"
		});
		
		var ImageViewProducto = Ti.UI.createImageView({
			backgroundImage : productos[i]['imagen'],
			width:"25%",
			height:"100%"
		});
		
		var LabelGroup = Ti.UI.createView({
			width:"75%",
			height:"100%",
			layout:"vertical"
		});
		
		var LabelNombre = Ti.UI.createLabel({
			color:"#cc5122",
			width:"100%",
			height:"28.2%",
			top:"0%",
			left:"8.3%",
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold"
			},
			text : productos[i]['nombre']
		});
		
		var LabelDescripcion = Ti.UI.createLabel({
			color:"gray",
			width:"100%",
			height:"19.6%",
			top:"0%",
			left:"8.3%",
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold"
			},
			text : productos[i]['descripcion']
		});
		
		var LabelPrecio = Ti.UI.createLabel({
			width:"100%",
			height:"21.7%",
			color:"#5c5c5b",
			top:"0%",
			left:"8.3%",
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold"
			},
			text : productos[i]['precio']
		});
		
		LabelGroup.add(LabelNombre);
		LabelGroup.add(LabelDescripcion);
		LabelGroup.add(LabelPrecio);
		
		Producto.add(ImageViewProducto);
		Producto.add(LabelGroup);
		
		var Peso = Ti.UI.createView({
			width:"100%",
			layout:'horizontal',
			height:"12.3%",
			backgroundImage:"/img/peso.jpg"
		});
		
		var ViewPeso = Ti.UI.createView({
			width:"9.4%",
			height:"100%",
			left:"71.6%",
			layout:"vertical",
		});
		
		var InputPeso = Ti.UI.createTextField({
			width:"100%",
			height:"64%", 
			top:"18%",
			backgroundColor:"#d8d8d8",
			textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
			color:"#888888",
			value:0,
			editable:false
		});
		
		Peso.addEventListener("click",function(){
			
			var winModalPeso = Ti.UI.createWindow({
		        backgroundColor : '#000',
		        width:'100%',
		        height:'100%',
		        opacity:0.40,
		    });
		 	
		 	var viewModalPeso = Ti.UI.createView({
				width:"100%",
				height:"18.2%",
				layout:"vertical",
				top:"35.5%"
			});
			
		 	var FlechaArrPeso = Ti.UI.createImageView({
				width:"9.4%",
				height:"26.2%",
				left:"71.6%",
				backgroundImage:"/img/FlechaArr.png"
			});
			
			FlechaArrPeso.addEventListener("click",function(){
				InputPeso.value = parseInt(InputPeso.value) + 1;
			});
			
		    var ModalPeso= Ti.UI.createView({
		        backgroundColor:"white",
		        width : '100%',
		        height : '47.6%',
		        backgroundColor:"white"
		    });
		    
		    ModalPeso.addEventListener("click",function(){
				winModalPeso.close();
			});
		    
		    var FlechaAbaPeso = Ti.UI.createImageView({
				width:"9.4%",
				height:"26.2%",
				left:"71.6%",
				backgroundImage:"/img/FlechaAba.png"
			});
			
			FlechaAbaPeso.addEventListener("click",function(){
				if(parseInt(InputPeso.value) > 0){
					InputPeso.value = parseInt(InputPeso.value) - 1;
				}
			});
		    
		    viewModalPeso.add(FlechaArrPeso);
		    viewModalPeso.add(ModalPeso);
		    viewModalPeso.add(FlechaAbaPeso);
		    winModalPeso.add(viewModalPeso);
		    winModalPeso.open();
		});
		
		ViewPeso.add(InputPeso);
		Peso.add(ViewPeso);
		
		var Cantidad = Ti.UI.createView({
			width:"100%",
			layout:'horizontal',
			height:"12.3%",
			backgroundImage:"/img/cantidad.jpg"
		});
		
		var ViewCantidad = Ti.UI.createView({
			width:"9.4%",
			height:"100%",
			left:"71.6%",
			layout:"vertical",
		});
		
		var InputCantidad = Ti.UI.createTextField({
			width:"100%",
			height:"64%", 
			top:"18%",
			backgroundColor:"#d8d8d8",
			textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
			color:"#888888",
			value:1,
			editable:false
		});
		
		Cantidad.addEventListener("click",function(){
			
			var winModalCantidad = Ti.UI.createWindow({
		        backgroundColor : '#000',
		        width:'100%',
		        height:'100%',
		        opacity:0.40,
		    });
		 	
		 	var viewModalCantidad = Ti.UI.createView({
				width:"100%",
				height:"18.2%",
				layout:"vertical",
				top:"44.5%"
			});
			
		 	var FlechaArrCantidad = Ti.UI.createImageView({
				width:"9.4%",
				height:"26.2%",
				left:"71.6%",
				backgroundImage:"/img/FlechaArr.png"
			});
			
			FlechaArrCantidad.addEventListener("click",function(){
				InputCantidad.value = parseInt(InputCantidad.value) + 1;
			});
			
		    var ModalCantidad= Ti.UI.createView({
		        backgroundColor:"white",
		        width : '100%',
		        height : '47.6%',
		        backgroundColor:"white"
		    });
		    
		    ModalCantidad.addEventListener("click",function(){
				winModalCantidad.close();
			});
		    
		    var FlechaAbaCantidad = Ti.UI.createImageView({
				width:"9.4%",
				height:"26.2%",
				left:"71.6%",
				backgroundImage:"/img/FlechaAba.png"
			});
			
			FlechaAbaCantidad.addEventListener("click",function(){
				if(parseInt(InputCantidad.value) > 0){
					InputCantidad.value = parseInt(InputCantidad.value) - 1;
				}
			});
		    
		    viewModalCantidad.add(FlechaArrCantidad);
		    viewModalCantidad.add(ModalCantidad);
		    viewModalCantidad.add(FlechaAbaCantidad);
		    winModalCantidad.add(viewModalCantidad);
		    winModalCantidad.open();
		});
		
		ViewCantidad.add(InputCantidad);
		Cantidad.add(ViewCantidad);
		
		var DescripcionTitulo = Ti.UI.createImageView({
			width:"100%",
			height:"12.3%",
			backgroundImage:"/img/descripcionTitulo.jpg"
		});
		
		var DescripcionContenido = Ti.UI.createView({
			width:"100%",
			layout:'horizontal',
			height:"33.6%"
		});
		
		var LabelDescripcion =  Ti.UI.createLabel({
			left:"7%",
			width:"93%",
			height:"100%",
			color:"#5c5c5b",
			font:{
				fontFamily:"Noto Sans",
			},
			text:productos[i]['detalle'],
		});
		
		DescripcionContenido.add(LabelDescripcion);
		
		var Borde1 = Ti.UI.createView({
			width:"100%",
			height:"0.2%",
			backgroundColor:"#e8e8e8"
		});
		
		var Borde2 = Ti.UI.createView({
			width:"100%",
			height:"0.2%",
			backgroundColor:"#e8e8e8"
		});
		
		var Borde3 = Ti.UI.createView({
			width:"100%",
			height:"0.2%",
			backgroundColor:"#e8e8e8"
		});
		
		var Margen4 = Ti.UI.createView({
			width:"100%",
			height:"0.2%",
			backgroundColor:"#e8e8e8"
		});
		
		Main.add(Producto);
		Main.add(Borde1);
		Main.add(Peso);	
		Main.add(Borde2);	
		Main.add(Cantidad);	
		Main.add(Borde3);
		Main.add(DescripcionTitulo);	
		Main.add(Margen4);
		Main.add(DescripcionContenido);	
	}	
}
function productosPerroGato(){
	
	var vista = Alloy.createController('productos',{categoria: categorias[3], marca: "TODAS"}).getView();
	vista.open();
}

function productosPerro(){
	
	var vista = Alloy.createController('productos',{categoria: categorias[1], marca: "TODAS"}).getView();
	vista.open();
}

function productosGato(){
	
	var vista = Alloy.createController('productos',{categoria: categorias[2], marca: "TODAS"}).getView();
	vista.open();
}

function productosMarca(marca){
	
	var vista = Alloy.createController('productos',{categoria: categorias[3], marca: marca}).getView();
	vista.open();
}