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

var producto = args['producto'];

iniciarComponentes();
//iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,padre,producto);
iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,descuento,pedidos,notificaciones,'agregarDireccion',producto);
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

var direccionTitulo = Ti.UI.createImageView({
	width: "72%",
	height:"85%",
	backgroundImage:"/img/direccion.jpg"
});

var casa = Ti.UI.createImageView({
	left:"2%",
	top:"25%",
	bottom:"25%",
	width: "10%",
	height:"50%",
	backgroundImage:"/img/casa.png"
});

direccionTitulo.add(casa);
marcasView.add(flecha);
marcasView.add(direccionTitulo);

var margen = Ti.UI.createView({
	width:"100%",
	height:"3.1%",
	backgroundImage:"/img/Margen.jpg"
});

var mainView = Ti.UI.createView({
	width:"100%",
	height:"69.8%",
	contentHeight: Ti.UI.SIZE,
	layout:'vertical'
});

var input1 = Ti.UI.createView({
	width:"100%",
	height:"10%",
	top:"2%",
	bottom:"1%",
	layout:'horizontal'
});

var labelDireccion1 = Ti.UI.createLabel({
	width:"20.2%",
	left:"11%",
	height:"100%",
	color:"#7b7b7b",
	font: {
		fontWeight:"bold"
    },
    text:"Calle"
});

var calle = Ti.UI.createTextField({
	width:"60%",
	right:"8.8%",
	height:"100%",
	color:"#888888",
	font:{
		fontFamily:"Noto Sans",
		fontSize:'12sp'
	},
    backgroundColor:"#d8d8d8"
});

var input2 = Ti.UI.createView({
	width:"100%",
	height:"10%",
	top:"1%",
	bottom:"1%",
	layout:'horizontal',
	backgroundImage:"/img/labelOscuro.jpg"
});

var labelDireccion2 = Ti.UI.createLabel({
	width:"20.2%",
	left:"11%",
	height:"100%",
	color:"#7b7b7b",
	font: {
		fontWeight:"bold"
    },
    text:"Nro."
});

