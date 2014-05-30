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
    function setDireccion() {
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
    }
    function setCorreo() {
        Alloy.createController("email", {
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
    }
    function setMedioPago() {
        Alloy.createController("medioPago", {
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
    }
    function setTelefono() {
        Alloy.createController("telefono", {
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
    }
    function setCupon() {}
    function gracias() {
        winCargando.open();
        if (null != medio && null != direccion) {
            var xhr = Ti.Network.createHTTPClient({
                onload: function() {
                    try {
                        JSON.parse(this.responseText);
                        var vista = Alloy.createController("gracias", {
                            token: token,
                            carro: [],
                            marcas: marcas,
                            productos: productos,
                            medios: medios,
                            direcciones: direcciones,
                            usuario: usuario,
                            medio: null,
                            direccion: null
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
            xhr.open("POST", "http://tiendapet.cl/api/comprar?user_token=" + token);
            xhr.send({
                pago: medio["id"],
                cart: JSON.stringify(carro),
                direccion: direccion["id"]
            });
        } else {
            alert("Debe seleccionar una dirección y medio de pago.");
            winCargando.close();
        }
    }
    function atras() {
        $.realizarPedido.close();
    }
    function buscarProducto() {
        var winModal;
        var viewModal;
        var buscar;
        var inputsBuscar;
        var lupa;
        var cerrar;
        var winModal = Ti.UI.createWindow({
            backgroundColor: "#000",
            width: "100%",
            top: "3.5%",
            height: "9.1%"
        });
        var viewModal = Ti.UI.createView({
            width: "100%",
            height: "100%",
            layout: "horizontal",
            backgroundImage: "/img/fondoBuscar.jpg",
            top: "0%"
        });
        var buscar = Ti.UI.createTextField({
            width: "72%",
            height: "100%",
            hintText: "¿Que es lo que buscas?",
            color: "white",
            textAlign: "center"
        });
        var inputsBuscar = Ti.UI.createView({
            width: "28%",
            height: "100%",
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
            winModal.close();
        });
        viewModal.add(buscar);
        inputsBuscar.add(lupa);
        inputsBuscar.add(cerrar);
        viewModal.add(inputsBuscar);
        winModal.add(viewModal);
        winModal.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "realizarPedido";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.realizarPedido = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        bottom: "0%",
        height: "96.5%",
        id: "realizarPedido"
    });
    $.__views.realizarPedido && $.addTopLevelView($.__views.realizarPedido);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.realizarPedido.add($.__views.wrapper);
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
    $.__views.realizarPedido.add($.__views.marcas);
    $.__views.flecha = Ti.UI.createImageView({
        width: "14%",
        height: "85%",
        id: "flecha",
        backgroundImage: "/img/FlechaIzq.jpg"
    });
    $.__views.marcas.add($.__views.flecha);
    atras ? $.__views.flecha.addEventListener("click", atras) : __defers["$.__views.flecha!click!atras"] = true;
    $.__views.pedidoTitulo = Ti.UI.createImageView({
        width: "72%",
        height: "85%",
        id: "pedidoTitulo",
        backgroundImage: "/img/envioPedido.jpg"
    });
    $.__views.marcas.add($.__views.pedidoTitulo);
    $.__views.envioGratis = Ti.UI.createView({
        width: "100%",
        height: "4%",
        id: "envioGratis",
        backgroundImage: "/img/envioGratis.jpg"
    });
    $.__views.realizarPedido.add($.__views.envioGratis);
    $.__views.mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "29.9%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "mainScroll"
    });
    $.__views.realizarPedido.add($.__views.mainScroll);
    $.__views.envioScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "32.3%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "envioScroll"
    });
    $.__views.realizarPedido.add($.__views.envioScroll);
    $.__views.__alloyId27 = Ti.UI.createView({
        backgroundImage: "/img/flechaPagos.jpg",
        width: "100%",
        height: "96px",
        layout: "vertical",
        id: "__alloyId27"
    });
    $.__views.envioScroll.add($.__views.__alloyId27);
    setDireccion ? $.__views.__alloyId27.addEventListener("click", setDireccion) : __defers["$.__views.__alloyId27!click!setDireccion"] = true;
    $.__views.__alloyId28 = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#cc5122",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: "DIRECCIÓN",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.direccion = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#5c5c5b",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        id: "direccion"
    });
    $.__views.__alloyId27.add($.__views.direccion);
    $.__views.__alloyId29 = Ti.UI.createView({
        backgroundImage: "/img/flechaPagos.jpg",
        width: "100%",
        height: "96px",
        layout: "vertical",
        id: "__alloyId29"
    });
    $.__views.envioScroll.add($.__views.__alloyId29);
    setCorreo ? $.__views.__alloyId29.addEventListener("click", setCorreo) : __defers["$.__views.__alloyId29!click!setCorreo"] = true;
    $.__views.__alloyId30 = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#cc5122",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: "CORREO",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.correo = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#5c5c5b",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        id: "correo"
    });
    $.__views.__alloyId29.add($.__views.correo);
    $.__views.__alloyId31 = Ti.UI.createView({
        backgroundImage: "/img/flechaPagos.jpg",
        width: "100%",
        height: "96px",
        layout: "vertical",
        id: "__alloyId31"
    });
    $.__views.envioScroll.add($.__views.__alloyId31);
    setMedioPago ? $.__views.__alloyId31.addEventListener("click", setMedioPago) : __defers["$.__views.__alloyId31!click!setMedioPago"] = true;
    $.__views.__alloyId32 = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#cc5122",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: "PAGO",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.pago = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#5c5c5b",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        id: "pago"
    });
    $.__views.__alloyId31.add($.__views.pago);
    $.__views.id = Ti.UI.createView({
        backgroundImage: "/img/flechaPagos.jpg",
        width: "100%",
        height: "96px",
        layout: "vertical",
        id: "id"
    });
    $.__views.envioScroll.add($.__views.id);
    setTelefono ? $.__views.id.addEventListener("click", setTelefono) : __defers["$.__views.id!click!setTelefono"] = true;
    $.__views.__alloyId33 = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#cc5122",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: "TELÉFONO",
        id: "__alloyId33"
    });
    $.__views.id.add($.__views.__alloyId33);
    $.__views.telefono = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#5c5c5b",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        id: "telefono"
    });
    $.__views.id.add($.__views.telefono);
    $.__views.id = Ti.UI.createView({
        backgroundImage: "/img/flechaPagos.jpg",
        width: "100%",
        height: "96px",
        layout: "vertical",
        id: "id"
    });
    $.__views.envioScroll.add($.__views.id);
    setCupon ? $.__views.id.addEventListener("click", setCupon) : __defers["$.__views.id!click!setCupon"] = true;
    $.__views.__alloyId34 = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#cc5122",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: "CUPÓN DE DESCUENTO",
        id: "__alloyId34"
    });
    $.__views.id.add($.__views.__alloyId34);
    $.__views.cupon = Ti.UI.createLabel({
        left: "7%",
        width: "80%",
        height: "50%",
        color: "#5c5c5b",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        id: "cupon"
    });
    $.__views.id.add($.__views.cupon);
    $.__views.nuevoProducto = Ti.UI.createView({
        height: "7.6%",
        width: "100%",
        id: "nuevoProducto",
        backgroundImage: "/img/agregarProducto.jpg"
    });
    $.__views.realizarPedido.add($.__views.nuevoProducto);
    productosPerroGato ? $.__views.nuevoProducto.addEventListener("click", productosPerroGato) : __defers["$.__views.nuevoProducto!click!productosPerroGato"] = true;
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.6%",
        id: "footer"
    });
    $.__views.realizarPedido.add($.__views.footer);
    $.__views.pedido = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        font: {
            fontWeight: "bold"
        },
        title: "REALIZAR PEDIDO",
        id: "pedido"
    });
    $.__views.footer.add($.__views.pedido);
    gracias ? $.__views.pedido.addEventListener("click", gracias) : __defers["$.__views.pedido!click!gracias"] = true;
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
    $.mainScroll.removeAllChildren();
    for (var i = 0; productos.length > i; i++) for (var j = 0; productos[i]["producto_precios"].length > j; j++) for (var k = 0; carro.length > k; k++) if (carro[k]["id"] == productos[i]["producto_precios"][j]["id"]) {
        var Main = Ti.UI.createView({
            width: "100%",
            layout: "horizontal",
            height: "232px",
            id: productos[i]["producto_precios"][j]["id"]
        });
        var Margen = Ti.UI.createView({
            width: "100%",
            height: "2px",
            backgroundColor: "#e8e8e8"
        });
        var ImageViewProducto = Ti.UI.createImageView({
            image: productos[i]["prod_pic"],
            defaultImage: "/img/Perro1.jpg",
            width: "25%",
            height: "100%"
        });
        var ViewLabels = Ti.UI.createView({
            width: "75%",
            height: "100%",
            layout: "vertical",
            top: "0%"
        });
        var LabelGroup = Ti.UI.createView({
            width: "75%",
            height: "60%",
            layout: "vertical",
            top: "0%"
        });
        var LabelNombre = Ti.UI.createLabel({
            color: "#cc5122",
            width: "100%",
            height: "40%",
            top: "20%",
            left: "8%",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            },
            text: productos[i]["brand"]
        });
        var LabelDescripcion = Ti.UI.createLabel({
            color: "gray",
            width: "100%",
            height: "40%",
            top: "0%",
            left: "8%",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            },
            text: productos[i]["prod_name"]
        });
        var LabelGroup2 = Ti.UI.createView({
            width: "75%",
            height: "40%",
            layout: "horizontal",
            top: "0%"
        });
        var LabelDetalle = Ti.UI.createLabel({
            width: "60%",
            height: "50%",
            color: "#5c5c5b",
            top: "25%",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            },
            text: productos[i]["producto_precios"][j]["sku_description"] + " x " + carro[k]["qty"]
        });
        var LabelPrecio = Ti.UI.createLabel({
            width: "40%",
            height: "50%",
            color: "#5c5c5b",
            top: "25%",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            },
            text: "$" + carro[k]["qty"] * productos[i]["producto_precios"][j]["sku_price"]
        });
        LabelGroup.add(LabelNombre);
        LabelGroup.add(LabelDescripcion);
        LabelGroup2.add(LabelDetalle);
        LabelGroup2.add(LabelPrecio);
        ViewLabels.add(LabelGroup);
        ViewLabels.add(LabelGroup2);
        Main.add(ImageViewProducto);
        Main.add(ViewLabels);
        $.mainScroll.add(Main);
        $.mainScroll.add(Margen);
    }
    if (null != medio) $.pago.text = medio["paym_name"]; else {
        $.pago.text = medios[0]["paym_name"];
        medio = medios[0];
    }
    if (null != direccion) $.direccion.text = direccion["direccion"]; else {
        $.direccion.text = direcciones[direcciones.length - 1]["direccion"];
        direccion = direcciones[direcciones.length - 1];
    }
    $.telefono.text = usuario["cust_phone"];
    $.correo.text = usuario["cust_email"];
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
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    __defers["$.__views.lupaImg!click!buscarProducto"] && $.__views.lupaImg.addEventListener("click", buscarProducto);
    __defers["$.__views.flecha!click!atras"] && $.__views.flecha.addEventListener("click", atras);
    __defers["$.__views.__alloyId27!click!setDireccion"] && $.__views.__alloyId27.addEventListener("click", setDireccion);
    __defers["$.__views.__alloyId29!click!setCorreo"] && $.__views.__alloyId29.addEventListener("click", setCorreo);
    __defers["$.__views.__alloyId31!click!setMedioPago"] && $.__views.__alloyId31.addEventListener("click", setMedioPago);
    __defers["$.__views.id!click!setTelefono"] && $.__views.id.addEventListener("click", setTelefono);
    __defers["$.__views.id!click!setCupon"] && $.__views.id.addEventListener("click", setCupon);
    __defers["$.__views.nuevoProducto!click!productosPerroGato"] && $.__views.nuevoProducto.addEventListener("click", productosPerroGato);
    __defers["$.__views.pedido!click!gracias"] && $.__views.pedido.addEventListener("click", gracias);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;