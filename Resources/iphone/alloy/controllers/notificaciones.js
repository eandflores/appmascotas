function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
            descuento: descuento,
            pedidos: pedidos,
            notificaciones: notificaciones,
            categoria: "TODAS",
            marca: "TODAS",
            nombre: nombre,
            pagina: 1
        }).getView().open();
    }
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
            descuento: descuento,
            pedidos: pedidos,
            notificaciones: notificaciones,
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
            descuento: descuento,
            pedidos: pedidos,
            notificaciones: notificaciones,
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
            descuento: descuento,
            pedidos: pedidos,
            notificaciones: notificaciones,
            categoria: categorias[2],
            marca: "TODAS",
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
    }
    function atras() {
        $.notificaciones.close();
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
    this.__controllerPath = "notificaciones";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.notificaciones = Ti.UI.createWindow({
        backgroundColor: "white",
        bottom: "0%",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        height: "96.5%",
        id: "notificaciones"
    });
    $.__views.notificaciones && $.addTopLevelView($.__views.notificaciones);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.notificaciones
    });
    $.__views.drawermenu.setParent($.__views.notificaciones);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var args = arguments[0] || {};
    var categorias = [];
    categorias[1] = "Perro";
    categorias[2] = "Gato";
    categorias[3] = "TODAS";
    var carro = args["carro"];
    var token = args["token"];
    var marcas = args["marcas"];
    var productos = args["productos"];
    var medios = args["medios"];
    var direcciones = args["direcciones"];
    var usuario = args["usuario"];
    var medio = args["medio"];
    var direccion = args["direccion"];
    var descuento = args["descuento"];
    var pedidos = args["pedidos"];
    var notificaciones = args["notificaciones"];
    var padre = args["padre"];
    var producto = args["producto"];
    var notificaciones = [ {
        id: 1,
        titulo: "Transferencia",
        detalle: "Transferencia",
        leido: false
    }, {
        id: 2,
        titulo: "Promoción",
        detalle: "Promoción temporada",
        leido: false
    }, {
        id: 3,
        titulo: "Promoción",
        detalle: "Promoción temporada",
        leido: true
    }, {
        id: 4,
        titulo: "Cupón",
        detalle: "Cupón de descuento",
        leido: false
    }, {
        id: 5,
        titulo: "Transferencia",
        detalle: "Transferencia",
        leido: true
    }, {
        id: 6,
        titulo: "Webpay",
        detalle: "Pago",
        leido: true
    }, {
        id: 7,
        titulo: "Transferencia",
        detalle: "Transferencia",
        leido: false
    }, {
        id: 8,
        titulo: "Promoción",
        detalle: "Promoción temporada",
        leido: false
    }, {
        id: 9,
        titulo: "Promoción",
        detalle: "Promoción temporada",
        leido: true
    }, {
        id: 10,
        titulo: "Cupón",
        detalle: "Cupón de descuento",
        leido: false
    } ];
    iniciarComponentes();
    iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto);
    cargarLoading();
    var mainScroll = Ti.UI.createScrollView({
        id: "mainScroll",
        width: "100%",
        height: "80.5%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true"
    });
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
    var notificacionTitulo = Ti.UI.createImageView({
        width: "62%",
        height: "55%",
        backgroundImage: "/img/notificaciones.png"
    });
    var notificacionCantidad = Ti.UI.createLabel({
        top: "15%",
        height: "60%",
        width: "15%",
        color: "#e8e8e8",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold",
            fontSize: 17
        },
        text: "4",
        backgroundImage: "/img/notificacionesCant.png",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    marcasView.add(flecha);
    marcasView.add(notificacionTitulo);
    marcasView.add(notificacionCantidad);
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
    main.add(mainScroll);
    $.drawermenu.init({
        menuview: menu,
        mainview: main,
        duration: 200,
        parent: $.notificaciones
    });
    for (var i = 0; notificaciones.length > i; i++) {
        var Main = null;
        Main = 0 == i % 2 ? Ti.UI.createView({
            width: "100%",
            layout: "horizontal",
            height: "200px",
            id: notificaciones[i]["id"],
            backgroundColor: "#f8f8f8"
        }) : Ti.UI.createView({
            width: "100%",
            layout: "horizontal",
            height: "200px",
            id: notificaciones[i]["id"]
        });
        var ViewLeido = Ti.UI.createView({
            width: "15%",
            height: "50%",
            top: "25%"
        });
        var ViewLeidoInt = Ti.UI.createImageView({
            width: "auto",
            height: "100%",
            image: "/img/leido.png"
        });
        true == notificaciones[i]["leido"] && ViewLeido.add(ViewLeidoInt);
        var LabelGroup = Ti.UI.createView({
            width: "80%",
            height: "100%",
            layout: "vertical"
        });
        var LabelGroupInterno = Ti.UI.createView({
            width: "100%",
            height: "40%",
            top: "10%",
            layout: "horizontal"
        });
        var LabelTienda = Ti.UI.createLabel({
            width: "40%",
            height: "auto",
            text: "Tienda Pet ",
            color: "#7b7b7b"
        });
        var LabelTitulo = Ti.UI.createLabel({
            width: "60%",
            height: "auto",
            text: "- " + notificaciones[i]["titulo"],
            color: "#d1d0d0"
        });
        var LabelGroupInterno2 = Ti.UI.createView({
            width: "100%",
            height: "40%",
            bottom: "10%"
        });
        var LabelDetalle = Ti.UI.createLabel({
            width: "100%",
            height: "auto",
            text: notificaciones[i]["detalle"],
            color: "#7b7b7b",
            top: "0%"
        });
        var ViewFlecha = Ti.UI.createView({
            width: "10%",
            height: "100%",
            backgroundImage: "/img/Flecha.png"
        });
        LabelGroupInterno.add(LabelTienda);
        LabelGroupInterno.add(LabelTitulo);
        LabelGroupInterno2.add(LabelDetalle);
        LabelGroup.add(LabelGroupInterno);
        LabelGroup.add(LabelGroupInterno2);
        LabelGroup.add(LabelDetalle);
        Main.add(ViewLeido);
        Main.add(LabelGroup);
        Main.add(ViewFlecha);
        mainScroll.add(Main);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;