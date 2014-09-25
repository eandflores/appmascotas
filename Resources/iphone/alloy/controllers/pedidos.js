function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

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
    function repetirPedido(id) {
        var carro_actual = [];
        for (var i = 0; pedidos.length > i; i++) {
            if (pedidos[i]["resumen"]["id"] == id) for (var j = 0; pedidos[i]["orden"].length > j; j++) carro_actual.push({
                id: pedidos[i]["orden"][j]["sku_id"],
                qty: pedidos[i]["orden"][j]["qty"]
            });
            Alloy.createController("carroCompra", {
                token: token,
                carro: carro_actual,
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
        }
    }
    function atras() {
        $.pedidos.close();
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
    this.__controllerPath = "pedidos";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.pedidos = Ti.UI.createWindow({
        backgroundColor: "white",
        bottom: "0%",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        height: "96.5%",
        id: "pedidos"
    });
    $.__views.pedidos && $.addTopLevelView($.__views.pedidos);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.pedidos
    });
    $.__views.drawermenu.setParent($.__views.pedidos);
    exports.destroy = function() {};
    _.extend($, $.__views);
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
    Ti.API.info(pedidos);
    iniciarComponentes();
    iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto);
    var mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "80.4%",
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
    var pedidoTitulo = Ti.UI.createView({
        width: "86%",
        height: "85%",
        layout: "horizontal",
        backgroundImage: "/img/misPedidos.png"
    });
    marcasView.add(flecha);
    marcasView.add(pedidoTitulo);
    main.add(wrapper);
    main.add(marcasView);
    main.add(mainScroll);
    $.drawermenu.init({
        menuview: menu,
        mainview: main,
        duration: 200,
        parent: $.pedidos
    });
    for (var n = 0; pedidos.length > n; n++) if (pedidos[n]["orden"].length > 0) {
        var total_val = 0;
        for (var k = 0; pedidos[n]["orden"].length > k; k++) {
            total_val += pedidos[n]["orden"][k]["qty"] * pedidos[n]["orden"][k]["sku_price"];
            var Main = Ti.UI.createView({
                width: "100%",
                layout: "horizontal",
                height: "121dp",
                id: pedidos[n]["orden"][k]["sku_id"]
            });
            var Margen = Ti.UI.createView({
                width: "100%",
                height: "2px",
                backgroundColor: "#e8e8e8"
            });
            var ViewLabels = Ti.UI.createView({
                width: "100%",
                height: "100%",
                layout: "vertical",
                top: "0%"
            });
            var LabelGroup = Ti.UI.createView({
                width: "85%",
                height: "60%",
                layout: "vertical",
                top: "0%"
            });
            var LabelNombre = Ti.UI.createLabel({
                color: "#cc5122",
                width: "100%",
                height: "40%",
                top: "20%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: pedidos[n]["orden"][k]["name"]
            });
            var LabelDescripcion = Ti.UI.createLabel({
                color: "gray",
                width: "100%",
                height: "40%",
                top: "0%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: pedidos[n]["orden"][k]["prod_name"]
            });
            var LabelGroup2 = Ti.UI.createView({
                width: "85%",
                height: "40%",
                layout: "horizontal",
                top: "0%"
            });
            var LabelPeso = Ti.UI.createLabel({
                width: "33%",
                height: "60%",
                color: "#5c5c5b",
                top: "20%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: pedidos[n]["orden"][k]["sku_description"]
            });
            var LabelCantidad = Ti.UI.createLabel({
                width: "33%",
                height: "60%",
                color: "#5c5c5b",
                top: "20%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: "Cant " + pedidos[n]["orden"][k]["qty"]
            });
            var LabelPrecio = Ti.UI.createLabel({
                width: "33%",
                height: "60%",
                color: "#5c5c5b",
                top: "20%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: "$" + formatCurrency(pedidos[n]["orden"][k]["qty"] * pedidos[n]["orden"][k]["sku_price"])
            });
            LabelGroup.add(LabelNombre);
            LabelGroup.add(LabelDescripcion);
            LabelGroup2.add(LabelPeso);
            LabelGroup2.add(LabelCantidad);
            LabelGroup2.add(LabelPrecio);
            ViewLabels.add(LabelGroup);
            ViewLabels.add(LabelGroup2);
            Main.add(ViewLabels);
            mainScroll.add(Main);
            mainScroll.add(Margen);
        }
        var BotonPedido = Ti.UI.createView({
            id: pedidos[n]["resumen"]["id"],
            width: "100%",
            height: "100dp"
        });
        var BotonPedidoInt = Ti.UI.createImageView({
            width: "auto",
            height: "100%",
            image: "/img/botonPedido.png"
        });
        BotonPedido.add(BotonPedidoInt);
        BotonPedido.addEventListener("click", function() {
            repetirPedido(this["id"]);
        });
        var Margen2 = Ti.UI.createView({
            width: "100%",
            height: "2px",
            backgroundColor: "#e8e8e8"
        });
        mainScroll.add(BotonPedido);
        mainScroll.add(Margen2);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;