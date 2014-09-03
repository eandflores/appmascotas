function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function ordenarProductos() {
        for (var i = 0; marcas.length > i; i++) {
            var ImageViewMarca = Ti.UI.createImageView({
                image: marcas[i]["brand_logo"],
                defaultImage: "/img/Doguitos.jpg",
                width: "125dp",
                id: marcas[i]["id"],
                height: "100%"
            });
            ImageViewMarca.addEventListener("click", function() {
                productosMarca(this["id"]);
            });
            "TODAS" == categoria ? marcasScroll.add(ImageViewMarca) : (categoria == marcas[i]["tipo"] || "Ambos" == marcas[i]["tipo"]) && marcasScroll.add(ImageViewMarca);
        }
        perrogato.backgroundImage = "/img/perrogato.jpg";
        perro.backgroundImage = "/img/perro.jpg";
        gato.backgroundImage = "/img/gato.jpg";
        "TODAS" == categoria ? perrogato.backgroundImage = "/img/perrogato2.jpg" : "Perro" == categoria ? perro.backgroundImage = "/img/perro2.jpg" : "Gato" == categoria && (gato.backgroundImage = "/img/gato2.jpg");
        if ("TODOS" != nombre) {
            var resultados = Ti.UI.createView({
                width: "100%",
                height: "100px",
                layout: "vertical"
            });
            var resultadoProducto = Ti.UI.createLabel({
                width: "100%",
                height: "50%",
                textAlign: "center",
                color: "gray",
                font: {
                    fontSize: "12sp",
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                }
            });
            var resultadoNombre = Ti.UI.createLabel({
                width: "100%",
                height: "50%",
                textAlign: "center",
                text: "CON EL NOMBRE DE : " + nombre,
                color: "gray",
                font: {
                    fontSize: "12sp",
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                }
            });
            resultados.add(resultadoProducto);
            resultados.add(resultadoNombre);
            mainScroll.add(resultados);
        }
        var cant_productos = 0;
        var productos_act = [];
        for (var i = 0; productos.length > i; i++) if ("TODOS" == nombre) "TODAS" == categoria && "TODAS" == marca ? productos_act.push(productos[i]) : "TODAS" == categoria && "TODAS" != marca ? marca == productos[i]["marca_id"] && productos_act.push(productos[i]) : "TODAS" != categoria && "TODAS" == marca ? categoria == productos[i]["tipo"] && productos_act.push(productos[i]) : "TODAS" != categoria && "TODAS" != marca && categoria == productos[i]["tipo"] && marca == productos[i]["marca_id"] && productos_act.push(productos[i]); else if (null != productos[i]["brand"].toLowerCase().match(nombre.toLowerCase()) || null != productos[i]["prod_name"].toLowerCase().match(nombre.toLowerCase())) {
            cant_productos += 1;
            productos_act.push(productos[i]);
        }
        paginas = 0;
        paginas = 0 != productos_act.length % productosPaginacion ? parseInt(productos_act.length / productosPaginacion) + 1 : parseInt(productos_act.length / productosPaginacion);
        var pagerFlechaIzq = Ti.UI.createView({
            width: "50dp",
            height: "100%",
            backgroundImage: "/img/pagerIzq.jpg"
        });
        pagerFlechaIzq.addEventListener("click", function() {
            productosPagina(pagina - 1);
        });
        paginasView.add(pagerFlechaIzq);
        for (var i = 0; paginas > i; i++) {
            if (i == pagina - 1) var paginaLabel = Ti.UI.createLabel({
                width: "27dp",
                height: "100%",
                text: i + 1,
                color: "#620001",
                textAlign: "center",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                id: i + 1
            }); else var paginaLabel = Ti.UI.createLabel({
                width: "27dp",
                height: "100%",
                text: i + 1,
                color: "white",
                textAlign: "center",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold"
                },
                id: i + 1
            });
            paginaLabel.addEventListener("click", function() {
                productosPagina(this["id"]);
            });
            var margenPagina = Ti.UI.createView({
                width: "2px",
                height: "70%",
                top: "15%",
                bottom: "15%%",
                backgroundColor: "#e67c53"
            });
            0 == i && paginasView.add(Ti.UI.createView({
                width: "2px",
                height: "70%",
                top: "15%",
                bottom: "15%%",
                backgroundColor: "#e67c53"
            }));
            paginasView.add(paginaLabel);
            paginasView.add(margenPagina);
        }
        var pagerFlechaDer = Ti.UI.createView({
            width: "50dp",
            height: "100%",
            backgroundImage: "/img/pagerDer.jpg"
        });
        pagerFlechaDer.addEventListener("click", function() {
            productosPagina(pagina + 1);
        });
        paginasView.add(pagerFlechaDer);
        for (var i = productosPaginacion * (pagina - 1); pagina * productosPaginacion > i && productos_act.length > i; i++) if (productos_act[i]["producto_precios"].length > 0) {
            var Main = Ti.UI.createView({
                width: "100%",
                layout: "horizontal",
                height: "116dp",
                id: productos_act[i]["producto_precios"][productos_act[i]["producto_precios"].length - 1]["id"]
            });
            var Margen = Ti.UI.createView({
                width: "100%",
                height: "2px",
                backgroundColor: "#e8e8e8"
            });
            var ImageViewProducto = Ti.UI.createView({
                width: "25%",
                height: "100%"
            });
            var ImageViewProducto_int = Ti.UI.createImageView({
                image: productos_act[i]["prod_pic"],
                defaultImage: "/img/Perro1.jpg",
                width: "auto",
                height: "100%"
            });
            ImageViewProducto.add(ImageViewProducto_int);
            var LabelGroup = Ti.UI.createView({
                width: "68%",
                height: "100%",
                layout: "vertical",
                top: "0%"
            });
            var LabelNombre = Ti.UI.createLabel({
                minimumFontSize: 8,
                color: "#cc5122",
                width: "100%",
                height: "25%",
                top: "12.5%",
                left: "8%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold",
                    fontSize: 13
                },
                text: productos_act[i]["brand"]
            });
            var LabelDescripcion = Ti.UI.createLabel({
                minimumFontSize: 8,
                color: "gray",
                width: "100%",
                height: "25%",
                top: "0%",
                left: "8%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold",
                    fontSize: 13
                },
                text: productos_act[i]["prod_name"]
            });
            var LabelPrecio = Ti.UI.createLabel({
                minimumFontSize: 8,
                width: "100%",
                height: "25%",
                color: "#5c5c5b",
                top: "0%",
                left: "8%",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold",
                    fontSize: 13
                },
                text: productos_act[i]["producto_precios"][productos_act[i]["producto_precios"].length - 1]["sku_description"] + " x $" + formatCurrency(productos_act[i]["producto_precios"][productos_act[i]["producto_precios"].length - 1]["sku_price"])
            });
            var ViewFlecha = Ti.UI.createView({
                width: "7%",
                height: "100%"
            });
            var ImageViewFlecha = Ti.UI.createImageView({
                width: "auto",
                height: "100%",
                image: "/img/Flecha.png"
            });
            ViewFlecha.add(ImageViewFlecha);
            LabelGroup.add(LabelNombre);
            LabelGroup.add(LabelDescripcion);
            LabelGroup.add(LabelPrecio);
            Main.add(ImageViewProducto);
            Main.add(LabelGroup);
            Main.add(ViewFlecha);
            Main.addEventListener("click", function() {
                productosView(this["id"]);
            });
            mainScroll.add(Main);
            mainScroll.add(Margen);
        }
        winCargando.close();
        setTimeout(function() {
            winCargando.close();
        }, 2e3);
        "TODOS" != nombre && (resultadoProducto.text = "SE HAN ENCONTRADO " + cant_productos + " PRODUCTOS");
    }
    function productosPerroGato() {
        winCargando.open();
        mainScroll.removeAllChildren();
        marcasScroll.removeAllChildren();
        paginasView.removeAllChildren();
        categoria = categorias[3];
        marca = "TODAS";
        nombre = "TODOS";
        pagina = 1;
        ordenarProductos();
    }
    function productosPerro() {
        winCargando.open();
        mainScroll.removeAllChildren();
        marcasScroll.removeAllChildren();
        paginasView.removeAllChildren();
        categoria = categorias[1];
        marca = "TODAS";
        nombre = "TODOS";
        pagina = 1;
        ordenarProductos();
    }
    function productosGato() {
        winCargando.open();
        mainScroll.removeAllChildren();
        marcasScroll.removeAllChildren();
        paginasView.removeAllChildren();
        categoria = categorias[2];
        marca = "TODAS";
        nombre = "TODOS";
        pagina = 1;
        ordenarProductos();
    }
    function productosMarca(marcaParam) {
        winCargando.open();
        mainScroll.removeAllChildren();
        marcasScroll.removeAllChildren();
        paginasView.removeAllChildren();
        categoria = categoria;
        nombre = "TODOS";
        pagina = 1;
        if (marca == marcaParam) {
            marca = "TODAS";
            ordenarProductos();
        } else {
            marca = marcaParam;
            ordenarProductos();
        }
    }
    function productosNombre(nombreParam) {
        winCargando.open();
        mainScroll.removeAllChildren();
        marcasScroll.removeAllChildren();
        paginasView.removeAllChildren();
        categoria = categorias[3];
        marca = "TODAS";
        nombre = nombreParam;
        pagina = 1;
        ordenarProductos();
    }
    function productosPagina(paginaParam) {
        if (paginaParam > 0 && paginas >= paginaParam) {
            winCargando.open();
            mainScroll.removeAllChildren();
            marcasScroll.removeAllChildren();
            paginasView.removeAllChildren();
            categoria = categoria;
            marca = marca;
            nombre = nombre;
            pagina = paginaParam;
            ordenarProductos();
        }
    }
    function productosView(producto) {
        var vista = Alloy.createController("productoView", {
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
            producto: producto,
            categoria: categoria,
            marca: marca,
            nombre: nombre,
            pagina: pagina
        }).getView();
        winCargando.open();
        mainScroll.removeAllChildren();
        paginasView.removeAllChildren();
        vista.open();
    }
    function busquedaProducto() {
        buscarProducto();
        buscar.addEventListener("click", function() {
            "¿Que es lo que buscas?" == buscar.value && (buscar.value = "");
        });
        lupa.addEventListener("click", function() {
            "¿Que es lo que buscas?" != buscar.value && "" != buscar.value ? productosNombre(buscar.value) : "" == buscar.value && (buscar.value = "¿Que es lo que buscas?");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "productos";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.productos = Ti.UI.createWindow({
        exitOnClose: true,
        backgroundColor: "white",
        bottom: "0%",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        height: "96.5%",
        id: "productos"
    });
    $.__views.productos && $.addTopLevelView($.__views.productos);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.productos
    });
    $.__views.drawermenu.setParent($.__views.productos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var categorias = [];
    categorias[1] = "Perro";
    categorias[2] = "Gato";
    categorias[3] = "TODAS";
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
    var categoria = args["categoria"];
    var marca = args["marca"];
    var nombre = args["nombre"];
    var pagina = args["pagina"];
    var paginas = 0;
    var productosPaginacion = 20;
    iniciarComponentes();
    cargarLoading();
    iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, "productos", null);
    winCargando.close();
    var mainScroll = Ti.UI.createScrollView({
        id: "mainScroll",
        width: "100%",
        height: "74%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true"
    });
    var pagerContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "6.5%",
        backgroundColor: "#e95017"
    });
    var paginasView = Ti.UI.createScrollView({
        id: "paginasView",
        width: Ti.UI.SIZE,
        height: "100%",
        layout: "horizontal",
        contentWidth: Ti.UI.SIZE,
        scrollType: "horizontal",
        horizontalWrap: "false",
        showHorizontalScrollIndicator: "true"
    });
    pagerContainer.add(paginasView);
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
        horizontalWrap: "false"
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
    main.add(wrapper);
    main.add(marcasView);
    main.add(mainScroll);
    main.add(pagerContainer);
    $.drawermenu.init({
        menuview: menu,
        mainview: main,
        duration: 200,
        parent: $.productos
    });
    ordenarProductos();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;