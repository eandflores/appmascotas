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
    function guardar() {
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                try {
                    Alloy.createController("realizarPedido", {
                        token: token,
                        carro: carro,
                        marcas: marcas,
                        productos: productos,
                        medios: medios,
                        direcciones: direcciones,
                        usuario: usuario,
                        medio: medio,
                        direccion: direccion,
                        descuento: JSON.parse(this.responseText),
                        pedidos: pedidos,
                        notificaciones: notificaciones
                    }).getView().open();
                } catch (e) {
                    alert("Error de conexión con el servidor.");
                }
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
            }
        });
        xhr.open("POST", "http://tiendapet.cl/api/comprar/descuento?user_token=" + token);
        xhr.send({
            descuento: inputDescuento.value
        });
    }
    function atras() {
        $.descuento.close();
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
    this.__controllerPath = "descuento";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.descuento = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "true",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
        id: "descuento"
    });
    $.__views.descuento && $.addTopLevelView($.__views.descuento);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.descuento
    });
    $.__views.drawermenu.setParent($.__views.descuento);
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
    iniciarComponentes();
    iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, "descuento", null);
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
    var descuentoTitulo = Ti.UI.createImageView({
        width: "72%",
        height: "85%",
        backgroundImage: "/img/cuponDescuento.jpg"
    });
    marcasView.add(flecha);
    marcasView.add(descuentoTitulo);
    var margen = Ti.UI.createView({
        width: "100%",
        height: "3.1%",
        backgroundImage: "/img/Margen.jpg"
    });
    var mainView = Ti.UI.createView({
        width: "100%",
        height: "69.8%",
        layout: "vertical"
    });
    var viewDescuento = Ti.UI.createView({
        width: "100%",
        height: "7%",
        backgroundImage: "/img/labelDescuento.jpg"
    });
    var inputDescuento = Ti.UI.createTextField({
        minimumFontSize: 8,
        left: "30%",
        width: "60%",
        height: "100%",
        color: "#888888",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold",
            fontSize: 12
        },
        backgroundColor: "#d8d8d8"
    });
    viewDescuento.add(inputDescuento);
    mainView.add(viewDescuento);
    var footer = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "7.6%",
        font: {
            fontWeight: "bold"
        },
        title: "INGRESAR"
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
    footer.addEventListener("click", function() {
        guardar();
    });
    main.add(wrapper);
    main.add(marcasView);
    main.add(margen);
    main.add(mainView);
    main.add(footer);
    $.drawermenu.init({
        menuview: menu,
        mainview: main,
        duration: 200,
        parent: $.descuento
    });
    inputDescuento.value = "PRUEBA";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;