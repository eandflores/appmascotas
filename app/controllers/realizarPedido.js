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

iniciarComponentes();
//iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,padre,producto);
iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,descuento,pedidos,notificaciones,'realizarPedido',null);
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

var pedidoTitulo = Ti.UI.createImageView({
	width: "72%",
	height:"85%",
	backgroundImage:"/img/envioPedido.jpg"
});

marcasView.add(flecha);
marcasView.add(pedidoTitulo);

var envioGratis = Ti.UI.createView({
	width:"100%",
	height:"4%",
	backgroundImage:"/img/envioGratis.jpg"
});

var mainScroll = Ti.UI.createScrollView({
	width:"100%",
	height:"29.9%",
	contentHeight: Ti.UI.SIZE,
	layout:'vertical',
	scrollType: 'vertical',
	showVerticalScrollIndicator:"true"
});

var envioScroll = Ti.UI.createScrollView({
	width:"100%",
	height:"32.3%",
	contentHeight: Ti.UI.SIZE,
	layout:'vertical',
	scrollType: 'vertical',
	showVerticalScrollIndicator:"true"
});

var labelPago1 = Ti.UI.createView({
	backgroundImage:"/img/flechaPagos.jpg",
	width:"100%",
	height:"55dp",
	layout:"vertical"
});

var tituloLabel1 = Ti.UI.createLabel({
	left:"7%",
	width:"80%",
	height:"35%",
	color:"#cc5122",		
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	text:"DIRECCIÓN"
});

var contenidoLabel1 = Ti.UI.createLabel({
	minimumFontSize: 8,
	left:"7%",
	width:"80%",
	height:"65%",
	color:"#5c5c5b",
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold",
		fontSize:12
	},
	id:"direccion"
});

labelPago1.add(tituloLabel1);
labelPago1.add(contenidoLabel1);

var labelPago2 = Ti.UI.createView({
	backgroundImage:"/img/flechaPagos.jpg",
	width:"100%",
	height:"48dp",
	layout:"vertical"
});

var tituloLabel2 = Ti.UI.createLabel({
	left:"7%",
	width:"80%",
	height:"35%",
	color:"#cc5122",		
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	text:"CORREO"
});

