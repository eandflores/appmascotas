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

var total_val = 0;

iniciarComponentes();
//iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,padre,producto);
iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,'carroCompra',null);
cargarLoading();

var marcasView = Ti.UI.createView({
	backgroundImage:"/img/fondoMarcas.jpg",
	width:"100%",
	height:"10%",
	layout:"horizontal"
});

var flecha = Ti.UI.createImageView({
	width:"14%",
	height:"85%",
	backgroundImage:"/img/FlechaIzq.jpg"
});

flecha.addEventListener('click',function(e){
	atras();
});

var carroImage = Ti.UI.createImageView({
	width: "72%",
	height:"85%",
	backgroundImage:"/img/carro.jpg"
});

marcasView.add(flecha);
marcasView.add(carroImage);

var mainScroll = Ti.UI.createScrollView({
	width:"100%",
	height:"61.9%",
	contentHeight: Ti.UI.SIZE,
	layout:'vertical',
	scrollType: 'vertical',
	showVerticalScrollIndicator:"true"
});

var total = Ti.UI.createView({
	height:"10.9%",
	width:"100%",
	backgroundImage:"/img/totalFondo.jpg"
});

var totalLabel = Ti.UI.createLabel({
	height:"100%",
	right:"5.6%",
	color:"gray",
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	}
});

total.add(totalLabel);

var footer = Ti.UI.createButton({
	backgroundColor:"#cc5122",
	color:"white",
	width:"100%",
	height:"7.6%",
	font: {
		fontWeight:"bold"
   },
   title:"HACER PEDIDO"
});

menuImg.addEventListener('click',function(e){
	$.drawermenu.showhidemenu();
});

perrogato.addEventListener("click",function(){
	productosPerroGato();
});

perro.addEventListener("click",function(){
	productosPerro();
});

gato.addEventListener("click",function(){
	productosGato();
});

lupaImg.addEventListener("click",function(){
	busquedaProducto();
});

footer.addEventListener("click",function(){
	realizarPedido();
});

function busquedaProducto(){
	buscarProducto();
	lupa.addEventListener("click",function(){
		productosNombre(buscar.value);
	});
}

main.add(wrapper);
main.add(marcasView);
main.add(mainScroll);
main.add(total);
main.add(footer);

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: $.carroCompra
});

for(var i = 0; i < productos.length; i++){
	
	for(var j = 0; j < productos[i]['producto_precios'].length; j++){
		
		for(var k = 0; k < carro.length; k++){
			
			if(carro[k]['id'] ==  productos[i]['producto_precios'][j]['id']){
				
				total_val = total_val + (carro[k]['qty'] * productos[i]['producto_precios'][j]['sku_price']);
				
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
				
				var ImageViewProducto = Ti.UI.createView({
					width:"25%",
					height:"100%",
					backgroundColor:"white"
				});
				
				var ImageViewProducto_int = Ti.UI.createImageView({
					image : productos[i]['prod_pic'],
					defaultImage: "/img/Perro1.jpg",
					width:"auto",
					height:"100%"
				});
				
				ImageViewProducto.add(ImageViewProducto_int);
				
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
				
				var LabelPeso = Ti.UI.createLabel({
					width:"35%",
					height:"50%",
					color:"#5c5c5b",
					top:"25%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : productos[i]['producto_precios'][j]['sku_description']
				});
				
				var LabelCantidad = Ti.UI.createLabel({
					width:"35%",
					height:"50%",
					color:"#5c5c5b",
					top:"25%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text :"Cant "+carro[k]['qty']
				});
				
				var LabelPrecio = Ti.UI.createLabel({
					width:"30%",
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
				
				LabelGroup2.add(LabelPeso);
				LabelGroup2.add(LabelCantidad);
				LabelGroup2.add(LabelPrecio);
				
				ViewLabels.add(LabelGroup);
				ViewLabels.add(LabelGroup2);
				
				Main.add(ImageViewProducto);
				Main.add(ViewLabels);
				
				mainScroll.add(Main);	
				mainScroll.add(Margen);
			}
		}
	}
}

totalLabel.text = "$"+total_val;

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

function realizarPedido(){

	if(medios.length > 0){
		cargarDirecciones(medios);
	}
	else{
		var xhr = Ti.Network.createHTTPClient({
			onload: function(e){
				try{
					medios = JSON.parse(this.responseText);
					
					cargarDirecciones(medios);
				}
				catch(e){
					alert("Error de conexión con el servidor.");
				}
			},
			onerror: function(e){
				alert("Error de conexión con el servidor.");
			}
		});
		xhr.open('GET','http://tiendapet.cl/api/pagos');
		xhr.send();
	}
}

function cargarDirecciones(medios){
	if(direcciones.length > 0){
		Alloy.createController('realizarPedido',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion}).getView().open();
	}
	else{
		var xhr = Ti.Network.createHTTPClient({
			onload: function(e){
				try{
					direcciones = JSON.parse(this.responseText);
				
					Alloy.createController('realizarPedido',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion}).getView().open();
				}
				catch(e){
					alert("Error de conexión con el servidor.");
				}
			},
			onerror: function(e){
				alert("Error de conexión con el servidor.");
			}
		});
		xhr.open('GET','http://tiendapet.cl/api/usuario/direcciones?user_token='+token);
		xhr.send();
	}
}

function atras(){
	$.carroCompra.close();
}
