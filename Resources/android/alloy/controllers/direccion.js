function Controller() {
    function busquedaProducto() {
        buscarProducto();
        lupa.addEventListener("click", function() {
            productosNombre(buscar.value);
        });
    }
    function selectDireccion(direccion_selected) {
        Alloy.createController("realizarPedido", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            usuario: usuario,
            medio: medio,
            direccion: direccion_selected
        }).getView().open();
    }
    function eliminarDireccion(direccion_id) {
        winCargando.open();
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                try {
                    Ti.API.info(this.responseText);
                    null != direccion && direccion_id == direccion["id"] && (direccion = null);
                    cargarDirecciones();
                } catch (e) {
                    alert("Error de conexión con el servidor.");
                    winCargando.close();
                }
            },
            onerror: function(e) {
                alert(e);
                winCargando.close();
            }
        });
        xhr.open("POST", "http://tiendapet.cl/api/usuario/direcciones_borrar?user_token=" + token);
        xhr.send({
            direccion: direccion_id
        });
    }
    function cargarDirecciones() {
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                try {
                    direcciones = JSON.parse(this.responseText);
                    var vista = Alloy.createController("direccion", {
                        token: token,
                        carro: carro,
                        marcas: marcas,
                        productos: productos,
                        medios: medios,
                        direcciones: direcciones,
                        usuario: usuario,
                        medio: medio,
                        direccion: direccion
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
        xhr.open("GET", "http://tiendapet.cl/api/usuario/direcciones?user_token=" + token);
        xhr.send();
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
    function agregarDireccion() {
        Alloy.createController("agregarDireccion", {
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
    function atras() {
        $.direccion.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "direccion";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.direccion = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "true",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
        id: "direccion"
    });
    $.__views.direccion && $.addTopLevelView($.__views.direccion);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.direccion
    });
    $.__views.drawermenu.setParent($.__views.direccion);
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
    iniciarComponentes();
    iniciarMenu();
    cargarLoading();
    var marcasView = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        layout: "horizontal"
    });
    var flecha = Ti.UI.createImageView({
        width: "14%",
        height: "85%",
        backgroundImage: "/img/FlechaIzq.jpg"
    });
    flecha.addEventListener("click", function() {
        atras();
    });
    var direccionTitulo = Ti.UI.createImageView({
        width: "72%",
        height: "85%",
        backgroundImage: "/img/direccion.jpg"
    });
    var casa = Ti.UI.createImageView({
        left: "2%",
        top: "25%",
        bottom: "25%",
        width: "10%",
        height: "50%",
        backgroundImage: "/img/casa.png"
    });
    direccionTitulo.add(casa);
    marcasView.add(flecha);
    marcasView.add(direccionTitulo);
    var margen = Ti.UI.createView({
        width: "100%",
        height: "3.1%",
        backgroundImage: "/img/Margen.jpg"
    });
    var mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "69.8%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true"
    });
    var footer = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "7.6%",
        font: {
            fontWeight: "bold"
        },
        title: "AGREGAR DIRECCIÓN"
    });
    menuImg.addEventListener("click", function() {
        $.drawermenu.showhidemenu();
    });
    perrogato.addEventListener("click", function() {
        productosPerroGato();
    });
    perro.addEventListener("click", function() {
        productosPerro();
    });
    gato.addEventListener("click", function() {
        productosGato();
    });
    lupaImg.addEventListener("click", function() {
        busquedaProducto();
    });
    footer.addEventListener("click", function() {
        agregarDireccion();
    });
    main.add(wrapper);
    main.add(marcasView);
    main.add(margen);
    main.add(mainScroll);
    main.add(footer);
    $.drawermenu.init({
        menuview: menu,
        mainview: main,
        duration: 200,
        parent: $.direccion
    });
    for (i = 0; direcciones.length > i; i++) {
        var Direccion = Ti.UI.createView({
            width: "100%",
            height: "110px",
            layout: "horizontal"
        });
        var EliminarDireccion = Ti.UI.createView({
            backgroundImage: "/img/eliminarDireccion.jpg",
            width: "14.8%",
            id: direcciones[i]["id"],
            height: "100%"
        });
        EliminarDireccion.addEventListener("click", function() {
            eliminarDireccion(this["id"]);
        });
        var SeleccionarDireccion = Ti.UI.createView({
            backgroundImage: "/img/seleccionarDireccion.jpg",
            width: "85.2%",
            id: direcciones[i],
            height: "100%"
        });
        SeleccionarDireccion.addEventListener("click", function() {
            selectDireccion(this["id"]);
        });
        var Margen = Ti.UI.createView({
            width: "100%",
            height: "2px",
            backgroundColor: "#e8e8e8"
        });
        var Label = Ti.UI.createLabel({
            right: "20%",
            width: "80%",
            height: "100%",
            color: "#5c5c5b",
            font: {
                fontFamily: "Noto Sans",
                fontWeight: "bold"
            },
            text: direcciones[i]["direccion"]
        });
        SeleccionarDireccion.add(Label);
        Direccion.add(EliminarDireccion);
        Direccion.add(SeleccionarDireccion);
        mainScroll.add(Direccion);
        mainScroll.add(Margen);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;