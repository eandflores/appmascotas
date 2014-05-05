function Controller() {
    function cargarMedios(medios) {
        var mainScroll = $.mainScroll;
        for (i = 0; medios.length > i; i++) {
            var MedioPago = Ti.UI.createView({
                backgroundImage: "/img/flechaPagos.jpg",
                width: "100%",
                id: medios[i]["id"],
                height: "98px"
            });
            MedioPago.addEventListener("click", function() {
                selectMedio(this["id"]);
            });
            var Margen = Ti.UI.createView({
                width: "100%",
                height: "2px",
                backgroundColor: "#e8e8e8"
            });
            var Label = Ti.UI.createLabel({
                left: "7%",
                width: "86%",
                height: "100%",
                color: "#5c5c5b",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                text: medios[i]["paym_name"]
            });
            MedioPago.add(Label);
            mainScroll.add(MedioPago);
            mainScroll.add(Margen);
        }
    }
    function selectMedio(medio_id) {
        var vista = Alloy.createController("realizarPedido", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio_id,
            direccion: direccion,
            correo: correo,
            telefono: telefono
        }).getView();
        vista.open();
    }
    function productosPerroGato() {
        var vista = Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
            categoria: categorias[3],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosPerro() {
        var vista = Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
            categoria: categorias[1],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosGato() {
        var vista = Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
            categoria: categorias[2],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function atras() {
        win.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "medioPago";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.medioPago = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        bottom: "0%",
        height: "96.5%",
        id: "medioPago"
    });
    $.__views.medioPago && $.addTopLevelView($.__views.medioPago);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.medioPago.add($.__views.wrapper);
    $.__views.menuImg = Ti.UI.createImageView({
        width: "14%",
        height: "100%",
        backgroundImage: "/img/menu.jpg",
        id: "menuImg"
    });
    $.__views.wrapper.add($.__views.menuImg);
    $.__views.perrogato = Ti.UI.createImageView({
        width: "28%",
        height: "100%",
        backgroundImage: "/img/perrogato.jpg",
        id: "perrogato"
    });
    $.__views.wrapper.add($.__views.perrogato);
    productosPerroGato ? $.__views.perrogato.addEventListener("click", productosPerroGato) : __defers["$.__views.perrogato!click!productosPerroGato"] = true;
    $.__views.perro = Ti.UI.createImageView({
        width: "22%",
        height: "100%",
        backgroundImage: "/img/perro.jpg",
        id: "perro"
    });
    $.__views.wrapper.add($.__views.perro);
    productosPerro ? $.__views.perro.addEventListener("click", productosPerro) : __defers["$.__views.perro!click!productosPerro"] = true;
    $.__views.gato = Ti.UI.createImageView({
        width: "22%",
        height: "100%",
        backgroundImage: "/img/gato.jpg",
        id: "gato"
    });
    $.__views.wrapper.add($.__views.gato);
    productosGato ? $.__views.gato.addEventListener("click", productosGato) : __defers["$.__views.gato!click!productosGato"] = true;
    $.__views.lupaImg = Ti.UI.createImageView({
        width: "14%",
        height: "100%",
        backgroundImage: "/img/lupa.jpg",
        id: "lupaImg"
    });
    $.__views.wrapper.add($.__views.lupaImg);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "marcas"
    });
    $.__views.medioPago.add($.__views.marcas);
    $.__views.flecha = Ti.UI.createImageView({
        width: "14%",
        height: "85%",
        id: "flecha",
        backgroundImage: "/img/FlechaIzq.jpg"
    });
    $.__views.marcas.add($.__views.flecha);
    atras ? $.__views.flecha.addEventListener("click", atras) : __defers["$.__views.flecha!click!atras"] = true;
    $.__views.medios = Ti.UI.createImageView({
        width: "72%",
        height: "85%",
        id: "medios",
        backgroundImage: "/img/medioPago.jpg"
    });
    $.__views.marcas.add($.__views.medios);
    $.__views.margen = Ti.UI.createView({
        width: "100%",
        height: "3.1%",
        id: "margen",
        backgroundImage: "/img/Margen.jpg"
    });
    $.__views.medioPago.add($.__views.margen);
    $.__views.mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "77.4%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "mainScroll"
    });
    $.__views.medioPago.add($.__views.mainScroll);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = $.medioPago;
    var args = arguments[0] || {};
    carro = args["carro"];
    token = args["token"];
    marcas = args["marcas"];
    productos = args["productos"];
    medios = args["medios"];
    direcciones = args["direcciones"];
    medio = args["medio"];
    direccion = args["direccion"];
    correo = args["correo"];
    telefono = args["telefono"];
    if (medios.length > 0) cargarMedios(medios); else {
        xhr = Ti.Network.createHTTPClient({
            onload: function() {
                medios = JSON.parse(this.responseText);
                cargarMedios(medios);
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
            }
        });
        xhr.open("GET", "http://tiendapet.cl/api/pagos");
        xhr.send();
    }
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    __defers["$.__views.flecha!click!atras"] && $.__views.flecha.addEventListener("click", atras);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;