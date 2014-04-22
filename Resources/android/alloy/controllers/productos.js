function Controller() {
    function productosPerroGato() {
        var vista = Alloy.createController("productos", {
            categoria: categorias[3],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosPerro() {
        var vista = Alloy.createController("productos", {
            categoria: categorias[1],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosGato() {
        var vista = Alloy.createController("productos", {
            categoria: categorias[2],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosMarca(marca) {
        if (marca == args["marca"]) var vista = Alloy.createController("productos", {
            categoria: args["categoria"],
            marca: "TODAS"
        }).getView(); else var vista = Alloy.createController("productos", {
            categoria: args["categoria"],
            marca: marca
        }).getView();
        vista.open();
    }
    function productosView(producto) {
        var vista = Alloy.createController("productoView", {
            producto: producto
        }).getView();
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
        id: "productos"
    });
    $.__views.productos && $.addTopLevelView($.__views.productos);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9%",
        top: "3.5%",
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
        height: "9.5%",
        layout: "horizontal",
        id: "marcas"
    });
    $.__views.productos.add($.__views.marcas);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId2"
    });
    $.__views.marcas.add($.__views.__alloyId2);
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
    $.__views.__alloyId3 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaDer.jpg",
        id: "__alloyId3"
    });
    $.__views.marcas.add($.__views.__alloyId3);
    $.__views.mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "78%",
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
    Titanium.API.info(args["categoria"]);
    Titanium.API.info(args["marca"]);
    var categorias = [];
    categorias[1] = "PERRO";
    categorias[2] = "GATO";
    categorias[3] = "TODAS";
    var marcas = new Array();
    marcas.push({
        id: 1,
        nombre: "DOGUTOS",
        imagen: "/img/Doguitos.jpg",
        categoria: "PERRO"
    });
    marcas.push({
        id: 2,
        nombre: "ROYAL KANIN",
        imagen: "/img/RoyalKanin.jpg",
        categoria: "PERRO"
    });
    marcas.push({
        id: 3,
        nombre: "GATIS",
        imagen: "/img/Gati.jpg",
        categoria: "GATO"
    });
    marcas.push({
        id: 4,
        nombre: "EUKANUBA",
        imagen: "/img/Doguitos.jpg",
        categoria: "PERRO"
    });
    var marcasScroll = $.marcasScroll;
    for (var i = 0; marcas.length > i; i++) if ("TODAS" == args["categoria"]) {
        var ImageViewMarca = Ti.UI.createImageView({
            backgroundImage: marcas[i]["imagen"],
            width: "153.6px",
            id: marcas[i]["id"],
            height: "100%"
        });
        ImageViewMarca.addEventListener("click", function() {
            productosMarca(this["id"]);
        });
        marcasScroll.add(ImageViewMarca);
    } else if (marcas[i]["categoria"] == args["categoria"]) {
        var ImageViewMarca = Ti.UI.createImageView({
            backgroundImage: marcas[i]["imagen"],
            width: "153.6px",
            id: marcas[i]["id"],
            height: "100%"
        });
        ImageViewMarca.addEventListener("click", function() {
            productosMarca(this["id"]);
        });
        marcasScroll.add(ImageViewMarca);
    }
    var productos = new Array();
    productos.push({
        id: 1,
        nombre: "DOGUITOS 1",
        descripcion: "Alimento para adultos",
        precio: 1500,
        categoria: categorias[1],
        marca: marcas[0]["id"],
        imagen: "/img/Perro1.jpg"
    });
    productos.push({
        id: 2,
        nombre: "GATIS 1",
        descripcion: "Alimento para adultos",
        precio: 1500,
        categoria: categorias[2],
        marca: marcas[2]["id"],
        imagen: "/img/Gato1.jpg"
    });
    productos.push({
        id: 3,
        nombre: "EUKANUBA 1",
        descripcion: "Alimento para cachorros",
        precio: 2500,
        categoria: categorias[1],
        marca: marcas[3]["id"],
        imagen: "/img/Perro1.jpg"
    });
    productos.push({
        id: 4,
        nombre: "GATIS 2",
        descripcion: "Alimento para cachorros",
        precio: 2500,
        categoria: categorias[2],
        marca: marcas[2]["id"],
        imagen: "/img/Gato1.jpg"
    });
    productos.push({
        id: 5,
        nombre: "DOGUITOS 2",
        descripcion: "Alimento para adultos",
        precio: 1e3,
        categoria: categorias[1],
        marca: marcas[0]["id"],
        imagen: "/img/Perro1.jpg"
    });
    var mainScroll = $.mainScroll;
    "TODAS" == args["categoria"] ? $.perrogato.backgroundImage = "/img/perrogato2.jpg" : "PERRO" == args["categoria"] && ($.perro.backgroundImage = "/img/perro2.jpg");
    "GATO" == args["categoria"] && ($.gato.backgroundImage = "/img/gato2.jpg");
    for (var i = 0; productos.length > i; i++) if ("TODAS" == args["categoria"]) {
        if ("TODAS" == args["marca"]) {
            var Main = Ti.UI.createView({
                width: "100%",
                layout: "horizontal",
                height: "232px",
                id: productos[i]["id"]
            });
            var Margen = Ti.UI.createView({
                width: "100%",
                height: "0.2%",
                backgroundColor: "#e8e8e8"
            });
            var ImageViewProducto = Ti.UI.createImageView({
                backgroundImage: productos[i]["imagen"],
                width: "25%",
                height: "100%"
            });
            var LabelGroup = Ti.UI.createView({
                width: "67%",
                height: "100%",
                layout: "vertical"
            });
            var LabelNombre = Ti.UI.createLabel({
                color: "#cc5122",
                width: "100%",
                height: "28.2%",
                top: "0%",
                left: "8.3%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["nombre"]
            });
            var LabelDescripcion = Ti.UI.createLabel({
                color: "gray",
                width: "100%",
                height: "19.6%",
                top: "0%",
                left: "8.3%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["descripcion"]
            });
            var LabelPrecio = Ti.UI.createLabel({
                width: "100%",
                height: "21.7%",
                color: "#5c5c5b",
                top: "0%",
                left: "8.3%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["precio"]
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
            mainScroll.add(Main);
            mainScroll.add(Margen);
        } else if (args["marca"] == productos[i]["marca"]) {
            var Main = Ti.UI.createView({
                width: "100%",
                layout: "horizontal",
                height: "230px",
                id: productos[i]["id"]
            });
            var Margen = Ti.UI.createView({
                width: "100%",
                height: "2px",
                backgroundColor: "#e8e8e8"
            });
            var ImageViewProducto = Ti.UI.createImageView({
                backgroundImage: productos[i]["imagen"],
                width: "25%",
                height: "100%"
            });
            var LabelGroup = Ti.UI.createView({
                width: "67%",
                height: "100%",
                layout: "vertical"
            });
            var LabelNombre = Ti.UI.createLabel({
                color: "#cc5122",
                width: "100%",
                height: "28.2%",
                top: "0%",
                left: "8.3%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["nombre"]
            });
            var LabelDescripcion = Ti.UI.createLabel({
                color: "gray",
                width: "100%",
                height: "19.6%",
                top: "0%",
                left: "8.3%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["descripcion"]
            });
            var LabelPrecio = Ti.UI.createLabel({
                width: "100%",
                height: "21.7%",
                color: "#5c5c5b",
                top: "0%",
                left: "8.3%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["precio"]
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
            mainScroll.add(Main);
            mainScroll.add(Margen);
        }
    } else if ("TODAS" == args["marca"]) {
        if (args["categoria"] == productos[i]["categoria"]) {
            var Main = Ti.UI.createView({
                width: "100%",
                layout: "horizontal",
                height: "230px",
                id: productos[i]["id"]
            });
            var Margen = Ti.UI.createView({
                width: "100%",
                height: "2px",
                backgroundColor: "#e8e8e8"
            });
            var ImageViewProducto = Ti.UI.createImageView({
                backgroundImage: productos[i]["imagen"],
                width: "25%",
                height: "100%"
            });
            var LabelGroup = Ti.UI.createView({
                width: "67%",
                height: "100%",
                layout: "vertical"
            });
            var LabelNombre = Ti.UI.createLabel({
                color: "#cc5122",
                width: "100%",
                height: "28.2%",
                top: "0%",
                left: "8.3%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["nombre"]
            });
            var LabelDescripcion = Ti.UI.createLabel({
                color: "gray",
                width: "100%",
                height: "19.6%",
                top: "0%",
                left: "8.3%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["descripcion"]
            });
            var LabelPrecio = Ti.UI.createLabel({
                width: "100%",
                height: "21.7%",
                color: "#5c5c5b",
                top: "0%",
                left: "8.3%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: productos[i]["precio"]
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
            mainScroll.add(Main);
            mainScroll.add(Margen);
        }
    } else if (args["categoria"] == productos[i]["categoria"] && args["marca"] == productos[i]["marca"]) {
        var Main = Ti.UI.createView({
            width: "100%",
            layout: "horizontal",
            height: "230px",
            id: productos[i]["id"]
        });
        var Margen = Ti.UI.createView({
            width: "100%",
            height: "2px",
            backgroundColor: "#e8e8e8"
        });
        var ImageViewProducto = Ti.UI.createImageView({
            backgroundImage: productos[i]["imagen"],
            width: "25%",
            height: "100%"
        });
        var LabelGroup = Ti.UI.createView({
            width: "67%",
            height: "100%",
            layout: "vertical"
        });
        var LabelNombre = Ti.UI.createLabel({
            color: "#cc5122",
            width: "100%",
            height: "28.2%",
            top: "0%",
            left: "8.3%",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            },
            text: productos[i]["nombre"]
        });
        var LabelDescripcion = Ti.UI.createLabel({
            color: "gray",
            width: "100%",
            height: "19.6%",
            top: "0%",
            left: "8.3%",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            },
            text: productos[i]["descripcion"]
        });
        var LabelPrecio = Ti.UI.createLabel({
            width: "100%",
            height: "21.7%",
            color: "#5c5c5b",
            top: "0%",
            left: "8.3%",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            },
            text: productos[i]["precio"]
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
        mainScroll.add(Main);
        mainScroll.add(Margen);
    }
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;