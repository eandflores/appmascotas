// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var main = null;
var wrapper = null;
var menuImg = null;
var perrogato = null;
var perro = null;
var gato = null;
var lupaImg = null;

function iniciarComponentes(){
	//==========Main===============
	main=Ti.UI.createView({
		id:"main",
		backgroundColor:"white",
		layout:"vertical",
		backgroundImage:"/img/Fondo.jpg"
	});
	//=========End Main============
	
	//=========Wrapper=============
	wrapper = Ti.UI.createView({
		id:"wrapper",
		backgroundColor:"#cc5122",
		width: "100%",
		height: "9.5%",
		layout: "horizontal"
	});
	
	menuImg = Ti.UI.createImageView({
		id:"menuImg",
		width:"14%",
		height:"100%",
		backgroundImage:"/img/menu.jpg"
	});
	
	perrogato = Ti.UI.createImageView({
		id:"perrogato",
		width:"28%",
		height:"100%",
		backgroundImage:"/img/perrogato.jpg"
	});
			
	perro = Ti.UI.createImageView({
		id:"perro",
		width:"22%",
		height:"100%",
		backgroundImage:"/img/perro.jpg"
	});
	
	gato= Ti.UI.createImageView({
		id:"gato",
		width:"22%",
		height:"100%",
		backgroundImage:"/img/gato.jpg"
	});
	
	lupaImg = Ti.UI.createImageView({
		id:"lupaImg",
		width:"14%",
		height:"100%",
		backgroundImage:"/img/lupa.jpg"
	});
	
	wrapper.add(menuImg);
	wrapper.add(perrogato);
	wrapper.add(perro);
	wrapper.add(gato);
	wrapper.add(lupaImg);
	
	//=========End Wrapper===========
}

//=========Menu=================

var menu = null;

function iniciarMenu(productos){
	menu = Alloy.createController('menu').getView();
	
	// 2 = Direcciones
	// 7 = Mi perfil
	menu.addEventListener('click',function(e){
		Ti.API.info("CLICK: " + e.rowData.rowId);
		switch(e.rowData.rowId)
		{
			/*case 2:
				Alloy.createController('direccion',{
					token: Alloy.Globals.token,
					carro: Alloy.Globals.carro,
					marcas: Alloy.Globals.marcas,
					productos: Alloy.Globals.productos,
					medios: Alloy.Globals.medios,
					direcciones: Alloy.Globals.direcciones,
					usuario: Alloy.Globals.usuario,
					medio: Alloy.Globals.medio, 
					direccion: Alloy.Globals.direccion}).getView().open();
			break;*/
			case 7:
				var vista = Alloy.createController('index',{productos: productos}).getView();
				vista.open();
			break;
		}
	});
}
//=========End Menu=============

//=========Loader===============
var winCargando = null;
var labelCargando = null;

function cargarLoading(){
	
	if(Titanium.Platform.name == "iPhone OS"){
		winCargando = Ti.UI.createWindow({
	        backgroundImage : '/img/splash-tiendapet.jpg',
	        width:'100%',
	        //top: "3.5%",
	        height:'100%'
	        
	    });
	}
	else{
		winCargando = Ti.UI.createWindow({
	        backgroundImage : '/img/splash-tiendapet.jpg',
	        width:'100%',
	        height:'100%',
	        navBarHidden: "true"
	    });
	}
}

//=========End Cargando============

//=========Busqueda================
var winModal = null;
var viewModal = null;
var buscar = null;
var lupa = null;
var inputsBuscar = null;
var cerrar = null;

function buscarProducto(){
	if(Titanium.Platform.name == "iPhone OS"){
		winModal = Ti.UI.createWindow({
	        backgroundColor : '#000',
	        width:'100%',
	        top: "3.5%",
	        height:'9.1%',
	    });
	    
	    viewModal = Ti.UI.createView({
			width:"100%",
			height:"100%",
			layout:"horizontal",
			backgroundImage: "/img/fondoBuscar.jpg",
			top:"0%"
		});
		
		buscar = Ti.UI.createTextField({
			width:"72%",
			height:"100%",
			hintText: "¿Que es lo que buscas?",
			color: "white",
			textAlign:'center'
		});
		
		inputsBuscar = Ti.UI.createView({
			width:"28%",
			height:"100%",
			layout:"horizontal"
		});
		
		lupa = Ti.UI.createView({
			width:"40%",
			height:"70%",
			left:"5%",
			right:"5%",
			top:"15%",
			bottom:"15%",
			backgroundImage:"/img/lupaBuscar.jpg"
		});
		
		cerrar = Ti.UI.createView({
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
		
		winModal = Ti.UI.createWindow({
	        backgroundColor : '#000',
	        width:'100%',
	        height:'100%',
	        opacity:0.85,
	        navBarHidden: "true"
	    });
		
		viewModal = Ti.UI.createView({
			width:"100%",
			height:"9.5%",
			layout:"horizontal",
			backgroundImage: "/img/fondoBuscar.jpg",
			top:"0%"
		});
		
		buscar = Ti.UI.createTextField({
			width:"72%",
			height:"100%",
			hintText: "¿Que es lo que buscas?",
			textAlign:'center',
			color:"white",
			backgroundColor:"#cb5122"
		});
		
		inputsBuscar = Ti.UI.createView({
			width:"28%",
			height:"100%",
			backgroundColor:"#cb5122",
			layout:"horizontal"
		});
		
		lupa = Ti.UI.createView({
			width:"40%",
			height:"70%",
			left:"5%",
			right:"5%",
			top:"15%",
			bottom:"15%",
			backgroundImage:"/img/lupaBuscar.jpg"
		});
		
		lupa.addEventListener("click",function(){
			wrapper.opacity = 1;
			winModal.close();
		});
		
		cerrar = Ti.UI.createView({
			left:"7.5%",
			right:"7.5%",
			top:"25%",
			bottom:"25%",
			width:"25%",
			height:"50%",
			backgroundImage:"/img/cerrar.jpg"
		});
		
		cerrar.addEventListener("click",function(){
			wrapper.opacity = 1;
			winModal.close();
		});
		
		winModal.addEventListener('android:back',function(){
			wrapper.opacity = 1;
			winModal.close();
			return true;
		});
		
		wrapper.opacity = 0;
	}
	
	viewModal.add(buscar);
	inputsBuscar.add(lupa);
	inputsBuscar.add(cerrar);
	viewModal.add(inputsBuscar);
	winModal.add(viewModal);
	winModal.open();
}

//=========End Busqueda=================