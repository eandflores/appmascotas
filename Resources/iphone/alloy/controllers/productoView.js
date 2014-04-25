function Controller() {
    function productosPerroGato() {
        var vista = Alloy.createController("productos", {
            categoria: categorias[3],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosPerro() {
        var vista = Alloy.createController("productos", {
            categoria: categorias[1],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosGato() {
        var vista = Alloy.createController("productos", {
            categoria: categorias[2],
            marca: "TODAS"
        }).getView();
        vista.open();
    }
    function productosMarca(marca) {
        var vista = Alloy.createController("productos", {
            categoria: categorias[3],
            marca: marca
        }).getView();
        vista.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "productoView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.productoView = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        bottom: "0%",
        height: "96.5%",
        id: "productoView"
    });
    $.__views.productoView && $.addTopLevelView($.__views.productoView);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.productoView.add($.__views.wrapper);
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
    $.__views.productoView.add($.__views.marcas);
    $.__views.__alloyId0 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId0"
    });
    $.__views.marcas.add($.__views.__alloyId0);
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
    $.__views.__alloyId1 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaDer.jpg",
        id: "__alloyId1"
    });
    $.__views.marcas.add($.__views.__alloyId1);
    $.__views.Main = Ti.UI.createView({
        width: "100%",
        height: "72.8%",
        layout: "vertical",
        id: "Main"
    });
    $.__views.productoView.add($.__views.Main);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "7.6%",
        id: "footer"
    });
    $.__views.productoView.add($.__views.footer);
    $.__views.carro = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        title: "AGREGAR AL CARRO",
        id: "carro"
    });
    $.__views.footer.add($.__views.carro);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Titanium.API.info(args["producto"]);
    var categorias = [];
    categorias[1] = "PERRO";
    categorias[2] = "GATO";
    categorias[3] = "TODAS";
    var marcas = new Array();
    marcas.push({
        id: "1",
        nombre: "DOGUTOS",
        imagen: "/img/Doguitos.jpg",
        categoria: "PERRO"
    });
    marcas.push({
        id: "2",
        nombre: "ROYAL KANIN",
        imagen: "/img/RoyalKanin.jpg",
        categoria: "PERRO"
    });
    marcas.push({
        id: "3",
        nombre: "GATIS",
        imagen: "/img/Gati.jpg",
        categoria: "GATO"
    });
    marcas.push({
        id: "4",
        nombre: "EUKANUBA",
        imagen: "/img/Doguitos.jpg",
        categoria: "PERRO"
    });
    var productos = new Array();
    productos.push({
        id: 1,
        nombre: "DOGUITOS 1",
        descripcion: "Alimento para adultos",
        detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit lacus ut augue porta, eu facilisis neque pretium. Aliquam non tellus ut enim sagittis sollicitudin. Quisque convallis dictum risus a auctor. Maecenas egestas feugiat diam vel adipiscing. Sed vestibulum pellentesque enim. bibendum  1",
        categoria: categorias[1],
        marca: marcas[0]["id"],
        imagen: "/img/Perro1.jpg"
    });
    productos.push({
        id: 2,
        nombre: "GATIS 1",
        descripcion: "Alimento para adultos",
        detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit  adipiscing. Sed vestibulum pellentesque enim. bibendum  2",
        categoria: categorias[2],
        marca: marcas[2]["id"],
        imagen: "/img/Gato1.jpg"
    });
    productos.push({
        id: 3,
        nombre: "EUKANUBA 1",
        descripcion: "Alimento para cachorros",
        detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit lacus ut augue porta, eu facilisis neque pretium. Aliquam non tellus ut enim sagittis sollicitudin. Quisque convallis dictum risus a auctor. Maecenas egestas feugiat diam vel adipiscing. Sed vestibulum pellentesque enim. bibendum  3",
        categoria: categorias[1],
        marca: marcas[3]["id"],
        imagen: "/img/Perro1.jpg"
    });
    productos.push({
        id: 4,
        nombre: "GATIS 2",
        descripcion: "Alimento para cachorros",
        detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit lacus ut augue porta, eu facilisis neque pretium. Aliquam non tellus ut enim sagittis sollicitudin. Quisque convallis dictum risus a auctor. Maecenas egestas feugiat diam vel adipiscing. Sed vestibulum pellentesque enim. bibendum  4",
        categoria: categorias[2],
        marca: marcas[2]["id"],
        imagen: "/img/Gato1.jpg"
    });
    productos.push({
        id: 5,
        nombre: "DOGUITOS 2",
        descripcion: "Alimento para adultos",
        detalle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi mattis leo tincidunt porta. Sed blandit lacus ut augue porta, eu facilisis neque pretium. Aliquam non tellus ut enim sagittis sollicitudin. Quisque convallis dictum risus a auctor. Maecenas egestas feugiat diam vel adipiscing. Sed vestibulum pellentesque enim. bibendum  5",
        categoria: categorias[1],
        marca: marcas[0]["id"],
        imagen: "/img/Perro1.jpg"
    });
    var productosPrecio = new Array();
    productosPrecio.push({
        id: 1,
        producto_id: 1,
        peso: 2,
        precio: 1500
    });
    productosPrecio.push({
        id: 2,
        producto_id: 1,
        peso: 6,
        precio: 5e3
    });
    productosPrecio.push({
        id: 3,
        producto_id: 2,
        peso: 1,
        precio: 1500
    });
    productosPrecio.push({
        id: 4,
        producto_id: 3,
        peso: 1,
        precio: 2500
    });
    productosPrecio.push({
        id: 5,
        producto_id: 4,
        peso: 1,
        precio: 1500
    });
    productosPrecio.push({
        id: 6,
        producto_id: 5,
        peso: 1,
        precio: 1e3
    });
    var marcasScroll = $.marcasScroll;
    for (var i = 0; marcas.length > i; i++) {
        var ImageViewMarca = Ti.UI.createImageView({
            backgroundImage: marcas[i]["imagen"],
            width: "153.6px",
            id: marcas[i]["id"],
            height: "100%"
        });
        ImageViewMarca.addEventListener("click", function() {
            productosMarca(this["id"]);
        });
        marcasScroll.add(ImageViewMarca);
    }
    var Main = $.Main;
    var producto;
    var indice;
    var productoPrecio;
    var productosPrecioProducto = new Array();
    for (var i = 0; productosPrecio.length > i; i++) if (productosPrecio[i]["id"] == args["producto"]) {
        productoPrecio = productosPrecio[i];
        indice = i;
    }
    for (var i = 0; productos.length > i; i++) productos[i]["id"] == productoPrecio["producto_id"] && (producto = productos[i]);
    var cont = 0;
    for (var i = 0; productosPrecio.length > i; i++) if (producto["id"] == productosPrecio[i]["producto_id"]) {
        productosPrecioProducto.push(productosPrecio[i]);
        Titanium.API.info(productosPrecio[i]);
        cont += 1;
    }
    var Producto = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "28.7%"
    });
    var ImageViewProducto = Ti.UI.createImageView({
        backgroundImage: producto["imagen"],
        width: "25%",
        height: "100%"
    });
    var LabelGroup = Ti.UI.createView({
        width: "75%",
        height: "100%",
        layout: "vertical"
    });
    var LabelNombre = Ti.UI.createLabel({
        color: "#cc5122",
        width: "100%",
        height: "28.2%",
        top: "0%",
        left: "8.3%",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: producto["nombre"]
    });
    var LabelDescripcion = Ti.UI.createLabel({
        color: "gray",
        width: "100%",
        height: "19.6%",
        top: "0%",
        left: "8.3%",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: producto["descripcion"]
    });
    var LabelPrecio = Ti.UI.createLabel({
        width: "100%",
        height: "21.7%",
        color: "#5c5c5b",
        top: "0%",
        left: "8.3%",
        font: {
            fontFamily: "Noto Sans",
            fontWeight: "bold"
        },
        text: productoPrecio["precio"]
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
        width: "9.4%",
        height: "100%",
        left: "71.6%",
        layout: "vertical"
    });
    var InputPeso = Ti.UI.createTextField({
        width: "100%",
        height: "64%",
        top: "18%",
        backgroundColor: "#d8d8d8",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "#888888",
        value: productoPrecio["peso"],
        editable: false
    });
    Peso.addEventListener("click", function() {
        var winModalPeso;
        var viewModalPeso;
        var winModalPeso = Ti.UI.createWindow({
            backgroundColor: "#000",
            width: "100%",
            top: "3.5%",
            height: "96.5%",
            opacity: .4
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
        FlechaArrPeso.addEventListener("click", function() {
            Titanium.API.info(indice);
            Titanium.API.info(productosPrecio);
            if (productosPrecioProducto.length - 1 > indice) {
                indice += 1;
                productoPrecio = productosPrecioProducto[indice];
                InputPeso.value = productoPrecio["peso"];
                LabelPrecio.setText(productoPrecio["precio"]);
            }
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
        FlechaAbaPeso.addEventListener("click", function() {
            Titanium.API.info(indice);
            Titanium.API.info(productoPrecio);
            if (indice > 0) {
                indice -= 1;
                productoPrecio = productosPrecioProducto[indice];
                InputPeso.value = productoPrecio["peso"];
                LabelPrecio.setText(productoPrecio["precio"]);
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
        width: "9.4%",
        height: "100%",
        left: "71.6%",
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
            top: "3.5%",
            height: "96.5%",
            opacity: .4
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
        text: producto["detalle"]
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
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;