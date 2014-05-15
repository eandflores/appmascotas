function Controller() {
    function productosNombre(nombre) {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio,
            direccion: direccion,
            categoria: "TODAS",
            marca: "TODAS",
            nombre: nombre,
            pagina: 1
        }).getView().open();
    }
    function productosPerroGato() {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio,
            direccion: direccion,
            categoria: categorias[3],
            marca: "TODAS",
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
    }
    function productosPerro() {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio,
            direccion: direccion,
            categoria: categorias[1],
            marca: "TODAS",
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
    }
    function productosGato() {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio,
            direccion: direccion,
            categoria: categorias[2],
            marca: "TODAS",
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
    }
    function guardar() {
        var direccionString = "";
        "" != $.calle.value && (direccionString += $.calle.value + " ");
        "" != $.numero.value && (direccionString += $.numero.value + " ");
        "" != $.departamento.value && (direccionString += $.departamento.value + " ");
        "" != $.esquina.value && (direccionString += $.esquina.value + " ");
        "" != $.telefono.value && (direccionString += $.telefono.value);
        var direccionPost = {
            direccion: direccionString,
            comuna: $.comuna.value,
            ciudad: $.ciudad.value
        };
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                try {
                    JSON.parse(this.responseText);
                    direcciones.push(direccionPost);
                    Alloy.createController("direccion", {
                        token: token,
                        carro: carro,
                        marcas: marcas,
                        productos: productos,
                        medios: medios,
                        direcciones: direcciones,
                        usuario: usuario,
                        medio: medio,
                        direccion: direccion
                    }).getView().open();
                } catch (e) {
                    alert("Error de conexión con el servidor.");
                }
            },
            onerror: function() {
                alert("Error de conexión con el servidor.");
            }
        });
        xhr.open("POST", "http://tiendapet.cl/api/usuario/direcciones/?user_token=" + token);
        xhr.send(direccionPost);
    }
    function atras() {
        $.agregarDireccion.close();
    }
    function buscarProducto() {
        var winModal;
        var viewModal;
        var buscar;
        var inputsBuscar;
        var lupa;
        var cerrar;
        $.wrapper.opacity = 0;
        var winModal = Ti.UI.createWindow({
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            opacity: .85,
            navBarHidden: "true"
        });
        var viewModal = Ti.UI.createView({
            width: "100%",
            height: "9.5%",
            layout: "horizontal",
            backgroundImage: "/img/fondoBuscar.jpg",
            top: "0%"
        });
        var buscar = Ti.UI.createTextField({
            width: "72%",
            height: "100%",
            hintText: "¿Que es lo que buscas?",
            textAlign: "center",
            color: "white",
            backgroundColor: "#cb5122"
        });
        var inputsBuscar = Ti.UI.createView({
            width: "28%",
            height: "100%",
            backgroundColor: "#cb5122",
            layout: "horizontal"
        });
        var lupa = Ti.UI.createView({
            width: "40%",
            height: "70%",
            left: "5%",
            right: "5%",
            top: "15%",
            bottom: "15%",
            backgroundImage: "/img/lupaBuscar.jpg"
        });
        lupa.addEventListener("click", function() {
            $.wrapper.opacity = 1;
            winModal.close();
            productosNombre(buscar.value);
        });
        var cerrar = Ti.UI.createView({
            left: "7.5%",
            right: "7.5%",
            top: "25%",
            bottom: "25%",
            width: "25%",
            height: "50%",
            backgroundImage: "/img/cerrar.jpg"
        });
        cerrar.addEventListener("click", function() {
            $.wrapper.opacity = 1;
            winModal.close();
        });
        winModal.addEventListener("android:back", function() {
            $.wrapper.opacity = 1;
            winModal.close();
            return true;
        });
        viewModal.add(buscar);
        inputsBuscar.add(lupa);
        inputsBuscar.add(cerrar);
        viewModal.add(inputsBuscar);
        winModal.add(viewModal);
        winModal.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "agregarDireccion";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.agregarDireccion = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        id: "agregarDireccion"
    });
    $.__views.agregarDireccion && $.addTopLevelView($.__views.agregarDireccion);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.agregarDireccion.add($.__views.wrapper);
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
    buscarProducto ? $.__views.lupaImg.addEventListener("click", buscarProducto) : __defers["$.__views.lupaImg!click!buscarProducto"] = true;
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "marcas"
    });
    $.__views.agregarDireccion.add($.__views.marcas);
    $.__views.flecha = Ti.UI.createImageView({
        width: "14%",
        height: "85%",
        id: "flecha",
        backgroundImage: "/img/FlechaIzq.jpg"
    });
    $.__views.marcas.add($.__views.flecha);
    atras ? $.__views.flecha.addEventListener("click", atras) : __defers["$.__views.flecha!click!atras"] = true;
    $.__views.direccionTitulo = Ti.UI.createImageView({
        width: "72%",
        height: "85%",
        id: "direccionTitulo",
        backgroundImage: "/img/direccion.jpg"
    });
    $.__views.marcas.add($.__views.direccionTitulo);
    $.__views.casa = Ti.UI.createImageView({
        left: "2%",
        top: "25%",
        bottom: "25%",
        width: "10%",
        height: "50%",
        id: "casa",
        backgroundImage: "/img/casa.png"
    });
    $.__views.direccionTitulo.add($.__views.casa);
    $.__views.margen = Ti.UI.createView({
        width: "100%",
        height: "3.1%",
        id: "margen",
        backgroundImage: "/img/Margen.jpg"
    });
    $.__views.agregarDireccion.add($.__views.margen);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "69.8%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.agregarDireccion.add($.__views.main);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "__alloyId0"
    });
    $.__views.main.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Calle",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.calle = Ti.UI.createTextField({
        height: "80%",
        width: "60%",
        right: "8.8%",
        top: "10%",
        bottom: "10%",
        color: "#888888",
        font: {
            fontWeight: "bold"
        },
        backgroundColor: "#d8d8d8",
        id: "calle"
    });
    $.__views.__alloyId0.add($.__views.calle);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        backgroundImage: "/img/labelOscuro.jpg",
        id: "__alloyId2"
    });
    $.__views.main.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Nro.",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.numero = Ti.UI.createTextField({
        height: "80%",
        width: "60%",
        right: "8.8%",
        top: "10%",
        bottom: "10%",
        color: "#888888",
        font: {
            fontWeight: "bold"
        },
        backgroundColor: "#d8d8d8",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "numero"
    });
    $.__views.__alloyId2.add($.__views.numero);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "__alloyId4"
    });
    $.__views.main.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Depto.",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.departamento = Ti.UI.createTextField({
        height: "80%",
        width: "60%",
        right: "8.8%",
        top: "10%",
        bottom: "10%",
        color: "#888888",
        font: {
            fontWeight: "bold"
        },
        backgroundColor: "#d8d8d8",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "departamento"
    });
    $.__views.__alloyId4.add($.__views.departamento);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        backgroundImage: "/img/labelOscuro.jpg",
        id: "__alloyId6"
    });
    $.__views.main.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Esquina",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.esquina = Ti.UI.createTextField({
        height: "80%",
        width: "60%",
        right: "8.8%",
        top: "10%",
        bottom: "10%",
        color: "#888888",
        font: {
            fontWeight: "bold"
        },
        backgroundColor: "#d8d8d8",
        id: "esquina"
    });
    $.__views.__alloyId6.add($.__views.esquina);
    $.__views.__alloyId8 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "__alloyId8"
    });
    $.__views.main.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Ciudad",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.ciudad = Ti.UI.createTextField({
        height: "80%",
        width: "60%",
        right: "8.8%",
        top: "10%",
        bottom: "10%",
        color: "#888888",
        font: {
            fontWeight: "bold"
        },
        backgroundColor: "#d8d8d8",
        id: "ciudad"
    });
    $.__views.__alloyId8.add($.__views.ciudad);
    $.__views.__alloyId10 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        backgroundImage: "/img/labelOscuro.jpg",
        id: "__alloyId10"
    });
    $.__views.main.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Comuna",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.comuna = Ti.UI.createTextField({
        height: "80%",
        width: "60%",
        right: "8.8%",
        top: "10%",
        bottom: "10%",
        color: "#888888",
        font: {
            fontWeight: "bold"
        },
        backgroundColor: "#d8d8d8",
        id: "comuna"
    });
    $.__views.__alloyId10.add($.__views.comuna);
    $.__views.__alloyId12 = Ti.UI.createView({
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "__alloyId12"
    });
    $.__views.main.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: "20.2%",
        left: "11%",
        height: "100%",
        color: "#7b7b7b",
        font: {
            fontWeight: "bold"
        },
        text: "Teléfono",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.telefono = Ti.UI.createTextField({
        height: "80%",
        width: "60%",
        right: "8.8%",
        top: "10%",
        bottom: "10%",
        color: "#888888",
        font: {
            fontWeight: "bold"
        },
        backgroundColor: "#d8d8d8",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "telefono"
    });
    $.__views.__alloyId12.add($.__views.telefono);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.6%",
        id: "footer"
    });
    $.__views.agregarDireccion.add($.__views.footer);
    $.__views.agregar = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        font: {
            fontWeight: "bold"
        },
        title: "AGREGAR",
        id: "agregar"
    });
    $.__views.footer.add($.__views.agregar);
    guardar ? $.__views.agregar.addEventListener("click", guardar) : __defers["$.__views.agregar!click!guardar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var categorias = [];
    categorias[1] = "Perro";
    categorias[2] = "Gato";
    categorias[3] = "TODAS";
    var carro = args["carro"];
    var token = args["token"];
    var marcas = args["marcas"];
    var productos = args["productos"];
    var medios = args["medios"];
    var direcciones = args["direcciones"];
    var usuario = args["usuario"];
    var medio = args["medio"];
    var direccion = args["direccion"];
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    __defers["$.__views.lupaImg!click!buscarProducto"] && $.__views.lupaImg.addEventListener("click", buscarProducto);
    __defers["$.__views.flecha!click!atras"] && $.__views.flecha.addEventListener("click", atras);
    __defers["$.__views.agregar!click!guardar"] && $.__views.agregar.addEventListener("click", guardar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;