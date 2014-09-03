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
                    JSON.parse(this.responseText);
                    usuario["cust_phone"] = inputTelefono.value;
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
                        descuento: descuento,
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
        xhr.open("POST", "http://tiendapet.cl/api/usuario/?user_token=" + token);
        xhr.send({
            telefono: inputTelefono.value
        });
    }
    function atras() {
        $.telefono.close();
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
    this.__controllerPath = "telefono";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.telefono = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "true",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
        id: "telefono"
    });
    $.__views.telefono && $.addTopLevelView($.__views.telefono);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.telefono
    });
    $.__views.drawermenu.setParent($.__views.telefono);
    exports.destroy = function() {};
    _.extend($, $.__views);
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
    var descuento = args["descuento"];
    var pedidos = args["pedidos"];
    var notificaciones = args["notificaciones"];
    iniciarComponentes();
    iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, "telefono", null);
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
    var telefonoTitulo = Ti.UI.createImageView({
        width: "72%",
        height: "85%",
        backgroundImage: "/img/telefono.jpg"
    });
    marcasView.add(flecha);
    marcasView.add(telefonoTitulo);
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
    var viewTelefono = Ti.UI.createView({
        width: "100%",
        top: "2%",
        height: "10%",
        layout: "horizontal",
        backgroundImage: "/img/labelOscuro.jpg"
    });
    var labelTelefono = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Teléfono"
    });
    var inputTelefono = Ti.UI.createTextField({
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        width: "60%",
        right: "8.8%",
        height: "100%",
        color: "#888888",
        font: {
            fontFamily: "Noto Sans",
            fontSize: "12sp"
        },
        backgroundColor: "#d8d8d8"
    });
    viewTelefono.add(labelTelefono);
    viewTelefono.add(inputTelefono);
    mainView.add(viewTelefono);
    var footer = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "7.6%",
        font: {
            fontWeight: "bold"
        },
        title: "GUARDAR"
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
        parent: $.telefono
    });
    inputTelefono.value = usuario["cust_phone"];
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;