function iniciarComponentes() {
    main = Ti.UI.createView({
        id: "main",
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/img/Fondo.jpg"
    });
    wrapper = Ti.UI.createView({
        id: "wrapper",
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9.5%",
        layout: "horizontal"
    });
    menuImg = Ti.UI.createImageView({
        id: "menuImg",
        width: "14%",
        height: "100%",
        backgroundImage: "/img/menu.jpg"
    });
    perrogato = Ti.UI.createImageView({
        id: "perrogato",
        width: "28%",
        height: "100%",
        backgroundImage: "/img/perrogato.jpg"
    });
    perro = Ti.UI.createImageView({
        id: "perro",
        width: "22%",
        height: "100%",
        backgroundImage: "/img/perro.jpg"
    });
    gato = Ti.UI.createImageView({
        id: "gato",
        width: "22%",
        height: "100%",
        backgroundImage: "/img/gato.jpg"
    });
    lupaImg = Ti.UI.createImageView({
        id: "lupaImg",
        width: "14%",
        height: "100%",
        backgroundImage: "/img/lupa.jpg"
    });
    wrapper.add(menuImg);
    wrapper.add(perrogato);
    wrapper.add(perro);
    wrapper.add(gato);
    wrapper.add(lupaImg);
}

function iniciarMenu(productos) {
    menu = Alloy.createController("menu").getView();
    menu.addEventListener("click", function(e) {
        if (8 == e.rowData.rowId) {
            var vista = Alloy.createController("index", {
                productos: productos
            }).getView();
            vista.open();
        }
    });
}

function cargarLoading() {
    winCargando = Ti.UI.createWindow({
        backgroundColor: "#000",
        width: "100%",
        top: "3.5%",
        height: "96.5%",
        opacity: .7
    });
    labelCargando = Ti.UI.createLabel({
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
}

function buscarProducto() {
    winModal = Ti.UI.createWindow({
        backgroundColor: "#000",
        width: "100%",
        top: "3.5%",
        height: "9.1%"
    });
    viewModal = Ti.UI.createView({
        width: "100%",
        height: "100%",
        layout: "horizontal",
        backgroundImage: "/img/fondoBuscar.jpg",
        top: "0%"
    });
    buscar = Ti.UI.createTextField({
        width: "72%",
        height: "100%",
        hintText: "¿Que es lo que buscas?",
        color: "white",
        textAlign: "center"
    });
    inputsBuscar = Ti.UI.createView({
        width: "28%",
        height: "100%",
        layout: "horizontal"
    });
    lupa = Ti.UI.createView({
        width: "40%",
        height: "70%",
        left: "5%",
        right: "5%",
        top: "15%",
        bottom: "15%",
        backgroundImage: "/img/lupaBuscar.jpg"
    });
    cerrar = Ti.UI.createView({
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

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var main = null;

var wrapper = null;

var menuImg = null;

var perrogato = null;

var perro = null;

var gato = null;

var lupaImg = null;

var menu = null;

var winCargando = null;

var labelCargando = null;

var winModal = null;

var viewModal = null;

var buscar = null;

var lupa = null;

var inputsBuscar = null;

var cerrar = null;

Alloy.createController("index");