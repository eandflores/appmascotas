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
var descuento = args['descuento'];

var pedidos = args['pedidos'];
var notificaciones = args['notificaciones'];

var padre = args['padre'];
var producto = args['producto'];

var total_val = 0;

iniciarComponentes();
//iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,padre,producto);
iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,descuento,pedidos,notificaciones,'carroCompra',null);
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
					height:"121dp",
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
					width:"92.5%",
					left:'7.5%',
					height:"60%",
					layout:"vertical",
					top:"0%"
				});
				
				var LabelGroup1 = Ti.UI.createView({
					width:"100%",
					height:"50%",
					layout:"horizontal",
					top:"0%"
				});
				
				var LabelNombre = Ti.UI.createLabel({
					color:"#cc5122",
					width:"82%",
					height:"100%",
					top:"20%",
					left:"8%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : productos[i]['brand']
				});
				
				var LabelBorrar = Ti.UI.createView({
					id: carro[k]['id'],
					width:"10%",
					height:"80%",
					right:"0%",
				});
				
				var LabelBorrarInt = Ti.UI.createImageView({
					id: carro[k]['id'],
					width:"auto",
					height:"100%",
					image: '/img/eliminar.png'
				});
				
				LabelBorrar.addEventListener("click",function(){
					productosQuitar(this['id']);
				});
				
				LabelBorrar.add(LabelBorrarInt);
				
				var LabelDescripcion = Ti.UI.createLabel({
					color:"gray",
					width:"100%",
					height:"50%",
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
					minimumFontSize: 8,
					width:"33%",
					height:"50%",
					color:"#5c5c5b",
					top:"25%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold",
						fontSize:13
					},
					text : productos[i]['producto_precios'][j]['sku_description']
				});
				
				var LabelCantidad = Ti.UI.createLabel({
					minimumFontSize: 8,
					width:"33%",
					height:"50%",
					color:"#5c5c5b",
					top:"25%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold",
						fontSize:13
					},
					text :"Cant "+carro[k]['qty']
				});
				
				var LabelPrecio = Ti.UI.createLabel({
					minimumFontSize: 8,
					width:"33%",
					height:"50%",
					color:"#5c5c5b",
					top:"25%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold",
						fontSize:13
					},
					text : "$"+formatCurrency(carro[k]['qty'] * productos[i]['producto_precios'][j]['sku_price'])
				});
				
				LabelGroup1.add(LabelNombre);
				LabelGroup1.add(LabelBorrar);
				
				LabelGroup.add(LabelGroup1);
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

totalLabel.text = "$"+formatCurrency(total_val);

function productosNombre(nombre){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: "TODAS", marca: "TODAS",nombre: nombre,pagina: 1}).getView().open();
}

function productosPerroGato(){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[3], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosPerro(){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[1], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosGato(){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[2], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function realizarPedido(){

	if(carro.length > 0){
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
	else{
		alert("Debe agregar al menos un producto en el carro de compras.");
	}
}

function cargarDirecciones(medios){
	
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				direcciones = JSON.parse(this.responseText);
			
				Alloy.createController('realizarPedido',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
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

function atras(){
	$.carroCompra.close();
}

function busquedaProducto(){
	buscarProducto();
	
	
	buscar.addEventListener("click",function(){
		if(buscar.value == "¿Que es lo que buscas?")
			buscar.value = "";
	});
	
	lupa.addEventListener("click",function(){
		if(buscar.value != "¿Que es lo que buscas?" && buscar.value != "")
			productosNombre(buscar.value);
		else if(buscar.value == "")
			buscar.value = "¿Que es lo que buscas?";
	});
}

function productosQuitar(id){
	
	var carro2 = [];
	
	for(var i=0;i< carro.length;i++){
		if(carro[i]['id'] != id)
			carro2.push(carro[i]);
	}
	
	Alloy.createController('carroCompra',{token : token,carro: carro2,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
}