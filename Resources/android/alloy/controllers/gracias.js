function Controller() {
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
            nombre: nombre
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
            medio: medio,
            direccion: direccion,
            correo: correo,
            telefono: telefono,
            categoria: categorias[3],
            marca: "TODAS",
            nombre: "TODOS"
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
            nombre: "TODOS"
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
            nombre: "TODOS"
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
            nombre: "TODOS"
        }).getView().open();
    }
    function finalizar() {
        Alloy.createController("fin", {
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gracias";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.gracias = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg",
        id: "gracias"
    });
    $.__views.gracias && $.addTopLevelView($.__views.gracias);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal",
        id: "wrapper"
    });
    $.__views.gracias.add($.__views.wrapper);
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
    $.__views.gracias.add($.__views.marcas);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaIzq.jpg",
        id: "__alloyId20"
    });
    $.__views.marcas.add($.__views.__alloyId20);
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
    $.__views.__alloyId21 = Ti.UI.createImageView({
        width: "14%",
        height: "80%",
        backgroundImage: "/img/FlechaDer.jpg",
        id: "__alloyId21"
    });
    $.__views.marcas.add($.__views.__alloyId21);
    $.__views.main = Ti.UI.createView({
        width: "100%",
        height: "80.5%",
        layout: "vertical",
        id: "main"
    });
    $.__views.gracias.add($.__views.main);
    $.__views.imagenGracias = Ti.UI.createImageView({
        width: "100%",
        height: "43.2%",
        image: "/img/gracias.jpg",
        id: "imagenGracias"
    });
    $.__views.main.add($.__views.imagenGracias);
    $.__views.labels = Ti.UI.createView({
        width: "100%",
        height: "47.8%",
        layout: "vertical",
        id: "labels"
    });
    $.__views.main.add($.__views.labels);
    $.__views.__alloyId22 = Ti.UI.createImageView({
        height: "11.3%",
        width: "100%",
        backgroundImage: "/img/tituloGracias.jpg",
        id: "__alloyId22"
    });
    $.__views.labels.add($.__views.__alloyId22);
    $.__views.gracias = Ti.UI.createLabel({
        left: "14%",
        height: "8%",
        color: "#585858",
        font: {
            fontSize: "10sp"
        },
        text: "Revisa tu correo para seguir con la operación",
        id: "gracias"
    });
    $.__views.labels.add($.__views.gracias);
    $.__views.__alloyId23 = Ti.UI.createImageView({
        height: "11.3%",
        width: "100%",
        backgroundImage: "/img/tituloMedio.jpg",
        id: "__alloyId23"
    });
    $.__views.labels.add($.__views.__alloyId23);
    $.__views.pago = Ti.UI.createLabel({
        left: "14%",
        height: "8%",
        color: "#585858",
        font: {
            fontSize: "10sp"
        },
        id: "pago"
    });
    $.__views.labels.add($.__views.pago);
    $.__views.footer = Ti.UI.createView({
        width: "100%",
        height: "9%",
        id: "footer"
    });
    $.__views.main.add($.__views.footer);
    $.__views.finalizar = Ti.UI.createButton({
        backgroundColor: "#cc5122",
        color: "white",
        width: "100%",
        height: "100%",
        title: "ACEPTAR",
        id: "finalizar"
    });
    $.__views.footer.add($.__views.finalizar);
    finalizar ? $.__views.finalizar.addEventListener("click", finalizar) : __defers["$.__views.finalizar!click!finalizar"] = true;
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
    $.marcasScroll.removeAllChildren();
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
    for (i = 0; medios.length > i; i++) medios[i]["id"] == medio && ($.pago.text = medios[i]["paym_name"]);
    __defers["$.__views.perrogato!click!productosPerroGato"] && $.__views.perrogato.addEventListener("click", productosPerroGato);
    __defers["$.__views.perro!click!productosPerro"] && $.__views.perro.addEventListener("click", productosPerro);
    __defers["$.__views.gato!click!productosGato"] && $.__views.gato.addEventListener("click", productosGato);
    __defers["$.__views.lupaImg!click!buscarProducto"] && $.__views.lupaImg.addEventListener("click", buscarProducto);
    __defers["$.__views.finalizar!click!finalizar"] && $.__views.finalizar.addEventListener("click", finalizar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;