function Controller() {
    function recuperarContraseña() {
        Alloy.createController("recuperarContrasena").getView().open();
    }
    function login() {
        winCargando.open();
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                try {
                    var response = JSON.parse(this.responseText);
                    var token = response["token"];
                    getMarcas(token);
                } catch (e) {
                    alert("Error de conexión con el servidor.");
                    winCargando.close();
                }
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
                winCargando.close();
            }
        });
        xhr.open("POST", "http://tiendapet.cl/api/usuario/login");
        xhr.send({
            email: $.inputCorreo.value,
            password: $.inputClave.value
        });
    }
    function getMarcas(token) {
        winCargando.open();
        var xhrMarcas = Ti.Network.createHTTPClient({
            onload: function() {
                try {
                    var marcas = JSON.parse(this.responseText);
                    var vista = Alloy.createController("productos", {
                        token: token,
                        carro: [],
                        marcas: marcas,
                        productos: productos,
                        medios: [],
                        direcciones: [],
                        usuario: null,
                        medio: null,
                        direccion: null,
                        categoria: "TODAS",
                        marca: "TODAS",
                        nombre: "TODOS",
                        pagina: 1
                    }).getView();
                    winCargando.close();
                    vista.open();
                } catch (e) {
                    alert("Error de conexión con el servidor.");
                    winCargando.close();
                }
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
                winCargando.close();
            }
        });
        xhrMarcas.open("GET", "http://tiendapet.cl/api/marcas");
        xhrMarcas.send();
    }
    function registro() {
        winCargando.open();
        var xhrMarcas = Ti.Network.createHTTPClient({
            onload: function() {
                try {
                    var marcas = JSON.parse(this.responseText);
                    var vista = Alloy.createController("registro", {
                        marcas: marcas,
                        productos: productos
                    }).getView();
                    winCargando.close();
                    vista.open();
                } catch (e) {
                    alert("Error de conexión con el servidor.");
                    winCargando.close();
                }
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
                winCargando.close();
            }
        });
        xhrMarcas.open("GET", "http://tiendapet.cl/api/marcas");
        xhrMarcas.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        exitOnClose: true,
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        bottom: "0%",
        height: "96.5%",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.6%",
        id: "wrapper"
    });
    $.__views.index.add($.__views.wrapper);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        orientation: "horizontal",
        id: "marcas"
    });
    $.__views.index.add($.__views.marcas);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "52.2%",
        id: "main"
    });
    $.__views.index.add($.__views.main);
    $.__views.imagenIndex = Ti.UI.createImageView({
        width: "100%",
        height: "100%",
        image: "/img/fondoRegistro.jpg",
        id: "imagenIndex"
    });
    $.__views.main.add($.__views.imagenIndex);
    $.__views.inputs = Ti.UI.createView({
        width: "100%",
        height: "12.6%",
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "inputs"
    });
    $.__views.index.add($.__views.inputs);
    $.__views.inputCorreo = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "50%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputCorreo",
        hintText: "CORREO"
    });
    $.__views.inputs.add($.__views.inputCorreo);
    $.__views.inputClave = Ti.UI.createTextField({
        left: "10%",
        width: "90%",
        height: "50%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputClave",
        hintText: "CLAVE",
        passwordMask: "true"
    });
    $.__views.inputs.add($.__views.inputClave);
    $.__views.layout = Ti.UI.createView({
        height: "8%",
        width: "100%",
        backgroundColor: "white",
        id: "layout"
    });
    $.__views.index.add($.__views.layout);
    $.__views.recuperarContraseña = Ti.UI.createLabel({
        height: "100%",
        width: "100%",
        color: "#cc5122",
        font: {
            fontWeight: "bold",
            fontSize: "12sp"
        },
        textAlign: "center",
        text: "¿HAS OLVIDADO TU CONTRASEÑA?",
        id: "recuperarContraseña"
    });
    $.__views.layout.add($.__views.recuperarContraseña);
    recuperarContraseña ? $.__views.recuperarContraseña.addEventListener("click", recuperarContraseña) : __defers["$.__views.recuperarContraseña!click!recuperarContraseña"] = true;
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.6%",
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
    login ? $.__views.login.addEventListener("click", login) : __defers["$.__views.login!click!login"] = true;
    $.__views.registro = Ti.UI.createButton({
        backgroundColor: "#5b7256",
        color: "white",
        width: "50%",
        height: "100%",
        font: {
            fontWeight: "bold"
        },
        title: "REGISTRARSE",
        id: "registro"
    });
    $.__views.footer.add($.__views.registro);
    registro ? $.__views.registro.addEventListener("click", registro) : __defers["$.__views.registro!click!registro"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    var args = arguments[0] || {};
    var productos = args["productos"];
    var winCargando;
    var labelCargando;
    var winCargando = Ti.UI.createWindow({
        backgroundColor: "#000",
        width: "100%",
        top: "3.5%",
        height: "96.5%",
        opacity: .7
    });
    var labelCargando = Ti.UI.createLabel({
        width: "100%",
        height: "20%",
        top: "40%",
        bottom: "40%",
        text: "CARGANDO...",
        textAlign: "center",
        color: "white",
        font: {
            fontWeight: "bold"
        }
    });
    winCargando.add(labelCargando);
    if (null == productos) {
        winCargando.open();
        var xhrProductos = Ti.Network.createHTTPClient({
            onload: function() {
                try {
                    productos = JSON.parse(this.responseText);
                    winCargando.close();
                } catch (e) {
                    alert("Error de conexión con els ervidor.");
                    winCargando.close();
                }
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
                winCargando.close();
            }
        });
        xhrProductos.open("GET", "http://tiendapet.cl/api/productos/?desde=1&cantidad=-1");
        xhrProductos.send();
    }
    $.inputCorreo.value = "prueba3";
    $.inputClave.value = "123";
    __defers["$.__views.recuperarContraseña!click!recuperarContraseña"] && $.__views.recuperarContraseña.addEventListener("click", recuperarContraseña);
    __defers["$.__views.login!click!login"] && $.__views.login.addEventListener("click", login);
    __defers["$.__views.registro!click!registro"] && $.__views.registro.addEventListener("click", registro);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;