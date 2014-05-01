function Controller() {
    function registro() {
        var email = $.inputCorreo.value;
        var password = $.inputContraseña.value;
        xhr = Ti.Network.createHTTPClient({
            onload: function() {
                var response = JSON.parse(this.responseText);
                var token = response["token"];
                var vista = Alloy.createController("productos", {
                    token: token,
                    carro: [],
                    categoria: "TODAS",
                    marca: "TODAS"
                }).getView();
                vista.open();
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
            }
        });
        xhr.open("POST", "http://tiendapet.cl/api/usuario/registrar");
        xhr.send({
            email: email,
            password: password
        });
    }
    function atras() {
        win.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "registro";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.registro = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        bottom: "0%",
        height: "96.5%",
        id: "registro"
    });
    $.__views.registro && $.addTopLevelView($.__views.registro);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.6%",
        id: "wrapper"
    });
    $.__views.registro.add($.__views.wrapper);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        orientation: "horizontal",
        id: "marcas"
    });
    $.__views.registro.add($.__views.marcas);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        left: "0%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId5"
    });
    $.__views.marcas.add($.__views.__alloyId5);
    atras ? $.__views.__alloyId5.addEventListener("click", atras) : __defers["$.__views.__alloyId5!click!atras"] = true;
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "49.2%",
        id: "main"
    });
    $.__views.registro.add($.__views.main);
    $.__views.imagenIndex = Ti.UI.createImageView({
        width: "100%",
        height: "100%",
        image: "/img/fondoRegistro.jpg",
        id: "imagenIndex"
    });
    $.__views.main.add($.__views.imagenIndex);
    $.__views.inputs = Ti.UI.createView({
        width: "100%",
        height: "18%",
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "inputs"
    });
    $.__views.registro.add($.__views.inputs);
    $.__views.inputNombre = Ti.UI.createTextField({
        height: "33.4%",
        left: "10%",
        width: "90%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputNombre",
        hintText: "NOMBRE"
    });
    $.__views.inputs.add($.__views.inputNombre);
    $.__views.inputCorreo = Ti.UI.createTextField({
        height: "33.3%",
        left: "10%",
        width: "90%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputCorreo",
        hintText: "CORREO"
    });
    $.__views.inputs.add($.__views.inputCorreo);
    $.__views.inputContraseña = Ti.UI.createTextField({
        height: "33.3%",
        left: "10%",
        width: "90%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputContraseña",
        hintText: "CONTRASEÑA",
        passwordMask: "true"
    });
    $.__views.inputs.add($.__views.inputContraseña);
    $.__views.margenB = Ti.UI.createView({
        height: "5.2%",
        width: "100%",
        backgroundColor: "white",
        id: "margenB"
    });
    $.__views.registro.add($.__views.margenB);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.6%",
        id: "footer"
    });
    $.__views.registro.add($.__views.footer);
    $.__views.registrarse = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        title: "REGISTRARSE",
        id: "registrarse"
    });
    $.__views.footer.add($.__views.registrarse);
    registro ? $.__views.registrarse.addEventListener("click", registro) : __defers["$.__views.registrarse!click!registro"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = $.registro;
    __defers["$.__views.__alloyId5!click!atras"] && $.__views.__alloyId5.addEventListener("click", atras);
    __defers["$.__views.registrarse!click!registro"] && $.__views.registrarse.addEventListener("click", registro);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;