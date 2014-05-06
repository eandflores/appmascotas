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
    this.__controllerPath = "telefono";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.telefono = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        id: "telefono"
    });
    $.__views.telefono && $.addTopLevelView($.__views.telefono);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.telefono.add($.__views.wrapper);
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
    $.__views.telefono.add($.__views.marcas);
    $.__views.flecha = Ti.UI.createImageView({
        width: "14%",
        height: "85%",
        id: "flecha",
        backgroundImage: "/img/FlechaIzq.jpg"
    });
    $.__views.marcas.add($.__views.flecha);
    atras ? $.__views.flecha.addEventListener("click", atras) : __defers["$.__views.flecha!click!atras"] = true;
    $.__views.telefonoTitulo = Ti.UI.createImageView({
        width: "72%",
        height: "85%",
        id: "telefonoTitulo",
        backgroundImage: "/img/telefono.jpg"
    });
    $.__views.marcas.add($.__views.telefonoTitulo);
    $.__views.margen = Ti.UI.createView({
        width: "100%",
        height: "3.1%",
        id: "margen",
        backgroundImage: "/img/Margen.jpg"
    });
    $.__views.telefono.add($.__views.margen);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "69.8%",
        layout: "vertical",
        id: "main"
    });
    $.__views.telefono.add($.__views.main);
    $.__views.viewTelefono = Ti.UI.createView({
        width: "100%",
        height: "7%",
        id: "viewTelefono",
        backgroundImage: "/img/labelTelefono.jpg"
    });
    $.__views.main.add($.__views.viewTelefono);
    $.__views.inputTelefono = Ti.UI.createTextField({
        height: "100%",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        left: "30%",
        width: "70",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        font: {
            fontSize: "12sp"
        },
        id: "inputTelefono"
    });
    $.__views.viewTelefono.add($.__views.inputTelefono);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.6%",
        id: "footer"
    });
    $.__views.telefono.add($.__views.footer);
    $.__views.guardarTelefono = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        font: {
            fontWeight: "bold"
        },
        title: "GUARDAR",
        id: "guardarTelefono"
    });
    $.__views.footer.add($.__views.guardarTelefono);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = $.telefono;
    var args = arguments[0] || {};
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