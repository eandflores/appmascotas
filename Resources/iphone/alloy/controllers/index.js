function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function login() {
        if ("" != $.inputCorreo.value && "" != $.inputClave.value) if (Titanium.Network.online) {
            winCargando.open();
            if (null == token) {
                var xhr = Ti.Network.createHTTPClient({
                    onload: function() {
                        try {
                            var response = JSON.parse(this.responseText);
                            var db = Ti.Database.open("TiendaPet");
                            db.execute("INSERT INTO params (name, user, pass) VALUES (?,?,?)", "cookie", $.inputCorreo.value, $.inputClave.value);
                            db.close();
                            getMarcas(response["token"]);
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
                xhr.open("POST", "http://tiendapet.cl/api/usuario/login");
                xhr.send({
                    email: $.inputCorreo.value,
                    password: $.inputClave.value
                });
            } else getMarcas(token);
        } else alert("No hay conexión a la red."); else alert("Debe llenar todos los campos.");
    }
    function login2(correo, pass) {
        if (Titanium.Network.online) {
            winCargando.open();
            if (null == token) {
                var xhr = Ti.Network.createHTTPClient({
                    onload: function() {
                        try {
                            var response = JSON.parse(this.responseText);
                            getMarcas(response["token"]);
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
                xhr.open("POST", "http://tiendapet.cl/api/usuario/login");
                xhr.send({
                    email: correo,
                    password: pass
                });
            } else getMarcas(token);
        } else alert("No hay conexión a la red.");
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
                        alert("Error de conexión con els ervidor.");
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
        Ti.API.info(token);
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
                    }
                },
                onerror: function() {
                    alert("Error de conexión con el servidor.");
                }
            });
            xhrUsuario.open("GET", "http://tiendapet.cl/api/usuario/?user_token=" + token);
            xhrUsuario.send();
        }
    }
    function registro() {
        Alloy.createController("registro", {
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
    }
    function recuperarContraseña() {
        Alloy.createController("recuperarContrasena", {
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
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
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
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
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
        font: {
            fontSize: "11sp"
        },
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
        font: {
            fontSize: "11sp"
        },
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
        font: {
            fontWeight: "bold",
            fontSize: "12sp"
        },
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
            fontWeight: "bold",
            fontSize: "12sp"
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
    var token = null;
    var carro = [];
    var marcas = [];
    var productos = [];
    var medios = [];
    var direcciones = [];
    if (args.length > 0) {
        marcas = args["marcas"];
        productos = args["productos"];
        medios = args["medios"];
    }
    var usuario = null;
    var medio = null;
    var direccion = null;
    var descuento = null;
    var pedidos = [];
    var notificaciones = [];
    cargarLoading();

    var db = Ti.Database.open("TiendaPet");
    db.execute("CREATE TABLE IF NOT EXISTS params(name TEXT, user TEXT, pass TEXT)");
    var row = db.execute("SELECT user,pass FROM params where name=?", "cookie");
    if (row.rowCount > 0) while (row.isValidRow()) {
        row.fieldByName("user") && row.fieldByName("pass") ? login2(row.fieldByName("user"), row.fieldByName("pass")) : alert("Empty");
        row.next();
    }
    db.close();
    $.inputCorreo.value = "Pruebafinal2";
    $.inputClave.value = "1234";
    __defers["$.__views.recuperarContraseña!click!recuperarContraseña"] && $.__views.recuperarContraseña.addEventListener("click", recuperarContraseña);
    __defers["$.__views.login!click!login"] && $.__views.login.addEventListener("click", login);
    __defers["$.__views.registro!click!registro"] && $.__views.registro.addEventListener("click", registro);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;