var contenidoLabel2 = Ti.UI.createLabel({
	minimumFontSize: 8,
	left:"7%",
	width:"80%",
	height:"65%",
	color:"#5c5c5b",
	font:{
		fontSize:12,
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	id:"correo"
});

labelPago2.add(tituloLabel2);
labelPago2.add(contenidoLabel2);

var labelPago3 = Ti.UI.createView({
	backgroundImage:"/img/flechaPagos.jpg",
	width:"100%",
	height:"48dp",
	layout:"vertical"
});

var tituloLabel3 = Ti.UI.createLabel({
	left:"7%",
	width:"80%",
	height:"35%",
	color:"#cc5122",		
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	text:"PAGO"
});

var contenidoLabel3 = Ti.UI.createLabel({
	minimumFontSize: 8,
	left:"7%",
	width:"80%",
	height:"65%",
	color:"#5c5c5b",
	font:{
		fontSize:12,
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	id:"pago"
});

labelPago3.add(tituloLabel3);
labelPago3.add(contenidoLabel3);

var labelPago4 = Ti.UI.createView({
	backgroundImage:"/img/flechaPagos.jpg",
	width:"100%",
	height:"48dp",
	layout:"vertical"
});

var tituloLabel4 = Ti.UI.createLabel({
	left:"7%",
	width:"80%",
	height:"35%",
	color:"#cc5122",		
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	text:"TELÉFONO"
});

var contenidoLabel4 = Ti.UI.createLabel({
	minimumFontSize: 8,
	left:"7%",
	width:"80%",
	height:"65%",
	color:"#5c5c5b",
	font:{
		fontSize:12,
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	id:"telefono"
});

labelPago4.add(tituloLabel4);
labelPago4.add(contenidoLabel4);

var labelPago5 = Ti.UI.createView({
	backgroundImage:"/img/flechaPagos.jpg",
	width:"100%",
	height:"48dp",
	layout:"vertical"
});

var tituloLabel5 = Ti.UI.createLabel({
	left:"7%",
	width:"80%",
	height:"35%",
	color:"#cc5122",		
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	text:"CUPÓN DE DESCUENTO"
});

var contenidoLabel5 = Ti.UI.createLabel({
	minimumFontSize: 8,
	left:"7%",
	width:"80%",
	height:"65%",
	color:"#5c5c5b",
	font:{
		fontSize:12,
		fontFamily:"Noto Sans",
		fontWeight:"bold"
	},
	id:"cupon"
});

labelPago5.add(tituloLabel5);
labelPago5.add(contenidoLabel5);

labelPago1.addEventListener('click',function(e){
	setDireccion();
});

labelPago2.addEventListener('click',function(e){
	setCorreo();
});

labelPago3.addEventListener('click',function(e){
	setMedioPago();
});

labelPago4.addEventListener('click',function(e){
	setTelefono();
});

labelPago5.addEventListener('click',function(e){
	setCupon();
});

envioScroll.add(labelPago1);
envioScroll.add(labelPago2);
envioScroll.add(labelPago3);
envioScroll.add(labelPago4);
envioScroll.add(labelPago5);

var nuevoProducto = Ti.UI.createView({
	height:"7.6%",
	width:"100%",
	backgroundImage:"/img/agregarProducto.jpg"
});

var footer = Ti.UI.createButton({
	backgroundColor:"#cc5122",
	color:"white",
	width:"100%",
	height:"7.6%",
	font: {
		fontWeight:"bold"
   },
   title:"REALIZAR PEDIDO"
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

nuevoProducto.addEventListener("click",function(){
	productosPerroGato();
});

footer.addEventListener("click",function(){
	gracias();
});

main.add(wrapper);
main.add(marcasView);
main.add(envioGratis);
main.add(mainScroll);
main.add(envioScroll);
main.add(nuevoProducto);
main.add(footer);

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: $.realizarPedido
});

var total_val = 0;

for(var i = 0; i < productos.length; i++){
	
	for(var j = 0; j < productos[i]['producto_precios'].length; j++){
		
		for(var k = 0; k < carro.length; k++){
			
			if(carro[k]['id'] ==  productos[i]['producto_precios'][j]['id']){
				
				var Main = Ti.UI.createView({
					width:"100%",
					layout:'horizontal',
					height:"116dp",
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
				
				var LabelDetalle = Ti.UI.createLabel({
					width:"60%",
					height:"60%",
					color:"#5c5c5b",
					top:"20%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : productos[i]['producto_precios'][j]['sku_description']+
							" x "+carro[k]['qty']
				});
				
				var valorProducto = carro[k]['qty'] * productos[i]['producto_precios'][j]['sku_price'];
				
				if(descuento != null){
					valorProducto = valorProducto - valorProducto * (descuento['percentage'] / 100);
				}	
				
				total_val = total_val + valorProducto;
						
				var LabelPrecio = Ti.UI.createLabel({
					width:"40%",
					height:"60%",
					color:"#5c5c5b",
					top:"20%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : "$"+formatCurrency(valorProducto)
				});
				
				LabelGroup.add(LabelNombre);
				LabelGroup.add(LabelDescripcion);
				
				LabelGroup2.add(LabelDetalle);
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
var total = Ti.UI.createView({
	height:"50dp",
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

var MargenTotal = Ti.UI.createView({
	width:"100%",
	height:"2px",
	backgroundColor:"#e8e8e8"
});

total.add(totalLabel);
mainScroll.add(total);	
mainScroll.add(MargenTotal);

totalLabel.text = "$"+formatCurrency(total_val);

if(medio != null){
	contenidoLabel3.text = medio['paym_name'];
}
else{
	contenidoLabel3.text = medios[0]['paym_name'];
	medio = medios[0];
}
if(descuento != null){
	contenidoLabel5.text = descuento['descripcion']+" "+descuento['percentage']+"%";
}
if(direccion != null){
	contenidoLabel1.text = direccion['direccion'];
}
else{
	if(direcciones.length > 0){
		contenidoLabel1.text = direcciones[direcciones.length-1]['direccion'];
		direccion = direcciones[direcciones.length-1];
	}
}

contenidoLabel4.text = usuario['cust_phone'];
contenidoLabel2.text = usuario['cust_email'];

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

function setDireccion(){
	Alloy.createController('direccion',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,padre: 'realizarPedido',producto: null}).getView().open();
}

function setCorreo(){
	Alloy.createController('email',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();

}

function setMedioPago(){	
	Alloy.createController('medioPago',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
}

function setTelefono(){	
	Alloy.createController('telefono',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
}

function setCupon(){
	Alloy.createController('descuento',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
}

function gracias(){
	
	if(medio != null && direccion != null){
		var xhr = Ti.Network.createHTTPClient({
			onload: function(e){
				try{
					var response = JSON.parse(this.responseText);
					var vista = Alloy.createController('gracias',{token: token,carro: [],marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView();
					vista.open();
				}
				catch(e){
					alert(e);
				}
			},
			onerror: function(e){
				alert(e);
			}
		});
		
		if(descuento != null){
			Ti.API.info(medio['id']+" "+JSON.stringify(carro)+" "+direccion['id']+" "+descuento["id"]);
			xhr.open('POST','http://tiendapet.cl/api/comprar?user_token='+token);
			xhr.send({"pago" : medio['id'],"cart" : JSON.stringify(carro),"direccion" : direccion['id'],"discount" : descuento["id"]}); 
		}
		else{
			Ti.API.info(medio['id']+" "+JSON.stringify(carro)+" "+direccion['id']);
			xhr.open('POST','http://tiendapet.cl/api/comprar?user_token='+token);
			xhr.send({"pago" : medio['id'],"cart" : JSON.stringify(carro),"direccion" : direccion['id']}); 
		}
	}
	else{
		alert("Debe seleccionar una dirección y medio de pago.");
	}
}

function atras(){
	$.realizarPedido.close();
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