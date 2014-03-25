function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9%",
        top: "3.5%",
        id: "wrapper"
    });
    $.__views.index.add($.__views.wrapper);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "9.5%",
        id: "marcas"
    });
    $.__views.index.add($.__views.marcas);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "70.6%",
        id: "main"
    });
    $.__views.index.add($.__views.main);
    $.__views.imagenIndex = Ti.UI.createImageView({
        width: "100%",
        height: "100%",
        image: "/img/Bienvenido.jpg",
        id: "imagenIndex"
    });
    $.__views.main.add($.__views.imagenIndex);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.4%",
        id: "footer"
    });
    $.__views.index.add($.__views.footer);
    $.__views.login = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "50%",
        height: "100%",
        title: "INICIAR SESIÓN",
        id: "login"
    });
    $.__views.footer.add($.__views.login);
    $.__views.registro = Ti.UI.createButton({
        backgroundColor: "#5b7256",
        color: "white",
        width: "50%",
        height: "100%",
        title: "REGISTRARSE",
        id: "registro"
    });
    $.__views.footer.add($.__views.registro);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;