function Controller() {
    function busquedaProducto() {
        buscarProducto();
        lupa.addEventListener("click", function() {
            productosNombre(buscar.value);
        });
    }
    function productosPerroGato() {
        Alloy.createController("productos", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
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
    function productosMarca(marca) {
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
            marca: marca,
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
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
    }
    function carroCompra() {
        if (null != usuario) {
            carro.push({
                id: productoPrecio["id"],
                qty: InputCantidad.value
            });
            Alloy.createController("realizarPedido", {
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
        } else {
            var xhrProductos = Ti.Network.createHTTPClient({
                onload: function() {
                    try {
                        var usuario = JSON.parse(this.responseText);
                        carro.push({
                            id: productoPrecio["id"],
                            qty: InputCantidad.value
                        });
                        var vista = Alloy.createController("carroCompra", {
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
                        vista.open();
                    } catch (e) {
                        alert("Error de conexión con el servidor.");
                    }
                },
                onerror: function(e) {
                    alert(e);
                }
            });
            xhrProductos.open("GET", "http://tiendapet.cl/api/usuario/?user_token=" + token);
            xhrProductos.send();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "productoView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.productoView = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        id: "productoView"
    });
    $.__views.productoView && $.addTopLevelView($.__views.productoView);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.productoView
    });
    $.__views.drawermenu.setParent($.__views.productoView);
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
    var Main = Ti.UI.createView({
        width: "100%",
        height: "72.8%",
        layout: "vertical"
    });
    var footer = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "7.6%",
        font: {
            fontWeight: "bold"
        },
        title: "AGREGAR AL CARRO"
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
        carroCompra();
    });
    var marcasView = Ti.UI.createView({
        id: "marcas",
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        layout: "horizontal"
    });
    var flechaIzq = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaIzq.jpg"
    });
    var flechaDer = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaDer.jpg"
    });
    var marcasScroll = Ti.UI.createScrollView({
        id: "marcasScroll",
        width: "72%",
        contentWidth: Ti.UI.SIZE,
        scrollType: "horizontal",
        layout: "horizontal",
        height: "85%",
        horizontalWrap: "false",
        showHorizontalScrollIndicator: "true"
    });
    var posX = 0;
    marcasScroll.addEventListener("scroll", function(e) {
        posX = Math.round(e.x);
    });
    flechaIzq.addEventListener("click", function() {
        250 > posX ? marcasScroll.scrollTo(0, 0) : marcasScroll.scrollTo(posX - 250, 0);
    });
    flechaDer.addEventListener("click", function() {
        marcasScroll.scrollTo(posX + 250, 0);
    });
    marcasView.add(flechaIzq);
    marcasView.add(marcasScroll);
    marcasView.add(flechaDer);
    for (var i = 0; marcas.length > i; i++) {
        var ImageViewMarca = Ti.UI.createImageView({
            image: marcas[i]["brand_logo"],
            defaultImage: "/img/Doguitos.jpg",
            width: "250px",
            id: marcas[i]["id"],
            height: "100%"
        });
        ImageViewMarca.addEventListener("click", function() {
            productosMarca(this["id"]);
        });
        marcasScroll.add(ImageViewMarca);
    }
    main.add(wrapper);
    main.add(marcasView);
    main.add(Main);
    main.add(footer);
    $.drawermenu.init({
        menuview: menu,
        mainview: main,
        duration: 200,
        parent: $.productoView
    });
    var producto = null;
    var indice = null;
    var productoPrecio = null;
    var productosPrecioProducto = new Array();
    for (var i = 0; productos.length > i; i++) for (var j = 0; productos[i]["producto_precios"].length > j; j++) if (productos[i]["producto_precios"][j]["id"] == args["producto"]) {
        productoPrecio = productos[i]["producto_precios"][j];
        producto = productos[i];
    }
    productosPrecioProducto = producto["producto_precios"];
    for (var i = 0; productosPrecioProducto.length > i; i++) productosPrecioProducto[i]["id"] == args["producto"] && (indice = i);
    var Producto = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "28.7%"
    });
    var ImageViewProducto = Ti.UI.createImageView({
        image: producto["prod_pic"],
        defaultImage: "/img/Perro1.jpg",
        width: "25%",
        height: "100%"
    });
    var LabelGroup = Ti.UI.createView({
        width: "75%",
        height: "100%",
        layout: "vertical",
        top: "0%"
    });
    var LabelNombre = Ti.UI.createLabel({
        color: "#cc5122",
        width: "100%",
        height: "20%",
        top: "20%",
        left: "8%",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: producto["brand"]
    });
    var LabelDescripcion = Ti.UI.createLabel({
        color: "gray",
        width: "100%",
        height: "20%",
        top: "0%",
        left: "8%",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: producto["prod_name"]
    });
    var LabelPrecio = Ti.UI.createLabel({
        width: "100%",
        height: "20%",
        color: "#5c5c5b",
        top: "0%",
        left: "8%",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: "$" + productoPrecio["sku_price"]
    });
    LabelGroup.add(LabelNombre);
    LabelGroup.add(LabelDescripcion);
    LabelGroup.add(LabelPrecio);
    Producto.add(ImageViewProducto);
    Producto.add(LabelGroup);
    var Peso = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "12.3%",
        backgroundImage: "/img/peso.jpg"
    });
    var ViewPeso = Ti.UI.createView({
        width: "21.4%",
        height: "100%",
        left: "65.6%",
        layout: "vertical"
    });
    var InputPeso = Ti.UI.createTextField({
        width: "100%",
        height: "64%",
        top: "18%",
        backgroundColor: "#d8d8d8",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "#888888",
        value: productoPrecio["sku_description"],
        editable: false
    });
    Peso.addEventListener("click", function() {
        var winModalPeso;
        var viewModalPeso;
        var winModalPeso = Ti.UI.createWindow({
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            opacity: .4,
            navBarHidden: "true"
        });
        var viewModalPeso = Ti.UI.createView({
            width: "100%",
            height: "18.7%",
            layout: "vertical",
            top: "36%"
        });
        var FlechaArrPeso = Ti.UI.createImageView({
            width: "9.4%",
            height: "26.2%",
            left: "71.6%",
            backgroundImage: "/img/FlechaArr.png"
        });
        var ModalPeso = Ti.UI.createView({
            backgroundColor: "white",
            width: "100%",
            height: "47.6%",
            backgroundColor: "white"
        });
        ModalPeso.addEventListener("click", function() {
            winModalPeso.close();
        });
        var FlechaAbaPeso = Ti.UI.createImageView({
            width: "9.4%",
            height: "26.2%",
            left: "71.6%",
            backgroundImage: "/img/FlechaAba.png"
        });
        FlechaArrPeso.addEventListener("click", function() {
            if (productosPrecioProducto.length - 1 > indice) {
                indice += 1;
                productoPrecio = productosPrecioProducto[indice];
                InputPeso.value = productoPrecio["sku_description"];
                LabelPrecio.setText(productoPrecio["sku_price"]);
            }
        });
        FlechaAbaPeso.addEventListener("click", function() {
            if (indice > 0) {
                indice -= 1;
                productoPrecio = productosPrecioProducto[indice];
                InputPeso.value = productoPrecio["sku_description"];
                LabelPrecio.setText(productoPrecio["sku_price"]);
            }
        });
        viewModalPeso.add(FlechaArrPeso);
        viewModalPeso.add(ModalPeso);
        viewModalPeso.add(FlechaAbaPeso);
        winModalPeso.add(viewModalPeso);
        winModalPeso.open();
    });
    ViewPeso.add(InputPeso);
    Peso.add(ViewPeso);
    var Cantidad = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "12.3%",
        backgroundImage: "/img/cantidad.jpg"
    });
    var ViewCantidad = Ti.UI.createView({
        width: "21.4%",
        height: "100%",
        left: "65.6%",
        layout: "vertical"
    });
    var InputCantidad = Ti.UI.createTextField({
        width: "100%",
        height: "64%",
        top: "18%",
        backgroundColor: "#d8d8d8",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "#888888",
        value: 1,
        editable: false
    });
    Cantidad.addEventListener("click", function() {
        var winModalCantidad;
        var viewModalCantidad;
        var winModalCantidad = Ti.UI.createWindow({
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            opacity: .4,
            navBarHidden: "true"
        });
        var viewModalCantidad = Ti.UI.createView({
            width: "100%",
            height: "18.7%",
            layout: "vertical",
            top: "45%"
        });
        var FlechaArrCantidad = Ti.UI.createImageView({
            width: "9.4%",
            height: "26.2%",
            left: "71.6%",
            backgroundImage: "/img/FlechaArr.png"
        });
        FlechaArrCantidad.addEventListener("click", function() {
            InputCantidad.value = parseInt(InputCantidad.value) + 1;
        });
        var ModalCantidad = Ti.UI.createView({
            backgroundColor: "white",
            width: "100%",
            height: "47.6%",
            backgroundColor: "white"
        });
        ModalCantidad.addEventListener("click", function() {
            winModalCantidad.close();
        });
        var FlechaAbaCantidad = Ti.UI.createImageView({
            width: "9.4%",
            height: "26.2%",
            left: "71.6%",
            backgroundImage: "/img/FlechaAba.png"
        });
        FlechaAbaCantidad.addEventListener("click", function() {
            parseInt(InputCantidad.value) > 1 && (InputCantidad.value = parseInt(InputCantidad.value) - 1);
        });
        viewModalCantidad.add(FlechaArrCantidad);
        viewModalCantidad.add(ModalCantidad);
        viewModalCantidad.add(FlechaAbaCantidad);
        winModalCantidad.add(viewModalCantidad);
        winModalCantidad.open();
    });
    ViewCantidad.add(InputCantidad);
    Cantidad.add(ViewCantidad);
    var DescripcionTitulo = Ti.UI.createImageView({
        width: "100%",
        height: "12.3%",
        backgroundImage: "/img/descripcionTitulo.jpg"
    });
    var DescripcionContenido = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "33.6%"
    });
    var LabelDescripcion = Ti.UI.createLabel({
        left: "7%",
        width: "93%",
        height: "100%",
        color: "#5c5c5b",
        font: {
            fontFamily: "Noto Sans"
        },
        text: producto["prod_text"]
    });
    DescripcionContenido.add(LabelDescripcion);
    var Borde1 = Ti.UI.createView({
        width: "100%",
        height: "0.2%",
        backgroundColor: "#e8e8e8"
    });
    var Borde2 = Ti.UI.createView({
        width: "100%",
        height: "0.2%",
        backgroundColor: "#e8e8e8"
    });
    var Borde3 = Ti.UI.createView({
        width: "100%",
        height: "0.2%",
        backgroundColor: "#e8e8e8"
    });
    var Borde4 = Ti.UI.createView({
        width: "100%",
        height: "0.2%",
        backgroundColor: "#e8e8e8"
    });
    Main.add(Producto);
    Main.add(Borde1);
    Main.add(Peso);
    Main.add(Borde2);
    Main.add(Cantidad);
    Main.add(Borde3);
    Main.add(DescripcionTitulo);
    Main.add(Borde4);
    Main.add(DescripcionContenido);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;