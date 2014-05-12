function Controller() {
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
            correo: correo,
            telefono: telefono,
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
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
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
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
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
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
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
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
            categoria: "TODAS",
            marca: "TODAS",
            nombre: nombre,
            nombre: "TODOS",
            pagina: 1
        }).getView().open();
    }
    function carroCompra() {
        carro.push({
            id: productoPrecio["id"],
            qty: InputCantidad.value
        });
        Alloy.createController("carroCompra", {
            token: token,
            carro: carro,
            marcas: marcas,
            productos: productos,
            medios: medios,
            direcciones: direcciones,
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono
        }).getView().open();
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
        backgroundImage: "/img/Fondo.jpg",
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
    buscarProducto ? $.__views.lupaImg.addEventListener("click", buscarProducto) : __defers["$.__views.lupaImg!click!buscarProducto"] = true;
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "10%",
        layout: "horizontal",
        id: "marcas"
    });
    $.__views.productoView.add($.__views.marcas);
    $.__views.__alloyId19 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId19"
    });
    $.__views.marcas.add($.__views.__alloyId19);
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
    $.__views.__alloyId20 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaDer.jpg",
        id: "__alloyId20"
    });
    $.__views.marcas.add($.__views.__alloyId20);
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
        font: {
            fontWeight: "bold"
        },
        title: "AGREGAR AL CARRO",
        id: "carro"
    });
    $.__views.footer.add($.__views.carro);
    carroCompra ? $.__views.carro.addEventListener("click", carroCompra) : __defers["$.__views.carro!click!carroCompra"] = true;
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
    var medio = args["medio"];
    var direccion = args["direccion"];
    var correo = args["correo"];
    var telefono = args["telefono"];
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
    var producto;
    var indice;
    var productoPrecio;
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
    $.Main.add(Producto);
    $.Main.add(Borde1);
    $.Main.add(Peso);
    $.Main.add(Borde2);
    $.Main.add(Cantidad);
    $.Main.add(Borde3);
    $.Main.add(DescripcionTitulo);
    $.Main.add(Borde4);
    $.Main.add(DescripcionContenido);
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    __defers["$.__views.lupaImg!click!buscarProducto"] && $.__views.lupaImg.addEventListener("click", buscarProducto);
    __defers["$.__views.carro!click!carroCompra"] && $.__views.carro.addEventListener("click", carroCompra);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;