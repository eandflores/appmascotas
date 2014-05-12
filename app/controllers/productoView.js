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

var medio = args['medio'];
var direccion = args['direccion'];
var correo = args['correo'];
var telefono = args['telefono'];

var cant_productos = 0;

for(var i = 0; i < marcas.length; i++){
	
	var ImageViewMarca = Ti.UI.createImageView({
		image : marcas[i]['brand_logo'],
		defaultImage: "/img/Doguitos.jpg",
		width:"250px",
		id: marcas[i]['id'],
		height:"100%"
	});
	
	ImageViewMarca.addEventListener("click",function(){
		productosMarca(this['id']);
	});
	
	$.marcasScroll.add(ImageViewMarca);	
	
}

var producto;
var indice;
var productoPrecio;
var productosPrecioProducto = new Array;

for(var i = 0; i < productos.length; i++){
	for(var j = 0; j < productos[i]['producto_precios'].length; j++){
		if(productos[i]['producto_precios'][j]['id'] == args["producto"]){
			productoPrecio = productos[i]['producto_precios'][j];
			producto = productos[i];
		}
	}
}		
/*	
productosPrecioProducto = productosPrecioProducto.sort(function(a,b){ 
	return a['peso'] - b['peso'];
});
*/
productosPrecioProducto = producto['producto_precios'];

for(var i = 0; i < productosPrecioProducto.length; i++){
	if(productosPrecioProducto[i]['id'] == args["producto"]){
		indice = i;
	}
}

var Producto = Ti.UI.createView({
	width:"100%",
	layout:'horizontal',
	height:"28.7%"
});

var ImageViewProducto = Ti.UI.createImageView({
	image : producto['prod_pic'],
	defaultImage: "/img/Perro1.jpg",
	width:"25%",
	height:"100%"
});

var LabelGroup = Ti.UI.createView({
	width:"75%",
	height:"100%",
	layout:"vertical",
	top:"0%"
});

var LabelNombre = Ti.UI.createLabel({
	color:"#cc5122",
	width:"100%",
	height:"20%",
	top:"20%",
	left:"8%",
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	text : producto['brand']
});

var LabelDescripcion = Ti.UI.createLabel({
	color:"gray",
	width:"100%",
	height:"20%",
	top:"0%",
	left:"8%",
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	text : producto['prod_name']
});

var LabelPrecio = Ti.UI.createLabel({
	width:"100%",
	height:"20%",
	color:"#5c5c5b",
	top:"0%",
	left:"8%",
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	text : "$"+productoPrecio['sku_price']
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
	width:"21.4%",
	height:"100%",
	left:"65.6%",
	layout:"vertical",
});

var InputPeso = Ti.UI.createTextField({
	width:"100%",
	height:"64%", 
	top:"18%",
	backgroundColor:"#d8d8d8",
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:"#888888",
	value:productoPrecio['sku_description'],
	editable:false
});

Peso.addEventListener("click",function(){
	
	if(Titanium.Platform.name == "iPhone OS"){
		var winModalPeso = Ti.UI.createWindow({
	        backgroundColor : '#000',
	        width:'100%',
	        top: "3.5%",
	        height:'96.5%',
	        opacity:0.40
	        
	    });
	    
	    var viewModalPeso = Ti.UI.createView({
			width:"100%",
			height:"18.7%",
			layout:"vertical",
			top:"36%"
		});
	}
	else{
		var winModalPeso = Ti.UI.createWindow({
	        backgroundColor : '#000',
	        width:'100%',
	        height:'100%',
	        opacity:0.40,
	        navBarHidden: "true"
	    });
	    
	    var viewModalPeso = Ti.UI.createView({
			width:"100%",
			height:"18.7%",
			layout:"vertical",
			top:"36%"
		});
	}
	
 	var FlechaArrPeso = Ti.UI.createImageView({
		width:"9.4%",
		height:"26.2%",
		left:"71.6%",
		backgroundImage:"/img/FlechaArr.png"
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
	
	FlechaArrPeso.addEventListener("click",function(){
		if(indice < (productosPrecioProducto.length - 1)){
			indice = indice + 1;
			productoPrecio = productosPrecioProducto[indice];
			InputPeso.value = productoPrecio['sku_description'];
			LabelPrecio.setText(productoPrecio['sku_price']);
		}
	});
	
	FlechaAbaPeso.addEventListener("click",function(){
		if(indice > 0){
			indice = indice - 1;
			productoPrecio = productosPrecioProducto[indice];
			InputPeso.value = productoPrecio['sku_description'];
			LabelPrecio.setText(productoPrecio['sku_price']);
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
	width:"21.4%",
	height:"100%",
	left:"65.6%",
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
	
	if(Titanium.Platform.name == "iPhone OS"){
		var winModalCantidad = Ti.UI.createWindow({
	        backgroundColor : '#000',
	        width:'100%',
	        top: "3.5%",
	        height:'96.5%',
	        opacity:0.40
	    });
	    
	    var viewModalCantidad = Ti.UI.createView({
			width:"100%",
			height:"18.7%",
			layout:"vertical",
			top:"45%"
		});
	}
	else{
		var winModalCantidad = Ti.UI.createWindow({
	        backgroundColor : '#000',
	        width:'100%',
	        height:'100%',
	        opacity:0.40,
	        navBarHidden: "true"
	    });
	    
	    var viewModalCantidad = Ti.UI.createView({
			width:"100%",
			height:"18.7%",
			layout:"vertical",
			top:"45%"
		});
	}
	
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
		if(parseInt(InputCantidad.value) > 1){
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
	text:producto['prod_text'],
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

var Borde4 = Ti.UI.createView({
	width:"100%",
	height:"0.2%",
	backgroundColor:"#e8e8e8"
});

$.Main.add(Producto);
$.Main.add(Borde1);
$.Main.add(Peso);	
$.Main.add(Borde2);	
$.Main.add(Cantidad);	
$.Main.add(Borde3);
$.Main.add(DescripcionTitulo);	
$.Main.add(Borde4);
$.Main.add(DescripcionContenido);	

function productosPerroGato(){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio,direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[3], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosPerro(){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[1], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosGato(){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[2], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosMarca(marca){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[3], marca: marca,nombre: "TODOS",pagina: 1}).getView().open();
}


function productosNombre(nombre){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: "TODAS", marca: "TODAS",nombre: nombre,nombre: "TODOS",pagina: 1}).getView().open();
}

function carroCompra(){
	
	carro.push({'id' : productoPrecio['id'], 'qty' : InputCantidad.value});
	Alloy.createController('carroCompra',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono}).getView().open();
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