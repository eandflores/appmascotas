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

var medio = args['medio'];
var direccion = args['direccion'];
var correo = args['correo'];
var telefono = args['telefono'];

var categoria = args['categoria'];
var marca = args['marca'];
var nombre = args['nombre'];

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

ordenarProductos(categoria,marca,nombre);

function ordenarProductos(categoria,marca,nombre){

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
	
	for(var i = 55; i < 65; i++){
		
		for(var j = 0; j < productos[i]['producto_precios'].length; j++){
			
			if(nombre == "TODOS"){
				if((categoria == "TODAS") && (marca == "TODAS")){
					
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
						text : productos[i]['brand']
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
						text : productos[i]['prod_name']
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
						text : productos[i]['producto_precios'][j]['sku_description']+
							" x $"+productos[i]['producto_precios'][j]['sku_price']
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
				else if((categoria == "TODAS") && (marca != "TODAS")){
					if(marca == productos[i]['marca_id']){	
						
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
							text : productos[i]['brand']
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
							text : productos[i]['prod_name']
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
							text : productos[i]['producto_precios'][j]['sku_description']+
								" x $"+productos[i]['producto_precios'][j]['sku_price']
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
				else if((categoria != "TODAS") && (marca == "TODAS")){
					if(categoria == productos[i]['tipo']){
						
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
							text : productos[i]['brand']
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
							text : productos[i]['prod_name']
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
							text : productos[i]['producto_precios'][j]['sku_description']+
								" x $"+productos[i]['producto_precios'][j]['sku_price']
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
				else if((categoria != "TODAS") && (marca != "TODAS")){
					if((categoria == productos[i]['tipo']) && (marca == productos[i]['marca_id'])){
						
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
							text : productos[i]['brand']
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
							text : productos[i]['prod_name']
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
							text : productos[i]['producto_precios'][j]['sku_description']+
								" x $"+productos[i]['producto_precios'][j]['sku_price']
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
			else{
				if(productos[i]['brand'].toLowerCase().match(nombre.toLowerCase()) != null || productos[i]['prod_name'].toLowerCase().match(nombre.toLowerCase()) != null){
					cant_productos = cant_productos + 1;
					
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
						text : productos[i]['brand']
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
						text : productos[i]['prod_name']
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
						text : productos[i]['producto_precios'][j]['sku_description']+
							" x $"+productos[i]['producto_precios'][j]['sku_price']
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
	//$.mainScroll.setOpacity(0);
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	
	ordenarProductos(categorias[3],"TODAS","TODOS");
}

function productosPerro(){
	
	winCargando.open();
	//$.mainScroll.setOpacity(0);
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	
	ordenarProductos(categorias[1],"TODAS","TODOS");
}

function productosGato(){
	
	winCargando.open();
	//$.mainScroll.setOpacity(0);
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	
	ordenarProductos(categorias[2],"TODAS","TODOS");
}

function productosMarca(marcaParam){
	
	winCargando.open();
	//$.mainScroll.setOpacity(0);
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
		
	if(marca == marcaParam){
		ordenarProductos("TODAS","TODAS","TODOS");	
	}
	else{
		ordenarProductos("TODAS",marcaParam,"TODOS");
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

function productosNombre(nombre){
	
	winCargando.open();
	//$.mainScroll.setOpacity(0);
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	
	ordenarProductos("TODAS","TODAS",nombre);
}

function productosView(producto){
	
	winCargando.open();
	//$.mainScroll.setOopacity(0);
	$.mainScroll.removeAllChildren();
	$.marcasScroll.removeAllChildren();
	
	var vista = Alloy.createController('productoView',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,producto: producto}).getView();
	winCargando.close();
	vista.open();
}