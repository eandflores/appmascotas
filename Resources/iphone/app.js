var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var Utils = {
    _getExtension: function(fn) {
        var re = /(?:\.([^.]+))?$/;
        var tmpext = re.exec(fn)[1];
        return tmpext ? tmpext : "";
    },
    RemoteImage: function(a) {
        function saveImage() {
            image.removeEventListener("load", saveImage);
            savedFile.write(Ti.UI.createImageView({
                image: image.image,
                width: "auto",
                height: "auto"
            }).toImage());
        }
        a = a || {};
        var md5;
        var needsToSave = false;
        var savedFile;
        if (a.image) {
            md5 = Ti.Utils.md5HexDigest(a.image) + this._getExtension(a.image);
            savedFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, md5);
            savedFile.exists() ? a.image = savedFile : needsToSave = true;
        }
        var image = Ti.UI.createImageView(a);
        true === needsToSave && image.addEventListener("load", saveImage);
        return image;
    }
};

Alloy.createController("index");