var numero = Ti.UI.createTextField({
	width:"60%",
	right:"8.8%",
	height:"100%",
	color:"#888888",
	font:{
		fontFamily:"Noto Sans",
		fontSize:'12sp'
	},
    backgroundColor:"#d8d8d8",
    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var input3 = Ti.UI.createView({
	width:"100%",
	height:"10%",
	top:"1%",
	bottom:"1%",
	layout:'horizontal'
});

var labelDireccion3 = Ti.UI.createLabel({
	width:"20.2%",
	left:"11%",
	height:"100%",
	color:"#7b7b7b",
	font: {
		fontWeight:"bold"
    },
    text:"Depto."
});

var departamento = Ti.UI.createTextField({
	width:"60%",
	right:"8.8%",
	height:"100%",
	color:"#888888",
	font:{
		fontFamily:"Noto Sans",
		fontSize:'12sp'
	},
    backgroundColor:"#d8d8d8",
    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var input4 = Ti.UI.createView({
	width:"100%",
	height:"10%",
	top:"1%",
	bottom:"1%",
	layout:'horizontal',
	backgroundImage:"/img/labelOscuro.jpg"
});

var labelDireccion4 = Ti.UI.createLabel({
	width:"20.2%",
	left:"11%",
	height:"100%",
	color:"#7b7b7b",
	font: {
		fontWeight:"bold"
    },
    text:"Esquina"
});

var esquina = Ti.UI.createTextField({
	width:"60%",
	right:"8.8%",
	height:"100%",
	color:"#888888",
	font:{
		fontFamily:"Noto Sans",
		fontSize:'12sp'
	},
    backgroundColor:"#d8d8d8"
});

var input5 = Ti.UI.createView({
	width:"100%",
	height:"10%",
	top:"1%",
	bottom:"1%",
	layout:'horizontal'
});

var labelDireccion5 = Ti.UI.createLabel({
	width:"20.2%",
	left:"11%",
	height:"100%",
	color:"#7b7b7b",
	font: {
		fontWeight:"bold"
    },
    text:"Ciudad"
});

var ciudad = Ti.UI.createTextField({
	width:"60%",
	right:"8.8%",
	height:"100%",
	color:"#888888",
	font:{
		fontFamily:"Noto Sans",
		fontSize:'12sp'
	},
    backgroundColor:"#d8d8d8"
});

var input6 = Ti.UI.createView({
	width:"100%",
	height:"10%",
	top:"1%",
	bottom:"1%",
	layout:'horizontal',
	backgroundImage:"/img/labelOscuro.jpg"
});

var labelDireccion6 = Ti.UI.createLabel({
	width:"20.2%",
	left:"11%",
	height:"100%",
	color:"#7b7b7b",
	font: {
		fontWeight:"bold"
    },
    text:"Comuna"
});

var comuna = Ti.UI.createTextField({
	width:"60%",
	right:"8.8%",
	height:"100%",
	color:"#888888",
	font:{
		fontFamily:"Noto Sans",
		fontSize:'12sp'
	},
    backgroundColor:"#d8d8d8"
});

var input7 = Ti.UI.createView({
	width:"100%",
	height:"10%",
	top:"1%",
	bottom:"1%",
	layout:'horizontal'
});

var labelDireccion7 = Ti.UI.createLabel({
	width:"20.2%",
	left:"11%",
	height:"100%",
	color:"#7b7b7b",
	font: {
		fontWeight:"bold"
    },
    text:"Teléfono"
});

var telefono = Ti.UI.createTextField({
	width:"60%",
	right:"8.8%",
	height:"100%",
	color:"#888888",
	font:{
		fontFamily:"Noto Sans",
		fontSize:'12sp'
	},
    backgroundColor:"#d8d8d8",
    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

input1.add(labelDireccion1);
input1.add(calle);
input2.add(labelDireccion2);
input2.add(numero);
input3.add(labelDireccion3);
input3.add(departamento);
input4.add(labelDireccion4);
input4.add(esquina);
input5.add(labelDireccion5);
input5.add(ciudad);
input6.add(labelDireccion6);
input6.add(comuna);
input7.add(labelDireccion7);
input7.add(telefono);

mainView.add(input1);
mainView.add(input2);
mainView.add(input3);
mainView.add(input4);
mainView.add(input5);
mainView.add(input6);
mainView.add(input7);

var footer = Ti.UI.createButton({
	backgroundColor:"#cc5122",
	color:"white",
	width:"100%",
	height:"7.6%",
	font: {
		fontWeight:"bold"
   },
   title:"AGREGAR"
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
	guardar();
});

main.add(wrapper);
main.add(marcasView);
main.add(margen);
main.add(mainView);
main.add(footer);

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: $.agregarDireccion
});

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

function guardar(){ 
	var direccionString = "";
	
	if(calle.value != ""){
		direccionString += calle.value+" ";
	}
	if(numero.value != ""){
		direccionString += numero.value+" ";
	}
	if(departamento.value != ""){
		direccionString += departamento.value+" ";
	}
	if(esquina.value != ""){
		direccionString += esquina.value+" ";
	}
	if(telefono.value != ""){
		direccionString += telefono.value;
	}
	
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				var response = JSON.parse(this.responseText);
				
				cargarDirecciones();
			}
			catch(e){
				alert(e);
			}
		},
		onerror: function(e){
			alert(e);
		}
	});
	
	xhr.open('POST','http://tiendapet.cl/api/usuario/direcciones?user_token='+token);
	xhr.send({"calle" : direccionString,"comuna" : comuna.value,"ciudad" : ciudad.value}); 
}

function cargarDirecciones(){
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				direcciones = JSON.parse(this.responseText);
			
				Alloy.createController('direccion',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
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
	$.agregarDireccion.close();
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
