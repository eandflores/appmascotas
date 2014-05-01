function Controller() {
    function getProductos(marcas) {
        xhrProductos = Ti.Network.createHTTPClient({
            onload: function() {
                var productos = JSON.parse(this.responseText);
                marc = marcas;
                prod = productos;
                ordenarProductos(marc, prod, Ti.App.categoria_actual, Ti.App.marca_actual);
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
            }
        });
        xhrProductos.open("GET", "http://tiendapet.cl/api/productos");
        xhrProductos.send();
    }
    function ordenarProductos(marcas, productos, categoria, marca) {
        marc = marcas;
        prod = productos;
        Ti.App.categoria_actual = categoria;
        Ti.App.marca_actual = marca;
        var marcasScroll = $.marcasScroll;
        marcasScroll.removeAllChildren();
        for (var i = 0; marcas.length > i; i++) {
            var ImageViewMarca = Ti.UI.createImageView({
                backgroundImage: marcas[i]["banner"],
                width: "153.6px",
                id: marcas[i]["id"],
                height: "100%"
            });
            ImageViewMarca.addEventListener("click", function() {
                productosMarca(this["id"]);
            });
            marcasScroll.add(ImageViewMarca);
        }
        $.perrogato.backgroundImage = "/img/perrogato.jpg";
        $.perro.backgroundImage = "/img/perro.jpg";
        $.gato.backgroundImage = "/img/gato.jpg";
        "TODAS" == categoria ? $.perrogato.backgroundImage = "/img/perrogato2.jpg" : "Perro" == categoria ? $.perro.backgroundImage = "/img/perro2.jpg" : "Gato" == categoria && ($.gato.backgroundImage = "/img/gato2.jpg");
        var mainScroll = $.mainScroll;
        mainScroll.removeAllChildren();
        for (var i = 0; productos.length > i; i++) for (var j = 0; productos[i]["producto_precios"].length > j; j++) {
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
            var ImageViewProducto = Ti.UI.createImageView({
                backgroundImage: productos[i]["prod_pic"],
                width: "25%",
                height: "100%"
            });
            var LabelGroup = Ti.UI.createView({
                width: "68%",
                height: "100%",
                layout: "vertical",
                top: "0%"
            });
            var LabelNombre = Ti.UI.createLabel({
                color: "#cc5122",
                width: "100%",
                height: "20%",
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
                height: "20%",
                top: "0%",
                left: "8%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["prod_name"]
            });
            var LabelPrecio = Ti.UI.createLabel({
                width: "100%",
                height: "20%",
                color: "#5c5c5b",
                top: "0%",
                left: "8%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: "$" + productos[i]["producto_precios"][j]["sku_price"]
            });
            var ImageViewFlecha = Ti.UI.createImageView({
                width: "7%",
                height: "100%",
                backgroundImage: "/img/Flecha.jpg"
            });
            LabelGroup.add(LabelNombre);
            LabelGroup.add(LabelDescripcion);
            LabelGroup.add(LabelPrecio);
            Main.add(ImageViewProducto);
            Main.add(LabelGroup);
            Main.add(ImageViewFlecha);
            Main.addEventListener("click", function() {
                productosView(this["id"]);
            });
            if ("TODAS" == categoria && "TODAS" == marca) {
                mainScroll.add(Main);
                mainScroll.add(Margen);
            } else if ("TODAS" == categoria && "TODAS" != marca) {
                if (marca == productos[i]["marca_id"]) {
                    mainScroll.add(Main);
                    mainScroll.add(Margen);
                }
            } else if ("TODAS" != categoria && "TODAS" == marca) {
                if (categoria == productos[i]["tipo"]) {
                    mainScroll.add(Main);
                    mainScroll.add(Margen);
                }
            } else if ("TODAS" != categoria && "TODAS" != marca && categoria == productos[i]["tipo"] && marca == productos[i]["marca_id"]) {
                mainScroll.add(Main);
                mainScroll.add(Margen);
            }
        }
    }
    function productosPerroGato() {
        ordenarProductos(marc, prod, categorias[3], "TODAS");
    }
    function productosPerro() {
        ordenarProductos(marc, prod, categorias[1], "TODAS");
    }
    function productosGato() {
        ordenarProductos(marc, prod, categorias[2], "TODAS");
    }
    function productosMarca(marca) {
        Titanium.API.info(Ti.App.marca_actual);
        marca == Ti.App.marca_actual ? ordenarProductos(marc, prod, "TODAS", "TODAS") : ordenarProductos(marc, prod, "TODAS", marca);
    }
    function productosView(producto) {
        var mainScroll = $.mainScroll;
        mainScroll.removeAllChildren();
        var vista = Alloy.createController("productoView", {
            token: token,
            carro: carro,
            marcas: marc,
            productos: prod,
            producto: producto
        }).getView();
        Ti.API.info(token + " " + carro);
        vista.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "productos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.productos = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        bottom: "0%",
        height: "96.5%",
        id: "productos"
    });
    $.__views.productos && $.addTopLevelView($.__views.productos);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.productos.add($.__views.wrapper);
    $.__views.menuImg = Ti.UI.createImageView({
        width: "14%",
        height: "100%",
        backgroundImage: "/img/menu.jpg",
        id: "menuImg"
    });
    $.__views.wrapper.add($.__views.menuImg);
    $.__views.perrogato = Ti.UI.createImageView({
        width: "28%",
        height: "100%",
        backgroundImage: "/img/perrogato.jpg",
        id: "perrogato"
    });
    $.__views.wrapper.add($.__views.perrogato);
    productosPerroGato ? $.__views.perrogato.addEventListener("click", productosPerroGato) : __defers["$.__views.perrogato!click!productosPerroGato"] = true;
    $.__views.perro = Ti.UI.createImageView({
        width: "22%",
        height: "100%",
        backgroundImage: "/img/perro.jpg",
        id: "perro"
    });
    $.__views.wrapper.add($.__views.perro);
    productosPerro ? $.__views.perro.addEventListener("click", productosPerro) : __defers["$.__views.perro!click!productosPerro"] = true;
    $.__views.gato = Ti.UI.createImageView({
        width: "22%",
        height: "100%",
        backgroundImage: "/img/gato.jpg",
        id: "gato"
    });
    $.__views.wrapper.add($.__views.gato);
    productosGato ? $.__views.gato.addEventListener("click", productosGato) : __defers["$.__views.gato!click!productosGato"] = true;
    $.__views.lupaImg = Ti.UI.createImageView({
        width: "14%",
        height: "100%",
        backgroundImage: "/img/lupa.jpg",
        id: "lupaImg"
    });
    $.__views.wrapper.add($.__views.lupaImg);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "marcas"
    });
    $.__views.productos.add($.__views.marcas);
    $.__views.__alloyId3 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId3"
    });
    $.__views.marcas.add($.__views.__alloyId3);
    $.__views.marcasScroll = Ti.UI.createScrollView({
        width: "72%",
        contentWidth: Ti.UI.SIZE,
        scrollType: "horizontal",
        layout: "horizontal",
        height: "85%",
        horizontalWrap: "false",
        showHorizontalScrollIndicator: "true",
        id: "marcasScroll"
    });
    $.__views.marcas.add($.__views.marcasScroll);
    $.__views.__alloyId4 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaDer.jpg",
        id: "__alloyId4"
    });
    $.__views.marcas.add($.__views.__alloyId4);
    $.__views.mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "80.5%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "mainScroll"
    });
    $.__views.productos.add($.__views.mainScroll);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var categorias = [];
    categorias[1] = "Perro";
    categorias[2] = "Gato";
    categorias[3] = "TODAS";
    Ti.App.categoria_actual = args["categoria"];
    Ti.App.marca_actual = args["marca"];
    carro = args["carro"];
    token = args["token"];
    var marc = [];
    var prod = [];
    xhrMarcas = Ti.Network.createHTTPClient({
        onload: function() {
            var marcas = JSON.parse(this.responseText);
            getProductos(marcas);
        },
        onerror: function() {
            alert("Error de conexión con el servidor.");
        }
    });
    xhrMarcas.open("GET", "http://tiendapet.cl/api/marcas");
    xhrMarcas.send();
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;