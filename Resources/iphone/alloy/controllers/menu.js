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
    var data = [ {
        img: "mis-pedidos",
        text: "Mis Pedidos"
    }, {
        img: "mis-direcciones",
        text: "Mis Direcciones"
    }, {
        img: "notificaciones",
        text: "Notificaciones"
    }, {
        text: "spacer"
    }, {
        img: "centro-de-ayuda",
        text: "Centro de ayuda"
    }, {
        img: "ayuda-telefonica",
        text: "Ayuda telefónica"
    }, {
        img: "mi-perfil",
        text: "Mi perfil"
    }, {
        img: "cerrar-sesion",
        text: "Cerrar sesión"
    } ];
    var row_h = 40;
    var row = null;
    for (i in data) {
        row = Ti.UI.createTableViewRow({
            height: row_h,
            layout: "horizontal",
            rowId: parseInt(i) + 1
        });
        if ("spacer" != data[i].text) {
            row.add(Ti.UI.createImageView({
                image: "/img/menu/" + data[i].img + ".png",
                height: row_h - 10,
                left: 25,
                top: 5
            }));
            row.add(Ti.UI.createLabel({
                left: 10,
                height: row_h,
                text: data[i].text,
                color: "#525252",
                font: {
                    fontFamily: "Noto Sans",
                    fontWeight: "bold",
                    fontSize: 15
                }
            }));
        } else {
            row.height = 220;
            row.selectionStyle = "none";
        }
        rows.push(row);
    }
    $.menu.separatorColor = "#ccc";
    $.menu.data = rows;
    $.menu.left = -15;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;