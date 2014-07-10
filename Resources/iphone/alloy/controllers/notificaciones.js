function Controller() {
    function busquedaProducto() {
        buscarProducto();
        lupa.addEventListener("click", function() {
            productosNombre(buscar.value);
        });
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
    function atras() {
        $.notificaciones.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notificaciones";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, padre, producto);
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
            height: "160px",
            id: notificaciones[i]["id"],
            backgroundColor: "#f8f8f8"
        }) : Ti.UI.createView({
            width: "100%",
            layout: "horizontal",
            height: "160px",
            id: notificaciones[i]["id"]
        });
        var ViewLeido = null;
        ViewLeido = true == notificaciones[i]["leido"] ? Ti.UI.createView({
            width: "15%",
            height: "50%",
            top: "25%",
            bottom: "25%",
            backgroundImage: "/img/leido.png"
        }) : Ti.UI.createView({
            width: "15%",
            height: "100%"
        });
        var LabelGroup = Ti.UI.createView({
            width: "70%",
            height: "100%",
            layout: "vertical"
        });
        var LabelGroupInterno = Ti.UI.createView({
            width: "70%",
            top: "15%",
            height: "30%",
            layout: "horizontal"
        });
        var LabelTienda = Ti.UI.createLabel({
            minimumFontSize: 8,
            width: "40%",
            height: "100%",
            text: "Tienda Pet ",
            color: "#7b7b7b",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold",
                fontSize: 13
            }
        });
        var LabelTitulo = Ti.UI.createLabel({
            minimumFontSize: 8,
            width: "60%",
            height: "100%",
            text: "- " + notificaciones[i]["titulo"],
            color: "#d1d0d0",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold",
                fontSize: 13
            }
        });
        var LabelDetalle = Ti.UI.createLabel({
            minimumFontSize: 8,
            width: "70%",
            bottom: "10%",
            height: "20%",
            text: notificaciones[i]["detalle"],
            color: "#7b7b7b",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold",
                fontSize: 13
            }
        });
        var ViewFlecha = Ti.UI.createView({
            width: "15%",
            height: "100%",
            backgroundImage: "/img/flechaSolicitud.png"
        });
        LabelGroupInterno.add(LabelTienda);
        LabelGroupInterno.add(LabelTitulo);
        LabelGroup.add(LabelGroupInterno);
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