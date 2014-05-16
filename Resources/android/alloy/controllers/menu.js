function Controller() {
    function menuclick(e) {
        var rowId = e.rowData.rowId;
        switch (rowId) {
          case "1":
            Alloy.CFG.main.backgroundColor = "#BF7070";
            break;

          case "2":
            Alloy.CFG.main.backgroundColor = "#3C3F93";
            break;

          case "3":
            Alloy.CFG.main.backgroundColor = "#2159B2";
            break;

          case "4":
            Alloy.CFG.main.backgroundColor = "#D88922";
        }
        Alloy.CFG.drawermenu.showhidemenu();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#4F4F4F",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    $.__views.__alloyId21 = Ti.UI.createView({
        top: "0",
        height: "100",
        backgroundImage: "/coffee.png",
        id: "__alloyId21"
    });
    $.__views.menu.add($.__views.__alloyId21);
    var __alloyId23 = [];
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "1",
        id: "__alloyId24"
    });
    __alloyId23.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Send in the clowns",
        id: "__alloyId28"
    });
    $.__views.__alloyId25.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "2",
        id: "__alloyId29"
    });
    __alloyId23.push($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Open your eyes Nicolas",
        id: "__alloyId33"
    });
    $.__views.__alloyId30.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "3",
        id: "__alloyId34"
    });
    __alloyId23.push($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "It's not your child",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "4",
        id: "__alloyId39"
    });
    __alloyId23.push($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "The Glory of the Empire",
        id: "__alloyId43"
    });
    $.__views.__alloyId40.add($.__views.__alloyId43);
    $.__views.__alloyId22 = Ti.UI.createTableView({
        backgroundColor: "#343434",
        top: "100",
        height: Ti.UI.SIZE,
        data: __alloyId23,
        id: "__alloyId22"
    });
    $.__views.menu.add($.__views.__alloyId22);
    menuclick ? $.__views.__alloyId22.addEventListener("click", menuclick) : __defers["$.__views.__alloyId22!click!menuclick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId22!click!menuclick"] && $.__views.__alloyId22.addEventListener("click", menuclick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;