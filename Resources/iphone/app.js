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

function iniciarMenu(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto) {
    menu = Alloy.createController("menu").getView();
    menu.addEventListener("click", function(e) {
        Ti.API.info("CLICK: " + e.rowData.rowId);
        switch (e.rowData.rowId) {
          case 1:
            cargarPedidos(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto);
            Alloy.createController("pedidos", {
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
                padre: padre,
                producto: producto
            }).getView().open();
            break;

          case 2:
            cargarDatos(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto);
            break;

          case 3:
            Alloy.createController("notificaciones", {
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
                padre: padre,
                producto: producto
            }).getView().open();
            break;

          case 4:
            Alloy.createController("carroCompra", {
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
                padre: padre,
                producto: producto
            }).getView().open();
            break;

          case 5:
            break;

          case 6:
            Ti.Platform.openURL("tel://0222021974");
            break;

          case 7:
            Alloy.createController("comoComprar", {
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
                padre: padre,
                producto: producto
            }).getView().open();
            break;

          case 8:
            Alloy.createController("index", {
                token: null,
                carro: [],
                marcas: marcas,
                productos: productos,
                medios: medios,
                direcciones: [],
                usuario: null,
                medio: null,
                direccion: null,
                descuento: null,
                pedidos: [],
                notificaciones: []
            }).getView().open();
        }
    });
}

function cargarLoading() {
    winCargando = Ti.UI.createWindow({
        backgroundImage: "/img/splash-tiendapet.jpg",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        width: "100%",
        bottom: "0%",
        height: "96.5%"
    });
}

function buscarProducto() {
    winModal = Ti.UI.createWindow({
        backgroundColor: "#000",
        width: "100%",
        top: "3.5%",
        height: "9.1%",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
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
        value: "¿Que es lo que buscas?",
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

function formatCurrency(num) {
    num = num.toString();
    num = num.replace(/,/gi, "");
    if (num.length > 3) {
        var dec = 0;
        var sep = ".";
        var decChar = ",";
        var pre = "";
        var post = "";
        num = isNaN(num) || "" === num || null === num ? 0 : num;
        var n = num.toString().split(decChar);
        return (pre || "") + n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + sep) + (n.length > 1 ? decChar + n[1].substr(0, dec) : "") + (post || "");
    }
    return num;
}

function cargarDatos(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto) {
    if (medios.length > 0) cargarDirecciones(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto); else {
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                try {
                    medios = JSON.parse(this.responseText);
                    cargarDirecciones(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto);
                } catch (e) {
                    alert("Error de conexión con el servidor1." + e);
                }
            },
            onerror: function() {
                alert("Error de conexión con el servidor2.");
            }
        });
        xhr.open("GET", "http://tiendapet.cl/api/pagos");
        xhr.send();
    }
}

function cargarDirecciones(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto) {
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            try {
                direcciones = JSON.parse(this.responseText);
                Alloy.createController("direccion", {
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
                    padre: padre,
                    producto: producto
                }).getView().open();
            } catch (e) {
                alert("Error de conexión con el servidor3.");
            }
        },
        onerror: function() {
            alert("Error de conexión con el servidor4.");
        }
    });
    xhr.open("GET", "http://tiendapet.cl/api/usuario/direcciones?user_token=" + token);
    xhr.send();
}

function cargarPedidos(token, carro, marcas, productos, medios, direcciones, usuario, medio, direccion, descuento, pedidos, notificaciones, padre, producto) {
    var xhr = Ti.Network.createHTTPClient({
        onload: function(e) {
            try {
                pedidos = JSON.parse(this.responseText);
                Alloy.createController("pedidos", {
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
                    padre: padre,
                    producto: producto
                }).getView().open();
            } catch (e) {
                alert(e);
            }
        },
        onerror: function() {
            alert("Error de conexión con el servidor6.");
        }
    });
    xhr.open("GET", "http://tiendapet.cl/api/usuario/compras?user_token=" + token);
    xhr.send();
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