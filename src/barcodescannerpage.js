var PluginPage = require("./PluginPage");

var page = new PluginPage(
  "BarcodeScanner",
  "phonegap-plugin-barcodescanner",
  function(parent) {
    tabris.create(
      "Button",
      { layoutData: {left: 10, top: 10, right: 10}, text: "Scan Barcode" }
    ).on("select", scanBarcode).appendTo(parent);
    var resultView = tabris.create("TextView", { layoutData: {top: "prev() 20", left: 20, right: 20}, markupEnabled: true }).appendTo(parent);
    function scanBarcode() {
      cordova.plugins.barcodeScanner.scan(
        function(result) {
          resultView.set("text", result.cancelled ? "Scan cancelled" : "Scan result: " + result.text + " (" + result.format + ")");
        },
        function(error) {
          resultView.set("text", "Error: " + error);
        }
      );
    }
  }
);

module.exports = page;
