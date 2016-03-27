[
  "./src/ToastPage",
  "./src/MotionPage",
  "./src/DialogPage",
  "./src/NetworkPage",
  "./src/CameraPage",
  "./src/BarcodeScannerPage",
  "./src/MediaPage"
].forEach(function(page) { require(page).create(); });
tabris.create("Drawer").append(tabris.create("PageSelector"));
tabris.ui.children("Page")[0].open();
