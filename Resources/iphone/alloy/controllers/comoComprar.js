function Controller() {
    function productosPerroGato() {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio,
            direccion: direccion,
            categoria: categorias[3],
            marca: "TODAS",
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
    }
    function productosPerro() {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio,
            direccion: direccion,
            categoria: categorias[1],
            marca: "TODAS",
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
    }
    function productosGato() {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio,
            direccion: direccion,
            categoria: categorias[2],
            marca: "TODAS",
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
    }
    function productosNombre(nombre) {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio,
            direccion: direccion,
            categoria: "TODAS",
            marca: "TODAS",
            nombre: nombre,
            pagina: 1
        }).getView().open();
    }
    function atras() {
        $.comoComprar.close();
    }
    function busquedaProducto() {
        buscarProducto();
        buscar.addEventListener("click", function() {
            "¿Que es lo que buscas?" == buscar.value && (buscar.value = "");
        });
        lupa.addEventListener("click", function() {
            "¿Que es lo que buscas?" != buscar.value && "" != buscar.value ? productosNombre(buscar.value) : "" == buscar.value && (buscar.value = "¿Que es lo que buscas?");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "comoComprar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.comoComprar = Ti.UI.createWindow({
        backgroundColor: "white",
        bottom: "0%",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        height: "96.5%",
        id: "comoComprar"
    });
    $.__views.comoComprar && $.addTopLevelView($.__views.comoComprar);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.comoComprar
    });
    $.__views.drawermenu.setParent($.__views.comoComprar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.medioPago;
    var args = arguments[0] || {};
    var categorias = [];
    categorias[1] = "Perro";
    categorias[2] = "Gato";
    categorias[3] = "TODAS";
    var args = arguments[0] || {};
    var carro = args["carro"];
    var token = args["token"];
    var marcas = args["marcas"];
    var productos = args["productos"];
    var medios = args["medios"];
    var direcciones = args["direcciones"];
    var usuario = args["usuario"];
    var medio = args["medio"];
    var direccion = args["direccion"];
    args["padre"];
    args["producto"];
    iniciarComponentes();
    iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, "comoComprar", null);
    cargarLoading();
    var marcasView = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        layout: "horizontal"
    });
    var flecha = Ti.UI.createImageView({
        width: "14%",
        height: "85%",
        backgroundImage: "/img/FlechaIzq.jpg"
    });
    flecha.addEventListener("click", function() {
        atras();
    });
    var mediosView = Ti.UI.createImageView({
        width: "72%",
        height: "85%",
        backgroundImage: "/img/comoComprar.png"
    });
    marcasView.add(flecha);
    marcasView.add(mediosView);
    var margen = Ti.UI.createView({
        width: "100%",
        height: "3.1%",
        backgroundImage: "/img/Margen.jpg"
    });
    var mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "77.4%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true"
    });
    var contenido = Ti.UI.createImageView({
        width: "100%",
        height: "2985px",
        backgroundImage: "/img/ComoComprar.jpg"
    });
    mainScroll.add(contenido);
    menuImg.addEventListener("click", function() {
        $.drawermenu.showhidemenu();
    });
    perrogato.addEventListener("click", function() {
        productosPerroGato();
    });
    perro.addEventListener("click", function() {
        productosPerro();
    });
    gato.addEventListener("click", function() {
        productosGato();
    });
    lupaImg.addEventListener("click", function() {
        busquedaProducto();
    });
    main.add(wrapper);
    main.add(marcasView);
    main.add(margen);
    main.add(mainScroll);
    $.drawermenu.init({
        menuview: menu,
        mainview: main,
        duration: 200,
        parent: $.medioPago
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;