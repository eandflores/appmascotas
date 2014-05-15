var args = arguments[0] || {};

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "Perro";
categorias[2] = "Gato";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";

var token = args['token'];
var carro = args['carro'];

var marcas = args['marcas'];
var productos = args['productos'];
var medios = args['medios'];
var direcciones = args['direcciones'];

var usuario = args['usuario'];
var medio = args['medio'];
var direccion = args['direccion'];

var categoria = args['categoria'];
var marca = args['marca'];
var nombre = args['nombre'];
var pagina = args['pagina'];

var productosPaginacion = 15;

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
        opacity:0.9,
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

ordenarProductos();

function ordenarProductos(){

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
		
		/*
		if(Ti.App.categoria_actual == "TODAS"){
			marcasScroll.add(ImageViewMarca);	
		}
		else if(Ti.App.categoria_actual == Ti.App.marcas[i]["categoria"]){
			marcasScroll.add(ImageViewMarca);	
		}
		*/
		$.marcasScroll.add(ImageViewMarca);
	}
	
	$.perrogato.backgroundImage = "/img/perrogato.jpg";
	$.perro.backgroundImage = "/img/perro.jpg";
	$.gato.backgroundImage = "/img/gato.jpg";
		
	if(categoria == "TODAS"){
		$.perrogato.backgroundImage = "/img/perrogato2.jpg";
	}
	else if(categoria == "Perro"){
		$.perro.backgroundImage = "/img/perro2.jpg";
	}
	else if(categoria == "Gato"){
		$.gato.backgroundImage = "/img/gato2.jpg";
	}
	
	if(nombre != "TODOS"){
		var resultados = Ti.UI.createView({
			width:"100%",
			height:"100px",
			layout:"vertical"
		});
		
		var resultadoProducto = Ti.UI.createLabel({
			width:"100%",
			height:"50%",
			textAlign:'center',
			color:"gray",
			font: {
		        fontSize: '12sp',
				fontFamily:"Noto Sans",
				fontWeight:"bold"
		    }
		});
		
		var resultadoNombre = Ti.UI.createLabel({
			width:"100%",
			height:"50%",
			textAlign:'center',
			text:"CON EL NOMBRE DE : "+nombre,
			color:"gray",
			font: {
		        fontSize: '12sp',
				fontFamily:"Noto Sans",
				fontWeight:"bold"
		    }
		});
		
		resultados.add(resultadoProducto);
		resultados.add(resultadoNombre);
		$.mainScroll.add(resultados);
	}
	
	var cant_productos = 0;
	var productos_act = [];
	
	for(var i = 0; i < productos.length; i++){
			
		if(nombre == "TODOS"){
			if((categoria == "TODAS") && (marca == "TODAS")){
				productos_act.push(productos[i]);
			}
			else if((categoria == "TODAS") && (marca != "TODAS")){
				if(marca == productos[i]['marca_id']){	
					productos_act.push(productos[i]);
				}
			}
			else if((categoria != "TODAS") && (marca == "TODAS")){
				if(categoria == productos[i]['tipo']){
					productos_act.push(productos[i]);
				}
			}
			else if((categoria != "TODAS") && (marca != "TODAS")){
				if((categoria == productos[i]['tipo']) && (marca == productos[i]['marca_id'])){
					productos_act.push(productos[i]);
				}	
			}
		}
		else{
			if(productos[i]['brand'].toLowerCase().match(nombre.toLowerCase()) != null || productos[i]['prod_name'].toLowerCase().match(nombre.toLowerCase()) != null){
				cant_productos = cant_productos + 1;
				productos_act.push(productos[i]);
			}
		}
	}
	
	var paginas = 0; 
	
	if((productos_act.length % productosPaginacion) != 0){
		paginas = parseInt(productos_act.length/productosPaginacion) + 1;
	}
	else{
		paginas = parseInt(productos_act.length/productosPaginacion);
	}
	
	for(var i = 0; i < paginas; i++){
		var paginaLabel = Ti.UI.createLabel({
			width:"48px",
			height:"100%",
			text: (i+1),
			color:"white",
			textAlign: "center",	
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold"
			},
			id: (i+1)
		});
		
		paginaLabel.addEventListener("click",function(){
			productosPagina(this['id']);
		});
		
		var margenPagina = Ti.UI.createView({
			width:"2px",
			height:"70%",
			top:"15%",
			bottom:"15%%",
			backgroundColor:"#e67c53",
		});
			
		$.paginasView.add(paginaLabel);
		$.paginasView.add(margenPagina);
	}
	
	for(var i = (productosPaginacion*(pagina-1));i < (pagina*productosPaginacion); i++){
		
		if(i < productos_act.length){
			
			for(var j = 0; j < productos_act[i]['producto_precios'].length; j++){
				
				var Main = Ti.UI.createView({
						width:"100%",
					layout:'horizontal',
					height:"232px",
					id: productos_act[i]['producto_precios'][j]['id']
				});
				
				var Margen = Ti.UI.createView({
					width:"100%",
					height:"2px",
					backgroundColor:"#e8e8e8"
				});
				
				var ImageViewProducto = Ti.UI.createImageView({
					image : productos_act[i]['prod_pic'],
					defaultImage: "/img/Perro1.jpg",
					width:"25%",
					height:"100%"
				});
				
				var LabelGroup = Ti.UI.createView({
					width:"68%",
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
					text : productos_act[i]['brand']
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
					text : productos_act[i]['prod_name']
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
					text : productos_act[i]['producto_precios'][j]['sku_description']+
						" x $"+productos_act[i]['producto_precios'][j]['sku_price']
				});
				
				var ImageViewFlecha = Ti.UI.createImageView({
					width:"7%",
					height:"100%",
					backgroundImage : "/img/Flecha.jpg"
				});
				
				LabelGroup.add(LabelNombre);
				LabelGroup.add(LabelDescripcion);
				LabelGroup.add(LabelPrecio);
				
				Main.add(ImageViewProducto);
				Main.add(LabelGroup);
				Main.add(ImageViewFlecha);
				
				Main.addEventListener("click",function(){
					productosView(this['id']);
				});
		
				$.mainScroll.add(Main);	
				$.mainScroll.add(Margen);	
			}
		}
	}
	
	winCargando.close();
	
	//Por si no se cierra la ventana
	setTimeout(function(){
	   winCargando.close();
	}, 2000);

	if(nombre != "TODOS"){
		resultadoProducto.text = "SE HAN ENCONTRADO "+cant_productos+" PRODUCTOS";
	}
}

