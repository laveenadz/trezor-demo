require("babel-core/register");
require("babel-polyfill");
var nw = require('nw.gui');
nw.Window.get().showDevTools();
var TrezorConnect = require('../../trezor-connect-lib').default;
// set manifest
TrezorConnect.manifest({
    email: 'developer@xyz.com',
    appUrl: 'http://your.application.com'
})
//getAddress function call
 TrezorConnect.getAddress({
    bundle: [
        { path: "m/49'/0'/0'/0/0", showOnTrezor: false, address: "3L6TyTisPBmrDAj6RoKmDzNnj4eQi54gD2"}
    ]
 }).then(function(result) {
  console.log('line 27', result)
});
TrezorConnect.NodeHid().then(function(result) {
    console.log('line 27', result)
  });
  
