function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function registro() {
        if ("" != $.inputNombre.value && "" != $.inputTelefono.value && "" != $.inputCorreo.value && "" != $.inputContraseña.value) if ($.inputContraseña.value == $.inputContraseña2.value) if (Titanium.Network.online) {
            winCargando.open();
            var nombre = $.inputNombre.value;
            var telefono = $.inputTelefono.value;
            var email = $.inputCorreo.value;
            var password = $.inputContraseña.value;
            $.inputContraseña2.value;
            var xhr = Ti.Network.createHTTPClient({
                onload: function(e) {
                    try {
                        var response = JSON.parse(this.responseText);
                        getMarcas(response["token"]);
                    } catch (e) {
                        alert(e);
                        winCargando.close();
                        winCargando.close();
                        winCargando.close();
                    }
                },
                onerror: function(e) {
                    alert(e);
                    winCargando.close();
                    winCargando.close();
                    winCargando.close();
                }
            });
            xhr.open("POST", "http://tiendapet.cl/api/usuario/registrar");
            xhr.send({
                nombre: nombre,
                telefono: telefono,
                email: email,
                password: password
            });
        } else alert("No hay conexión a la red."); else alert("La contraseña debe coincidir con la cofirmación."); else alert("Debe llenar todos los campos.");
    }
    function getMarcas(token) {
        if (0 == marcas.length) {
            var xhrMarcas = Ti.Network.createHTTPClient({
                onload: function() {
                    try {
                        getProductos(token, JSON.parse(this.responseText));
                    } catch (e) {
                        alert("Error de conexión con el servidor.");
                        winCargando.close();
                        winCargando.close();
                        winCargando.close();
                    }
                },
                onerror: function() {
                    alert("Error de conexión con el servidor.");
                    winCargando.close();
                    winCargando.close();
                    winCargando.close();
                }
            });
            xhrMarcas.open("GET", "http://tiendapet.cl/api/marcas");
            xhrMarcas.send();
        } else getProductos(token, marcas);
    }
    function getProductos(token, marcas) {
        if (0 == productos.length) {
            var xhrProductos = Ti.Network.createHTTPClient({
                onload: function() {
                    try {
                        getUsuario(token, marcas, JSON.parse(this.responseText));
                    } catch (e) {
                        alert("Error de conexión con el servidor.");
                        winCargando.close();
                        winCargando.close();
                        winCargando.close();
                    }
                },
                onerror: function() {
                    alert("Error de conexión con el servidor.");
                    winCargando.close();
                    winCargando.close();
                    winCargando.close();
                }
            });
            xhrProductos.open("GET", "http://tiendapet.cl/api/productos/?desde=1&cantidad=-1");
            xhrProductos.send();
        } else getUsuario(token, marcas, productos);
    }
    function getUsuario(token, marcas, productos) {
        if (null != usuario) Alloy.createController("productos", {
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
            notificaciones: notificaciones,
            categoria: "TODAS",
            marca: "TODAS",
            nombre: "TODOS",
            pagina: 1
        }).getView().open(); else {
            var xhrUsuario = Ti.Network.createHTTPClient({
                onload: function() {
                    try {
                        Alloy.createController("productos", {
                            token: token,
                            carro: carro,
                            marcas: marcas,
                            productos: productos,
                            medios: medios,
                            direcciones: direcciones,
                            usuario: JSON.parse(this.responseText),
                            medio: medio,
                            direccion: direccion,
                            descuento: descuento,
                            pedidos: pedidos,
                            notificaciones: notificaciones,
                            categoria: "TODAS",
                            marca: "TODAS",
                            nombre: "TODOS",
                            pagina: 1
                        }).getView().open();
                    } catch (e) {
                        alert("Error de conexión con el servidor.");
                        winCargando.close();
                        winCargando.close();
                        winCargando.close();
                    }
                },
                onerror: function() {
                    alert("Error de conexión con el servidor.");
                    winCargando.close();
                    winCargando.close();
                    winCargando.close();
                }
            });
            xhrUsuario.open("GET", "http://tiendapet.cl/api/usuario/?user_token=" + token);
            xhrUsuario.send();
        }
    }
    function atras() {
        $.registro.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "registro";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.registro = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        bottom: "0%",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
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
    $.__views.__alloyId4 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        left: "0%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId4"
    });
    $.__views.marcas.add($.__views.__alloyId4);
    atras ? $.__views.__alloyId4.addEventListener("click", atras) : __defers["$.__views.__alloyId4!click!atras"] = true;
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "30%",
        id: "main"
    });
    $.__views.registro.add($.__views.main);
    $.__views.imagenIndex = Ti.UI.createImageView({
        width: "100%",
        height: "100%",
        image: "/img/fondoRegistroMin.jpg",
        id: "imagenIndex"
    });
    $.__views.main.add($.__views.imagenIndex);
    $.__views.inputs = Ti.UI.createView({
        width: "100%",
        height: "37.2%",
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "inputs"
    });
    $.__views.registro.add($.__views.inputs);
    $.__views.inputNombre = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "20%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputNombre",
        hintText: "NOMBRE"
    });
    $.__views.inputs.add($.__views.inputNombre);
    $.__views.inputTelefono = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "20%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputTelefono",
        hintText: "TELÉFONO"
    });
    $.__views.inputs.add($.__views.inputTelefono);
    $.__views.inputCorreo = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "20%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputCorreo",
        hintText: "CORREO"
    });
    $.__views.inputs.add($.__views.inputCorreo);
    $.__views.inputContraseña = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "20%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputContraseña",
        hintText: "CONTRASEÑA",
        passwordMask: "true"
    });
    $.__views.inputs.add($.__views.inputContraseña);
    $.__views.inputContraseña2 = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "20%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputContraseña2",
        hintText: "CONFIRMAR CONTRASEÑA",
        passwordMask: "true"
    });
    $.__views.inputs.add($.__views.inputContraseña2);
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
        font: {
            fontWeight: "bold"
        },
        title: "REGISTRARSE",
        id: "registrarse"
    });
    $.__views.footer.add($.__views.registrarse);
    registro ? $.__views.registrarse.addEventListener("click", registro) : __defers["$.__views.registrarse!click!registro"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args["token"];
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
    cargarLoading();
    __defers["$.__views.__alloyId4!click!atras"] && $.__views.__alloyId4.addEventListener("click", atras);
    __defers["$.__views.registrarse!click!registro"] && $.__views.registrarse.addEventListener("click", registro);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;