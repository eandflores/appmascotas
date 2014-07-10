function Controller() {
    function busquedaProducto() {
        buscarProducto();
        lupa.addEventListener("click", function() {
            productosNombre(buscar.value);
        });
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
    function selectMedio(medio_selected) {
        Alloy.createController("realizarPedido", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio_selected,
            direccion: direccion
        }).getView().open();
    }
    function atras() {
        $.medioPago.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "medioPago";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.medioPago = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "true",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
        id: "medioPago"
    });
    $.__views.medioPago && $.addTopLevelView($.__views.medioPago);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.medioPago
    });
    $.__views.drawermenu.setParent($.__views.medioPago);
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
    iniciarComponentes();
    iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, "medioPago");
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
        backgroundImage: "/img/medioPago.jpg"
    });
    marcasView.add(flecha);
    marcasView.add(mediosView);
    var margen = Ti.UI.createView({
        width: "100%",
        height: "3.1%",
        backgroundImage: "/img/Margen.jpg"
    });
    var mainScroll = Ti.UI.createView({
        width: "100%",
        height: "77.4%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true"
    });
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
    for (i = 0; medios.length > i; i++) {
        var MedioPago = Ti.UI.createView({
            backgroundImage: "/img/flechaPagos.jpg",
            width: "100%",
            id: medios[i],
            height: "98px"
        });
        MedioPago.addEventListener("click", function() {
            selectMedio(this["id"]);
        });
        var Margen = Ti.UI.createView({
            width: "100%",
            height: "2px",
            backgroundColor: "#e8e8e8"
        });
        var Label = Ti.UI.createLabel({
            left: "7%",
            width: "86%",
            height: "100%",
            color: "#5c5c5b",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            },
            text: medios[i]["paym_name"]
        });
        MedioPago.add(Label);
        mainScroll.add(MedioPago);
        mainScroll.add(Margen);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;