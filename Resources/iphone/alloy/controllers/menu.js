function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId20 = [];
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        id: "__alloyId21"
    });
    __alloyId20.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        text: "Test",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.menu = Ti.UI.createTableView({
        data: __alloyId20,
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rows = [];
    for (i = 0; 10 >= i; i++) {
        var row = Ti.UI.createTableViewRow({
            height: 30,
            rowId: i
        });
        row.add(Ti.UI.createLabel({
            text: "Option " + i,
            width: Ti.UI.FILL
        }));
        rows.push(row);
    }
    $.menu.data = rows;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;