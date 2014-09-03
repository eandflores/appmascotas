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
        $.resetearContrasena.close();
    }
    function resetear() {
        if ("" != $.inputPass.value && "" != $.inputCodigo.value) if ($.inputPass.value == $.inputPass2.value) {
            var xhr = Ti.Network.createHTTPClient({
                onload: function(e) {
                    try {
                        Ti.API.info(this.responseText);
                        JSON.parse(this.responseText);
                        Alloy.createController("index", {
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
                        alert(e);
                    }
                },
                onerror: function(e) {
                    alert(e);
                }
            });
            xhr.open("POST", "http://tiendapet.cl/api/usuario/resetear_contrasena?reset_pass=" + $.inputCodigo.value);
            xhr.send({
                password: $.inputPass.value,
                password2: $.inputPass2.value
            });
        } else alert("La contraseña debe coincidir con la cofirmación."); else alert("Debe llenar todos los campos.");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "resetearContrasena";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.resetearContrasena = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
        id: "resetearContrasena"
    });
    $.__views.resetearContrasena && $.addTopLevelView($.__views.resetearContrasena);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.6%",
        id: "wrapper"
    });
    $.__views.resetearContrasena.add($.__views.wrapper);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        orientation: "horizontal",
        id: "marcas"
    });
    $.__views.resetearContrasena.add($.__views.marcas);
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
        height: "40%",
        id: "main"
    });
    $.__views.resetearContrasena.add($.__views.main);
    $.__views.imagenIndex = Ti.UI.createImageView({
        width: "100%",
        height: "100%",
        image: "/img/fondoRegistroMin.jpg",
        id: "imagenIndex"
    });
    $.__views.main.add($.__views.imagenIndex);
    $.__views.inputs = Ti.UI.createView({
        width: "100%",
        height: "27.2%",
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "inputs"
    });
    $.__views.resetearContrasena.add($.__views.inputs);
    $.__views.inputCodigo = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "33%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        font: {
            fontSize: "12sp"
        },
        id: "inputCodigo",
        hintText: "CÓDIGO"
    });
    $.__views.inputs.add($.__views.inputCodigo);
    $.__views.inputPass = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "33%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        font: {
            fontSize: "12sp"
        },
        id: "inputPass",
        hintText: "PASSWORD"
    });
    $.__views.inputs.add($.__views.inputPass);
    $.__views.inputPass2 = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "33%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        font: {
            fontSize: "12sp"
        },
        id: "inputPass2",
        hintText: "CONFIRMAR PASSWORD"
    });
    $.__views.inputs.add($.__views.inputPass2);
    $.__views.margenB = Ti.UI.createView({
        height: "5.2%",
        width: "100%",
        backgroundColor: "white",
        id: "margenB"
    });
    $.__views.resetearContrasena.add($.__views.margenB);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.6%",
        id: "footer"
    });
    $.__views.resetearContrasena.add($.__views.footer);
    $.__views.resetear = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        font: {
            fontWeight: "bold"
        },
        title: "RESETEAR CONTRSASEÑA",
        id: "resetear"
    });
    $.__views.footer.add($.__views.resetear);
    resetear ? $.__views.resetear.addEventListener("click", resetear) : __defers["$.__views.resetear!click!resetear"] = true;
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
    __defers["$.__views.__alloyId5!click!atras"] && $.__views.__alloyId5.addEventListener("click", atras);
    __defers["$.__views.resetear!click!resetear"] && $.__views.resetear.addEventListener("click", resetear);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;