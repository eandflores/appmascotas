function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "productos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.productos = Ti.UI.createWindow({
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
    $.__views.perro = Ti.UI.createImageView({
        width: "22%",
        height: "100%",
        backgroundImage: "/img/perro.jpg",
        id: "perro"
    });
    $.__views.wrapper.add($.__views.perro);
    $.__views.gato = Ti.UI.createImageView({
        width: "22%",
        height: "100%",
        backgroundImage: "/img/gato.jpg",
        id: "gato"
    });
    $.__views.wrapper.add($.__views.gato);
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
        id: "marcas"
    });
    $.__views.productos.add($.__views.marcas);
    $.__views.mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "auto",
        layout: "vertical",
        showVerticalScrollIndicator: "true",
        id: "mainScroll"
    });
    $.__views.productos.add($.__views.mainScroll);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var categorias = [];
    categorias[1] = "PERRO";
    categorias[2] = "GATO";
    var marcas = [];
    marcas[1] = "EUKANUBA";
    marcas[2] = "EUGATUBA";
    marcas[3] = "GATIS";
    var productos = new Array();
    productos.push({
        nombre: "EUKANUBA 1",
        descripcion: "Alimento para adultos",
        precio: 1500,
        categoria: categorias[1],
        marca: marcas[1],
        imagen: "/img/Perro1.jpg"
    });
    productos.push({
        nombre: "EUGATUBA 1",
        descripcion: "Alimento para adultos",
        precio: 1500,
        categoria: categorias[2],
        marca: marcas[2],
        imagen: "/img/Gato1.jpg"
    });
    productos.push({
        nombre: "EUKANUBA 2",
        descripcion: "Alimento para cachorros",
        precio: 2500,
        categoria: categorias[1],
        marca: marcas[1],
        imagen: "/img/Perro1.jpg"
    });
    productos.push({
        nombre: "EUGATUBA 2",
        descripcion: "Alimento para cachorros",
        precio: 2500,
        categoria: categorias[2],
        marca: marcas[2],
        imagen: "/img/Gato1.jpg"
    });
    productos.push({
        nombre: "KANUS 1",
        descripcion: "Alimento para adultos",
        precio: 1e3,
        categoria: categorias[1],
        marca: marcas[3],
        imagen: "/img/Perro1.jpg"
    });
    var elemento = $.mainScroll;
    for (var i = 0; productos.length > i; i++) {
        var Main = Ti.UI.createView({
            width: "100%",
            layout: "horizontal",
            height: "232px"
        });
        var ImageViewProducto = Ti.UI.createImageView({
            backgroundImage: productos[i]["imagen"],
            width: "25%",
            height: "100%",
            left: "0"
        });
        var LabelGroup = Ti.UI.createView({
            width: "67%",
            height: "100%",
            left: "0",
            layout: "vertical"
        });
        var LabelNombre = Ti.UI.createLabel({
            color: "#cc5122",
            width: "100%",
            height: "100px",
            text: productos[i]["nombre"]
        });
        var LabelDescripcion = Ti.UI.createLabel({
            color: "gray",
            width: "100%",
            height: "50px",
            text: productos[i]["descripcion"]
        });
        var LabelPrecio = Ti.UI.createLabel({
            width: "100%",
            height: "82px",
            text: productos[i]["precio"]
        });
        var ImageViewFlecha = Ti.UI.createImageView({
            width: "7%",
            height: "100%",
            feft: "0",
            backgroundImage: "/img/Flecha.jpg"
        });
        LabelGroup.add(LabelNombre);
        LabelGroup.add(LabelDescripcion);
        LabelGroup.add(LabelPrecio);
        Main.add(ImageViewProducto);
        Main.add(LabelGroup);
        Main.add(ImageViewFlecha);
        elemento.add(Main);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;