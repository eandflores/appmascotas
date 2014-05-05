function buscarProducto() {
    var winModal;
    var viewModal;
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
        backgroundImage: "/img/fondoBuscar.jpg"
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
        width: "30%",
        height: "100%",
        left: "10%",
        right: "10%",
        top: "20%",
        bottom: "20%",
        backgroundImage: "/img/lupaBuscar.jpg"
    });
    var cerrar = Ti.UI.createView({
        left: "12.5%",
        right: "12.5%",
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

Alloy.createController("index");