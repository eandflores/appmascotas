function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function atras() {
        $.recuperarContrasena.close();
    }
    function recuperar() {
        Ti.API.info($.inputCorreo.value);
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                try {
                    Ti.API.info(this.responseText);
                    JSON.parse(this.responseText);
                    Alloy.createController("resetearContrasena", {
                        token: token,
                        carro: carro,
                        marcas: marcas,
                        productos: productos,
                        medios: medios,
                        direcciones: direcciones,
                        usuario: usuario,
                        medio: medio,
                        direccion: direccion,
                        descuento: descuento,
                        pedidos: pedidos,
                        notificaciones: notificaciones
                    }).getView().open();
                } catch (e) {
                    alert("Error de conexión con el servidor.");
                }
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
            }
        });
        xhr.open("POST", "http://tiendapet.cl/api/usuario/recuperar_contrasena");
        xhr.send({
            email: $.inputCorreo.value
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "recuperarContrasena";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.recuperarContrasena = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
        id: "recuperarContrasena"
    });
    $.__views.recuperarContrasena && $.addTopLevelView($.__views.recuperarContrasena);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.6%",
        id: "wrapper"
    });
    $.__views.recuperarContrasena.add($.__views.wrapper);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        id: "marcas"
    });
    $.__views.recuperarContrasena.add($.__views.marcas);
    $.__views.__alloyId3 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        left: "0%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId3"
    });
    $.__views.marcas.add($.__views.__alloyId3);
    atras ? $.__views.__alloyId3.addEventListener("click", atras) : __defers["$.__views.__alloyId3!click!atras"] = true;
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "53.8%",
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
        height: "6.7%",
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "inputs"
    });
    $.__views.recuperarContrasena.add($.__views.inputs);
    $.__views.inputCorreo = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "100%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputCorreo",
        hintText: "CORREO"
    });
    $.__views.inputs.add($.__views.inputCorreo);
    $.__views.margenB = Ti.UI.createView({
        height: "12.3%",
        width: "100%",
        backgroundColor: "white",
        id: "margenB"
    });
    $.__views.recuperarContrasena.add($.__views.margenB);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.6%",
        id: "footer"
    });
    $.__views.recuperarContrasena.add($.__views.footer);
    $.__views.registro = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        font: {
            fontWeight: "bold"
        },
        title: "RECUPERAR CONTRASEÑA",
        id: "registro"
    });
    $.__views.footer.add($.__views.registro);
    recuperar ? $.__views.registro.addEventListener("click", recuperar) : __defers["$.__views.registro!click!recuperar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var token = args["token"];
    var carro = args["carro"];
    var marcas = args["marcas"];
    var productos = args["productos"];
    var medios = args["medios"];
    var direcciones = args["direcciones"];
    var usuario = args["usuario"];
    var medio = args["medio"];
    var direccion = args["direccion"];
    var descuento = args["descuento"];
    var pedidos = args["pedidos"];
    var notificaciones = args["notificaciones"];
    __defers["$.__views.__alloyId3!click!atras"] && $.__views.__alloyId3.addEventListener("click", atras);
    __defers["$.__views.registro!click!recuperar"] && $.__views.registro.addEventListener("click", recuperar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;