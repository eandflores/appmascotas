function Controller() {
    function productosPerroGato() {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
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
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    var padre = args["padre"];
    var producto = args["producto"];
    var currentTime = new Date();
    var fecha_actual = currentTime.getFullYear() + "-" + (1 + currentTime.getMonth()) + "-" + currentTime.getDate();
    Ti.API.info(fecha_actual);
    var pedidos = [ {
        id: 1,
        fecha: "2014-05-10",
        programado: true,
        carro: [ {
            id: 1,
            qty: 2
        } ]
    }, {
        id: 2,
        fecha: "2014-04-15",
        programado: false,
        carro: [ {
            id: 10,
            qty: 1
        }, {
            id: 32,
            qty: 3
        } ]
    }, {
        id: 3,
        fecha: "2014-02-01",
        programado: true,
        carro: [ {
            id: 47,
            qty: 1
        } ]
    }, {
        id: 4,
        fecha: "2014-01-30",
        programado: false,
        carro: [ {
            id: 68,
            qty: 1
        }, {
            id: 77,
            qty: 4
        }, {
            id: 85,
            qty: 1
        } ]
    } ];
    iniciarComponentes();
    iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, padre, producto);
    var mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "72.8%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true"
    });
    var footer = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "7.6%",
        font: {
            fontWeight: "bold"
        },
        title: "HACER PEDIDO"
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
        carroCompra();
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
        layout: "horizontal"
    });
    var pedidoTitulo1 = Ti.UI.createImageView({
        width: "40%",
        height: "100%",
        backgroundImage: "/img/misPedidos.png"
    });
    var pedidoTitulo2 = Ti.UI.createImageView({
        width: "40%",
        height: "100%",
        backgroundImage: "/img/misPedidos2.png"
    });
    var pedidoTitulo3 = Ti.UI.createImageView({
        width: "20%",
        height: "100%"
    });
    pedidoTitulo.add(pedidoTitulo1);
    pedidoTitulo.add(pedidoTitulo2);
    pedidoTitulo.add(pedidoTitulo3);
    marcasView.add(flecha);
    marcasView.add(pedidoTitulo);
    main.add(wrapper);
    main.add(marcasView);
    main.add(mainScroll);
    main.add(footer);
    $.drawermenu.init({
        menuview: menu,
        mainview: main,
        duration: 200,
        parent: $.pedidos
    });
    for (var n = 0; pedidos.length > n; n++) {
        var total_val = 0;
        for (var i = 0; productos.length > i; i++) for (var j = 0; productos[i]["producto_precios"].length > j; j++) for (var k = 0; pedidos[n]["carro"].length > k; k++) if (pedidos[n]["carro"][k]["id"] == productos[i]["producto_precios"][j]["id"]) {
            total_val += pedidos[n]["carro"][k]["qty"] * productos[i]["producto_precios"][j]["sku_price"];
            var Main = Ti.UI.createView({
                width: "100%",
                layout: "horizontal",
                height: "232px",
                id: productos[i]["producto_precios"][j]["id"]
            });
            var Margen = Ti.UI.createView({
                width: "100%",
                height: "2px",
                backgroundColor: "#e8e8e8"
            });
            var ImageViewProducto = Ti.UI.createView({
                width: "25%",
                height: "100%",
                backgroundColor: "white"
            });
            var ImageViewProducto_int = Ti.UI.createImageView({
                image: productos[i]["prod_pic"],
                defaultImage: "/img/Perro1.jpg",
                width: "auto",
                height: "100%"
            });
            ImageViewProducto.add(ImageViewProducto_int);
            var ViewLabels = Ti.UI.createView({
                width: "75%",
                height: "100%",
                layout: "vertical",
                top: "0%"
            });
            var LabelGroup = Ti.UI.createView({
                width: "75%",
                height: "60%",
                layout: "vertical",
                top: "0%"
            });
            var LabelNombre = Ti.UI.createLabel({
                color: "#cc5122",
                width: "100%",
                height: "40%",
                top: "20%",
                left: "8%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["brand"]
            });
            var LabelDescripcion = Ti.UI.createLabel({
                color: "gray",
                width: "100%",
                height: "40%",
                top: "0%",
                left: "8%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["prod_name"]
            });
            var LabelGroup2 = Ti.UI.createView({
                width: "75%",
                height: "40%",
                layout: "horizontal",
                top: "0%"
            });
            var LabelPeso = Ti.UI.createLabel({
                width: "35%",
                height: "50%",
                color: "#5c5c5b",
                top: "25%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["producto_precios"][j]["sku_description"]
            });
            var LabelCantidad = Ti.UI.createLabel({
                width: "35%",
                height: "50%",
                color: "#5c5c5b",
                top: "25%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: "Cant " + pedidos[n]["carro"][k]["qty"]
            });
            var LabelPrecio = Ti.UI.createLabel({
                width: "30%",
                height: "50%",
                color: "#5c5c5b",
                top: "25%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: "$" + pedidos[n]["carro"][k]["qty"] * productos[i]["producto_precios"][j]["sku_price"]
            });
            LabelGroup.add(LabelNombre);
            LabelGroup.add(LabelDescripcion);
            LabelGroup2.add(LabelPeso);
            LabelGroup2.add(LabelCantidad);
            LabelGroup2.add(LabelPrecio);
            ViewLabels.add(LabelGroup);
            ViewLabels.add(LabelGroup2);
            Main.add(ImageViewProducto);
            Main.add(ViewLabels);
            mainScroll.add(Main);
            mainScroll.add(Margen);
        }
        var fechaPedido = Ti.UI.createLabel({
            left: "5%",
            width: "95%",
            height: "60px",
            text: "Último Pedido",
            color: "#5c5c5b",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            }
        });
        var programarPedido = Ti.UI.createLabel({
            left: "5%",
            width: "95%",
            height: "60px",
            text: "Programar Pedido",
            color: "#5c5c5b",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            }
        });
        var repetirPedido = Ti.UI.createLabel({
            left: "5%",
            width: "95%",
            height: "60px",
            text: "Repetir Pedido",
            color: "#5c5c5b",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            }
        });
        var Margen2 = Ti.UI.createView({
            width: "100%",
            height: "2px",
            backgroundColor: "#e8e8e8"
        });
        var Margen3 = Ti.UI.createView({
            width: "100%",
            height: "2px",
            backgroundColor: "#e8e8e8"
        });
        var Margen4 = Ti.UI.createView({
            width: "100%",
            height: "2px",
            backgroundColor: "#e8e8e8"
        });
        mainScroll.add(fechaPedido);
        mainScroll.add(Margen2);
        mainScroll.add(programarPedido);
        mainScroll.add(Margen3);
        mainScroll.add(repetirPedido);
        mainScroll.add(Margen4);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;