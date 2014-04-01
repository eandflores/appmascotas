function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "productos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.productos = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "productos"
    });
    $.__views.productos && $.addTopLevelView($.__views.productos);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#cc5122",
        width: "100%",
        height: "9%",
        top: "3.5%",
        id: "wrapper"
    });
    $.__views.productos.add($.__views.wrapper);
    $.__views.marcas = Ti.UI.createView({
        backgroundImage: "/img/fondoMarcas.jpg",
        width: "100%",
        height: "9.5%",
        id: "marcas"
    });
    $.__views.productos.add($.__views.marcas);
    $.__views.mainScroll = Ti.UI.createScrollView({
        width: "100%",
        height: "auto",
        layout: "vertical",
        showVerticalScrollIndicator: "true",
        id: "mainScroll"
    });
    $.__views.productos.add($.__views.mainScroll);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "232px",
        id: "__alloyId0"
    });
    $.__views.mainScroll.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createImageView({
        width: "25%",
        height: "100%",
        left: "0",
        backgroundImage: "/img/Perro1.jpg",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "67%",
        height: "100%",
        left: "0",
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#cc5122",
        width: "100%",
        height: "100px",
        text: "EUKANUBA 1",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "gray",
        width: "100%",
        height: "50px",
        text: "Alimentos para adultos",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: "100%",
        height: "82px",
        text: "$1500",
        id: "__alloyId5"
    });
    $.__views.__alloyId2.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        width: "7%",
        height: "100%",
        feft: "0",
        backgroundImage: "/img/Flecha.jpg",
        id: "__alloyId6"
    });
    $.__views.__alloyId0.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "232px",
        id: "__alloyId7"
    });
    $.__views.mainScroll.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createImageView({
        width: "25%",
        height: "100%",
        left: "0",
        backgroundImage: "/img/Gato1.jpg",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: "67%",
        height: "100%",
        left: "0",
        layout: "vertical",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#cc5122",
        width: "100%",
        height: "100px",
        text: "EUKANUBA 2",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "gray",
        width: "100%",
        height: "50px",
        text: "Alimentos para cachorros",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: "100%",
        height: "82px",
        text: "$2500",
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createImageView({
        width: "7%",
        height: "100%",
        feft: "0",
        backgroundImage: "/img/Flecha.jpg",
        id: "__alloyId13"
    });
    $.__views.__alloyId7.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "232px",
        id: "__alloyId14"
    });
    $.__views.mainScroll.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createImageView({
        width: "25%",
        height: "100%",
        left: "0",
        backgroundImage: "/img/Perro1.jpg",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        width: "67%",
        height: "100%",
        left: "0",
        layout: "vertical",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        color: "#cc5122",
        width: "100%",
        height: "100px",
        text: "EUKANUBA 3",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "gray",
        width: "100%",
        height: "50px",
        text: "Alimentos para adultos",
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        width: "100%",
        height: "82px",
        text: "$1500",
        id: "__alloyId19"
    });
    $.__views.__alloyId16.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        width: "7%",
        height: "100%",
        feft: "0",
        backgroundImage: "/img/Flecha.jpg",
        id: "__alloyId20"
    });
    $.__views.__alloyId14.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "232px",
        id: "__alloyId21"
    });
    $.__views.mainScroll.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createImageView({
        width: "25%",
        height: "100%",
        left: "0",
        backgroundImage: "/img/Gato1.jpg",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        width: "67%",
        height: "100%",
        left: "0",
        layout: "vertical",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        color: "#cc5122",
        width: "100%",
        height: "100px",
        text: "EUKANUBA 4",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        color: "gray",
        width: "100%",
        height: "50px",
        text: "Alimentos para cachorros",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: "100%",
        height: "82px",
        text: "$2500",
        id: "__alloyId26"
    });
    $.__views.__alloyId23.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createImageView({
        width: "7%",
        height: "100%",
        feft: "0",
        backgroundImage: "/img/Flecha.jpg",
        id: "__alloyId27"
    });
    $.__views.__alloyId21.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        width: "100%",
        layout: "horizontal",
        height: "232px",
        id: "__alloyId28"
    });
    $.__views.mainScroll.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createImageView({
        width: "25%",
        height: "100%",
        left: "0",
        backgroundImage: "/img/Perro1.jpg",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        width: "67%",
        height: "100%",
        left: "0",
        layout: "vertical",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        color: "#cc5122",
        width: "100%",
        height: "100px",
        text: "EUKANUBA 5",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        color: "gray",
        width: "100%",
        height: "50px",
        text: "Alimentos para adultos",
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        width: "100%",
        height: "82px",
        text: "$1500",
        id: "__alloyId33"
    });
    $.__views.__alloyId30.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createImageView({
        width: "7%",
        height: "100%",
        feft: "0",
        backgroundImage: "/img/Flecha.jpg",
        id: "__alloyId34"
    });
    $.__views.__alloyId28.add($.__views.__alloyId34);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;