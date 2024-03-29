function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.alcoapps.drawermenu/" + s : s.substring(0, index) + "/com.alcoapps.drawermenu/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10101.0003,
    key: "container",
    style: {
        navBarHidden: "true",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "menuview",
    style: {
        backgroundColor: "#cacaca",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "mainview",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "mainviewheader",
    style: {
        top: "0",
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#cacaca"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "menubutton",
    style: {
        left: "0",
        borderWidth: 1,
        borderColor: "#000",
        width: "40dp",
        height: "40dp",
        visible: true
    }
} ];