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
    function atras() {
        win.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "agregarDireccion";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.agregarDireccion = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        id: "agregarDireccion"
    });
    $.__views.agregarDireccion && $.addTopLevelView($.__views.agregarDireccion);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.agregarDireccion.add($.__views.wrapper);
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
    $.__views.agregarDireccion.add($.__views.marcas);
    $.__views.flecha = Ti.UI.createImageView({
        width: "14%",
        height: "85%",
        id: "flecha",
        backgroundImage: "/img/FlechaIzq.jpg"
    });
    $.__views.marcas.add($.__views.flecha);
    atras ? $.__views.flecha.addEventListener("click", atras) : __defers["$.__views.flecha!click!atras"] = true;
    $.__views.direccionTitulo = Ti.UI.createImageView({
        width: "72%",
        height: "85%",
        id: "direccionTitulo",
        backgroundImage: "/img/direccion.jpg"
    });
    $.__views.marcas.add($.__views.direccionTitulo);
    $.__views.casa = Ti.UI.createImageView({
        left: "2%",
        top: "25%",
        bottom: "25%",
        width: "10%",
        height: "50%",
        id: "casa",
        backgroundImage: "/img/casa.png"
    });
    $.__views.direccionTitulo.add($.__views.casa);
    $.__views.margen = Ti.UI.createView({
        width: "100%",
        height: "3.1%",
        id: "margen",
        backgroundImage: "/img/Margen.jpg"
    });
    $.__views.agregarDireccion.add($.__views.margen);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "69.8%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.agregarDireccion.add($.__views.main);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "__alloyId0"
    });
    $.__views.main.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Calle",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createTextField({
        height: "100%",
        width: "68.8%",
        color: "#d9d9d9",
        font: {
            fontWeight: "bold"
        },
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        backgroundImage: "/img/labelOscuro.jpg",
        id: "__alloyId3"
    });
    $.__views.main.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Nro.",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createTextField({
        height: "100%",
        width: "68.8%",
        color: "#d9d9d9",
        font: {
            fontWeight: "bold"
        },
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "__alloyId6"
    });
    $.__views.main.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Depto.",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTextField({
        height: "100%",
        width: "68.8%",
        color: "#d9d9d9",
        font: {
            fontWeight: "bold"
        },
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        backgroundImage: "/img/labelOscuro.jpg",
        id: "__alloyId9"
    });
    $.__views.main.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Esquina",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTextField({
        height: "100%",
        width: "68.8%",
        color: "#d9d9d9",
        font: {
            fontWeight: "bold"
        },
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "__alloyId12"
    });
    $.__views.main.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Comuna",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createTextField({
        height: "100%",
        width: "68.8%",
        color: "#d9d9d9",
        font: {
            fontWeight: "bold"
        },
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        backgroundImage: "/img/labelOscuro.jpg",
        id: "__alloyId15"
    });
    $.__views.main.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Teléfono",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createTextField({
        height: "100%",
        width: "68.8%",
        color: "#d9d9d9",
        font: {
            fontWeight: "bold"
        },
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.6%",
        id: "footer"
    });
    $.__views.agregarDireccion.add($.__views.footer);
    $.__views.agregar = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        font: {
            fontWeight: "bold"
        },
        title: "AGREGAR",
        id: "agregar"
    });
    $.__views.footer.add($.__views.agregar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = $.agregarDireccion;
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
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    __defers["$.__views.flecha!click!atras"] && $.__views.flecha.addEventListener("click", atras);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;