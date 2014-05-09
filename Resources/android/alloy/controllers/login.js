function Controller() {
    function recuperarContraseña() {
        Alloy.createController("recuperarContrasena").getView().open();
    }
    function registro() {
        winCargando.open();
        var email = $.inputCorreo.value;
        var password = $.inputClave.value;
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                var response = JSON.parse(this.responseText);
                var token = response["token"];
                getProductos(token, marcas);
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
                winCargando.close();
            }
        });
        xhr.open("POST", "http://tiendapet.cl/api/usuario/login");
        xhr.send({
            email: email,
            password: password
        });
    }
    function getProductos(token, marcas) {
        var xhrProductos = Ti.Network.createHTTPClient({
            onload: function() {
                var productos = JSON.parse(this.responseText);
                var vista = Alloy.createController("productos", {
                    token: token,
                    carro: [],
                    marcas: marcas,
                    productos: productos,
                    medios: [],
                    direcciones: [],
                    medio: null,
                    direccion: null,
                    correo: null,
                    telefono: null,
                    categoria: "TODAS",
                    marca: "TODAS",
                    nombre: "TODOS"
                }).getView();
                winCargando.close();
                vista.open();
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
                winCargando.close();
            }
        });
        xhrProductos.open("GET", "http://tiendapet.cl/api/productos/?desde=1&cantidad=-1");
        xhrProductos.send();
    }
    function atras() {
        $.login.close();
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
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.6%",
        id: "wrapper"
    });
    $.__views.login.add($.__views.wrapper);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        orientation: "horizontal",
        id: "marcas"
    });
    $.__views.login.add($.__views.marcas);
    $.__views.__alloyId24 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        left: "0%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId24"
    });
    $.__views.marcas.add($.__views.__alloyId24);
    atras ? $.__views.__alloyId24.addEventListener("click", atras) : __defers["$.__views.__alloyId24!click!atras"] = true;
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "52.2%",
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
        height: "12.6%",
        layout: "vertical",
        backgroundColor: "#f5f5f5",
        id: "inputs"
    });
    $.__views.login.add($.__views.inputs);
    $.__views.inputCorreo = Ti.UI.createTextField({
        height: "50%",
        left: "10%",
        width: "90%",
        backgroundColor: "#f5f5f5",
        color: "#585858",
        id: "inputCorreo",
        hintText: "CORREO"
    });
    $.__views.inputs.add($.__views.inputCorreo);
    $.__views.inputClave = Ti.UI.createTextField({
        height: "50%",
        left: "10%",
        width: "90%",
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
    $.__views.login.add($.__views.layout);
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
    $.__views.login.add($.__views.footer);
    $.__views.registro = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        font: {
            fontWeight: "bold"
        },
        title: "INICIAR SESIÓN",
        id: "registro"
    });
    $.__views.footer.add($.__views.registro);
    registro ? $.__views.registro.addEventListener("click", registro) : __defers["$.__views.registro!click!registro"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var marcas = args["marcas"];
    $.inputCorreo.value = "prueba3";
    $.inputClave.value = "123";
    var winCargando;
    var labelCargando;
    var winCargando = Ti.UI.createWindow({
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
        opacity: .7,
        navBarHidden: "true"
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
    __defers["$.__views.__alloyId24!click!atras"] && $.__views.__alloyId24.addEventListener("click", atras);
    __defers["$.__views.recuperarContraseña!click!recuperarContraseña"] && $.__views.recuperarContraseña.addEventListener("click", recuperarContraseña);
    __defers["$.__views.registro!click!registro"] && $.__views.registro.addEventListener("click", registro);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;