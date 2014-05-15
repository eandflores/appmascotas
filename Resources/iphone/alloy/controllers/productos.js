function Controller() {
    function ordenarProductos() {
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
            $.marcasScroll.add(ImageViewMarca);
        }
        $.perrogato.backgroundImage = "/img/perrogato.jpg";
        $.perro.backgroundImage = "/img/perro.jpg";
        $.gato.backgroundImage = "/img/gato.jpg";
        "TODAS" == categoria ? $.perrogato.backgroundImage = "/img/perrogato2.jpg" : "Perro" == categoria ? $.perro.backgroundImage = "/img/perro2.jpg" : "Gato" == categoria && ($.gato.backgroundImage = "/img/gato2.jpg");
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
            $.mainScroll.add(resultados);
        }
        var cant_productos = 0;
        var productos_act = [];
        for (var i = 0; productos.length > i; i++) if ("TODOS" == nombre) "TODAS" == categoria && "TODAS" == marca ? productos_act.push(productos[i]) : "TODAS" == categoria && "TODAS" != marca ? marca == productos[i]["marca_id"] && productos_act.push(productos[i]) : "TODAS" != categoria && "TODAS" == marca ? categoria == productos[i]["tipo"] && productos_act.push(productos[i]) : "TODAS" != categoria && "TODAS" != marca && categoria == productos[i]["tipo"] && marca == productos[i]["marca_id"] && productos_act.push(productos[i]); else if (null != productos[i]["brand"].toLowerCase().match(nombre.toLowerCase()) || null != productos[i]["prod_name"].toLowerCase().match(nombre.toLowerCase())) {
            cant_productos += 1;
            productos_act.push(productos[i]);
        }
        var paginas = 0;
        paginas = 0 != productos_act.length % productosPaginacion ? parseInt(productos_act.length / productosPaginacion) + 1 : parseInt(productos_act.length / productosPaginacion);
        for (var i = 0; paginas > i; i++) {
            var paginaLabel = Ti.UI.createLabel({
                width: "48px",
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
            $.paginasView.add(paginaLabel);
            $.paginasView.add(margenPagina);
        }
        for (var i = productosPaginacion * (pagina - 1); pagina * productosPaginacion > i; i++) if (productos_act.length > i) for (var j = 0; productos_act[i]["producto_precios"].length > j; j++) {
            var Main = Ti.UI.createView({
                width: "100%",
                layout: "horizontal",
                height: "232px",
                id: productos_act[i]["producto_precios"][j]["id"]
            });
            var Margen = Ti.UI.createView({
                width: "100%",
                height: "2px",
                backgroundColor: "#e8e8e8"
            });
            var ImageViewProducto = Ti.UI.createImageView({
                image: productos_act[i]["prod_pic"],
                defaultImage: "/img/Perro1.jpg",
                width: "25%",
                height: "100%"
            });
            var LabelGroup = Ti.UI.createView({
                width: "68%",
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
                text: productos_act[i]["brand"]
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
                text: productos_act[i]["prod_name"]
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
                text: productos_act[i]["producto_precios"][j]["sku_description"] + " x $" + productos_act[i]["producto_precios"][j]["sku_price"]
            });
            var ImageViewFlecha = Ti.UI.createImageView({
                width: "7%",
                height: "100%",
                backgroundImage: "/img/Flecha.jpg"
            });
            LabelGroup.add(LabelNombre);
            LabelGroup.add(LabelDescripcion);
            LabelGroup.add(LabelPrecio);
            Main.add(ImageViewProducto);
            Main.add(LabelGroup);
            Main.add(ImageViewFlecha);
            Main.addEventListener("click", function() {
                productosView(this["id"]);
            });
            $.mainScroll.add(Main);
            $.mainScroll.add(Margen);
        }
        winCargando.close();
        setTimeout(function() {
            winCargando.close();
        }, 2e3);
        "TODOS" != nombre && (resultadoProducto.text = "SE HAN ENCONTRADO " + cant_productos + " PRODUCTOS");
    }
    function productosPerroGato() {
        winCargando.open();
        $.mainScroll.removeAllChildren();
        $.marcasScroll.removeAllChildren();
        $.paginasView.removeAllChildren();
        categoria = categorias[3];
        marca = "TODAS";
        nombre = "TODOS";
        pagina = 1;
        ordenarProductos();
    }
    function productosPerro() {
        winCargando.open();
        $.mainScroll.removeAllChildren();
        $.marcasScroll.removeAllChildren();
        $.paginasView.removeAllChildren();
        categoria = categorias[1];
        marca = "TODAS";
        nombre = "TODOS";
        pagina = 1;
        ordenarProductos();
    }
    function productosGato() {
        winCargando.open();
        $.mainScroll.removeAllChildren();
        $.marcasScroll.removeAllChildren();
        $.paginasView.removeAllChildren();
        categoria = categorias[2];
        marca = "TODAS";
        nombre = "TODOS";
        pagina = 1;
        ordenarProductos();
    }
    function productosMarca(marcaParam) {
        winCargando.open();
        $.mainScroll.removeAllChildren();
        $.marcasScroll.removeAllChildren();
        $.paginasView.removeAllChildren();
        categoria = categorias[3];
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
        $.mainScroll.removeAllChildren();
        $.marcasScroll.removeAllChildren();
        $.paginasView.removeAllChildren();
        categoria = categorias[3];
        marca = "TODAS";
        nombre = nombreParam;
        pagina = 1;
        ordenarProductos();
    }
    function productosPagina(paginaParam) {
        winCargando.open();
        $.mainScroll.removeAllChildren();
        $.marcasScroll.removeAllChildren();
        $.paginasView.removeAllChildren();
        categoria = categoria;
        marca = marca;
        nombre = nombre;
        pagina = paginaParam;
        ordenarProductos();
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
            producto: producto
        }).getView();
        vista.open();
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
    this.__controllerPath = "productos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.productos = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        bottom: "0%",
        height: "96.5%",
        id: "productos"
    });
    $.__views.productos && $.addTopLevelView($.__views.productos);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.productos.add($.__views.wrapper);
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
    $.__views.productos.add($.__views.marcas);
    $.__views.__alloyId23 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId23"
    });
    $.__views.marcas.add($.__views.__alloyId23);
    $.__views.marcasScroll = Ti.UI.createScrollView({
        width: "72%",
        contentWidth: Ti.UI.SIZE,
        scrollType: "horizontal",
        layout: "horizontal",
        height: "85%",
        horizontalWrap: "false",
        showHorizontalScrollIndicator: "true",
        id: "marcasScroll"
    });
    $.__views.marcas.add($.__views.marcasScroll);
    $.__views.__alloyId24 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaDer.jpg",
        id: "__alloyId24"
    });
    $.__views.marcas.add($.__views.__alloyId24);
    $.__views.mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "75.5%",
        contentHeight: Ti.UI.SIZE,
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "mainScroll"
    });
    $.__views.productos.add($.__views.mainScroll);
    $.__views.paginasView = Ti.UI.createScrollView({
        width: "100%",
        height: "5%",
        layout: "horizontal",
        backgroundColor: "#cc5122",
        contentWidth: Ti.UI.SIZE,
        scrollType: "horizontal",
        horizontalWrap: "false",
        showHorizontalScrollIndicator: "true",
        id: "paginasView"
    });
    $.__views.productos.add($.__views.paginasView);
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
    var categoria = args["categoria"];
    var marca = args["marca"];
    var nombre = args["nombre"];
    var pagina = args["pagina"];
    var productosPaginacion = 15;
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
    ordenarProductos();
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    __defers["$.__views.lupaImg!click!buscarProducto"] && $.__views.lupaImg.addEventListener("click", buscarProducto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;