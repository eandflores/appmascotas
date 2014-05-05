function Controller() {
    function productosPerroGato() {
        var vista = Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
            categoria: categorias[3],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosPerro() {
        var vista = Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
            categoria: categorias[1],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosGato() {
        var vista = Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
            categoria: categorias[2],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosMarca(marca) {
        var vista = Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
            categoria: categorias[3],
            marca: marca
        }).getView();
        vista.open();
    }
    function finalizar() {
        var vista = Alloy.createController("fin", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono
        }).getView();
        vista.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gracias";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.gracias = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        bottom: "0%",
        height: "96.5%",
        id: "gracias"
    });
    $.__views.gracias && $.addTopLevelView($.__views.gracias);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.gracias.add($.__views.wrapper);
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
    $.__views.gracias.add($.__views.marcas);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId20"
    });
    $.__views.marcas.add($.__views.__alloyId20);
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
    $.__views.__alloyId21 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaDer.jpg",
        id: "__alloyId21"
    });
    $.__views.marcas.add($.__views.__alloyId21);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "80.5%",
        layout: "vertical",
        id: "main"
    });
    $.__views.gracias.add($.__views.main);
    $.__views.imagenGracias = Ti.UI.createImageView({
        width: "100%",
        height: "43.2%",
        image: "/img/gracias.jpg",
        id: "imagenGracias"
    });
    $.__views.main.add($.__views.imagenGracias);
    $.__views.labels = Ti.UI.createView({
        width: "100%",
        height: "47.8%",
        layout: "vertical",
        id: "labels"
    });
    $.__views.main.add($.__views.labels);
    $.__views.__alloyId22 = Ti.UI.createImageView({
        height: "11.3%",
        width: "100%",
        backgroundImage: "/img/tituloGracias.jpg",
        id: "__alloyId22"
    });
    $.__views.labels.add($.__views.__alloyId22);
    $.__views.gracias = Ti.UI.createLabel({
        left: "14%",
        height: "8%",
        color: "#585858",
        font: {
            fontSize: "10sp"
        },
        text: "Revisa tu correo para seguir con la operación",
        id: "gracias"
    });
    $.__views.labels.add($.__views.gracias);
    $.__views.__alloyId23 = Ti.UI.createImageView({
        height: "11.3%",
        width: "100%",
        backgroundImage: "/img/tituloMedio.jpg",
        id: "__alloyId23"
    });
    $.__views.labels.add($.__views.__alloyId23);
    $.__views.pago = Ti.UI.createLabel({
        left: "14%",
        height: "8%",
        color: "#585858",
        font: {
            fontSize: "10sp"
        },
        id: "pago"
    });
    $.__views.labels.add($.__views.pago);
    $.__views.footer = Ti.UI.createView({
        width: "100%",
        height: "9%",
        id: "footer"
    });
    $.__views.main.add($.__views.footer);
    $.__views.finalizar = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        title: "ACEPTAR",
        id: "finalizar"
    });
    $.__views.footer.add($.__views.finalizar);
    finalizar ? $.__views.finalizar.addEventListener("click", finalizar) : __defers["$.__views.finalizar!click!finalizar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.gracias;
    var args = arguments[0] || {};
    var categorias = [];
    categorias[1] = "Perro";
    categorias[2] = "Gato";
    categorias[3] = "TODAS";
    carro = args["carro"];
    token = args["token"];
    marcas = args["marcas"];
    productos = args["productos"];
    medios = args["medios"];
    direcciones = args["direcciones"];
    medio = args["medio"];
    direccion = args["direccion"];
    correo = args["correo"];
    telefono = args["telefono"];
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
    for (i = 0; medios.length > i; i++) medios[i]["id"] == medio && ($.pago.text = medios[i]["paym_name"]);
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    __defers["$.__views.finalizar!click!finalizar"] && $.__views.finalizar.addEventListener("click", finalizar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;