function productosPerroGato(){
	
	winCargando.open();
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	$.paginasView.removeAllChildren();
	
	categoria = categorias[3];
	marca = "TODAS";
	nombre = "TODOS";
	pagina = 1;
	
	ordenarProductos();
}

function productosPerro(){
	
	winCargando.open();
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	$.paginasView.removeAllChildren();
	
	categoria = categorias[1];
	marca = "TODAS";
	nombre = "TODOS";
	pagina = 1;
	
	ordenarProductos();
}

function productosGato(){
	
	winCargando.open();
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	$.paginasView.removeAllChildren();
	
	categoria = categorias[2];
	marca = "TODAS";
	nombre = "TODOS";
	pagina = 1;
	
	ordenarProductos();
}

function productosMarca(marcaParam){
	
	winCargando.open();
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	$.paginasView.removeAllChildren();
	
	categoria = categorias[3];
	nombre = "TODOS";
	pagina = 1;
		
	if(marca == marcaParam){
		marca = "TODAS";
		ordenarProductos();	
	}
	else{
		marca = marcaParam;
		ordenarProductos();
	}
}

function productosNombre(nombreParam){
	
	winCargando.open();
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	$.paginasView.removeAllChildren();
	
	categoria = categorias[3];
	marca = "TODAS";
	nombre = nombreParam;
	pagina = 1;
	
	ordenarProductos();
}

function productosPagina(paginaParam){
	
	winCargando.open();
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	$.paginasView.removeAllChildren();
	
	categoria = categoria;
	marca = marca;
	nombre = nombre;
	pagina = paginaParam;
	
	ordenarProductos();
}

function productosView(producto){
	
	var vista = Alloy.createController('productoView',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,producto: producto}).getView();
	vista.open();
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
		
		$.wrapper.opacity = 0;
	}
	
	viewModal.add(buscar);
	inputsBuscar.add(lupa);
	inputsBuscar.add(cerrar);
	viewModal.add(inputsBuscar);
	winModal.add(viewModal);
	winModal.open();
}