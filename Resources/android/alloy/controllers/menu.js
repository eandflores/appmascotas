function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "Test",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.menu = Ti.UI.createTableView({
        data: __alloyId0,
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rows = [];
    var row1 = Ti.UI.createTableViewRow({
        height: 65,
        rowId: 1,
        backgroundImage: "/img/MisPedidos.jpg"
    });
    var row2 = Ti.UI.createTableViewRow({
        height: 65,
        rowId: 2,
        backgroundImage: "/img/MisDirecciones.jpg"
    });
    var row3 = Ti.UI.createTableViewRow({
        height: 65,
        rowId: 3,
        backgroundImage: "/img/MisNotificaciones.jpg"
    });
    var row4 = Ti.UI.createTableViewRow({
        height: 65,
        rowId: 4
    });
    var row5 = Ti.UI.createTableViewRow({
        height: 65,
        rowId: 5,
        backgroundImage: "/img/CentroAyuda.jpg"
    });
    var row6 = Ti.UI.createTableViewRow({
        height: 65,
        rowId: 6,
        backgroundImage: "/img/AyudaTelefonica.jpg"
    });
    var row7 = Ti.UI.createTableViewRow({
        height: 65,
        rowId: 7,
        backgroundImage: "/img/MiPerfil.jpg"
    });
    var row8 = Ti.UI.createTableViewRow({
        height: 65,
        rowId: 8,
        backgroundImage: "/img/CerrarSesion.jpg"
    });
    rows.push(row1);
    rows.push(row2);
    rows.push(row3);
    rows.push(row4);
    rows.push(row5);
    rows.push(row6);
    rows.push(row7);
    rows.push(row8);
    $.menu.data = rows;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;