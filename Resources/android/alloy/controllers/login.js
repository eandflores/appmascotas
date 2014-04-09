function Controller() {
    function recuperarContraseña() {
        var vista = Alloy.createController("recuperarContrasena").getView();
        vista.open();
    }
    function registro() {
        var vista = Alloy.createController("productos", {
            categoria: "TODAS",
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.margenA = Ti.UI.createView({
        height: "3.5%",
        width: "100%",
        backgroundColor: "white",
        id: "margenA"
    });
    $.__views.login.add($.__views.margenA);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9%",
        id: "wrapper"
    });
    $.__views.login.add($.__views.wrapper);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "9.5%",
        id: "marcas"
    });
    $.__views.login.add($.__views.marcas);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "50%",
        id: "main"
    });
    $.__views.login.add($.__views.main);
    $.__views.imagenIndex = Ti.UI.createImageView({
        width: "100%",
        height: "100%",
        image: "/img/fondoRegistro.jpg",
        id: "imagenIndex"
    });
    $.__views.main.add($.__views.imagenIndex);
    $.__views.inputs = Ti.UI.createView({
        width: "100%",
        height: "10.2%",
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "inputs"
    });
    $.__views.login.add($.__views.inputs);
    $.__views.inputCorreo = Ti.UI.createTextField({
        width: "100%",
        height: "50%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputCorreo",
        hintText: "CORREO"
    });
    $.__views.inputs.add($.__views.inputCorreo);
    $.__views.inputClave = Ti.UI.createTextField({
        width: "100%",
        height: "50%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputClave",
        hintText: "CLAVE"
    });
    $.__views.inputs.add($.__views.inputClave);
    $.__views.layout = Ti.UI.createView({
        height: "10.4%",
        width: "100%",
        backgroundColor: "white",
        id: "layout"
    });
    $.__views.login.add($.__views.layout);
    $.__views.recuperarContraseña = Ti.UI.createLabel({
        height: "100%",
        width: "100%",
        color: "#cc5122",
        fontWeight: "bold",
        textAlign: "center",
        text: "¿HAS OLVIDADO TU CONTRASEÑA?",
        id: "recuperarContraseña"
    });
    $.__views.layout.add($.__views.recuperarContraseña);
    recuperarContraseña ? $.__views.recuperarContraseña.addEventListener("click", recuperarContraseña) : __defers["$.__views.recuperarContraseña!click!recuperarContraseña"] = true;
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.4%",
        id: "footer"
    });
    $.__views.login.add($.__views.footer);
    $.__views.registro = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        title: "INICIAR SESIÓN",
        id: "registro"
    });
    $.__views.footer.add($.__views.registro);
    registro ? $.__views.registro.addEventListener("click", registro) : __defers["$.__views.registro!click!registro"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.recuperarContraseña!click!recuperarContraseña"] && $.__views.recuperarContraseña.addEventListener("click", recuperarContraseña);
    __defers["$.__views.registro!click!registro"] && $.__views.registro.addEventListener("click", registro);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;