function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "recuperarContrasena";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.recuperarContrasena = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        id: "recuperarContrasena"
    });
    $.__views.recuperarContrasena && $.addTopLevelView($.__views.recuperarContrasena);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9%",
        id: "wrapper"
    });
    $.__views.recuperarContrasena.add($.__views.wrapper);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "9.5%",
        id: "marcas"
    });
    $.__views.recuperarContrasena.add($.__views.marcas);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "50%",
        id: "main"
    });
    $.__views.recuperarContrasena.add($.__views.main);
    $.__views.imagenIndex = Ti.UI.createImageView({
        width: "100%",
        height: "100%",
        image: "/img/fondoRegistro.jpg",
        id: "imagenIndex"
    });
    $.__views.main.add($.__views.imagenIndex);
    $.__views.inputs = Ti.UI.createView({
        width: "100%",
        height: "5.5%",
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "inputs"
    });
    $.__views.recuperarContrasena.add($.__views.inputs);
    $.__views.inputCorreo = Ti.UI.createTextField({
        height: "100%",
        left: "10%",
        width: "90%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputCorreo",
        hintText: "CORREO"
    });
    $.__views.inputs.add($.__views.inputCorreo);
    $.__views.margenB = Ti.UI.createView({
        height: "15.8%",
        width: "100%",
        backgroundColor: "white",
        id: "margenB"
    });
    $.__views.recuperarContrasena.add($.__views.margenB);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.4%",
        id: "footer"
    });
    $.__views.recuperarContrasena.add($.__views.footer);
    $.__views.registro = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        title: "RECUPERAR CONTRASEÑA",
        id: "registro"
    });
    $.__views.footer.add($.__views.registro);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;