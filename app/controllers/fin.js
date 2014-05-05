var win =  $.gracias;

var args = arguments[0] || {};

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "Perro";
categorias[2] = "Gato";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";
carro = args['carro'];
token = args['token'];

marcas = args['marcas'];
productos = args['productos'];
medios = args['medios'];
direcciones = args['direcciones'];

medio = args['medio'];
direccion = args['direccion'];
correo = args['correo'];
telefono = args['telefono'];


var marcasScroll = $.marcasScroll;
marcasScroll.removeAllChildren();

for(var i = 0; i < marcas.length; i++){
	var ImageViewMarca = Ti.UI.createImageView({
		backgroundImage : marcas[i]['banner'],
		width:"153.6px",
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
	marcasScroll.add(ImageViewMarca);
}

function productosPerroGato(){
		
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio,direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[3], marca: "TODAS"}).getView();
	vista.open();
}

function productosPerro(){
	
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[1],marca: "TODAS"}).getView();
	vista.open();
}

function productosGato(){
	
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[2], marca: "TODAS"}).getView();
	vista.open();
}

function productosMarca(marca){
	
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[3], marca: marca}).getView();
	vista.open();
}