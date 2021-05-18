/* global cordova, module */

var exec = require('cordova/exec');

var BluetoothPrinter = {
  /**
   * Check Bluetooth status
   *
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  status: function (success, error) {
    exec(success, error, "BluetoothPrinter", "status", []);
  },

  /**
   * Get list of paired bluetooth devices, including printers
   *
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  list: function (success, error) {
    exec(success, error, "BluetoothPrinter", "list", []);
  },

  /**
   * Check Bluetooth status
   *
   * @param {string} name - Device name
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  connect: function (name, success, error) {
    exec(success, error, "BluetoothPrinter", "connect", [name]);
  },

  /**
   * Check if printer is connected
   *
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  isConnected: function (success, error) {
    exec(success, error, "BluetoothPrinter", "connected", []);
  },

  /**
   * Disconnect the printer
   *
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  disconnect: function (success, error) {
    exec(success, error, "BluetoothPrinter", "disconnect", []);
  },

  /**
   * Set text encoding
   *
   * @param {string} str - Encoding string (Ex: ISO-8859-1)
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   *
   * Refer to printer's manual for supported encodings and codepages.
   */
  setEncoding: function (str, success, error) {
    exec(success, error, "BluetoothPrinter", "setEncoding", [str]);
  },

  /**
   * Print simple text
   *
   * @param {string} str - Text to print
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  printText: function (str, success, error) {
    exec(success, error, "BluetoothPrinter", "printText", [str]);
  },

  /**
   * Print text with size and align
   *
   * @param {string} str - Text to print
   * @param {number} size - Text size
   * @param {number} align - Text alignment [0, 1, 2]
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  printTextSizeAlign: function (str, size, align, success, error) {
    exec(success, error, "BluetoothPrinter", "printTextSizeAlign", [str, size, align]);
  },

  /**
   * Print title with size and align
   *
   * @param {string} str - Title to print
   * @param {number} size - Title size
   * @param {number} align - Title alignment [0, 1, 2]
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  printTitle: function (str, size, align, success, error) {
    exec(success, error, "BluetoothPrinter", "printTitle", [str, size, align]);
  },

  /**
   * Print image from path with align
   *
   * @param {string} str - Image path
   * @param {number} align - Image alignment [0, 1, 2]
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   *
   * In android tests with /storage/emulated/0/Pictures/myfolder/myimage.jpg - size max: 300x300px.
   */
  printImageUrl: function (str, align, success, error) {
    exec(success, error, "BluetoothPrinter", "printImageUrl", [str, align]);
  },

  /**
   * Print image from base64 with align
   *
   * @param {string} str - base64 string
   * @param {number} align - 0, 1, 2
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   *
   * - with align still in tests not work alignment
   */
  printBase64: function (str, align, success, error) {
    exec(success, error, "BluetoothPrinter", "printBase64", [str, align]);
  },

  /**
   * Print QRCode
   *
   * @param {string} data - QRCode data [url or simple text]
   * @param {number} align - 0, 1, 2
   * @param {number} model
   * @param {number} size
   * @param {number} eclevel
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  printQRCode: function (data, align, model, size, eclevel, success, error) {
    exec(success, error, "BluetoothPrinter", "printQRCode", [data, align, model, size, eclevel]);
  },

  /**
   * Print Barcode
   *
   * @param {string} data - Barcode data, according to barcode system
   * @param {number} system - Barcode system
   * @param {number} align - 0, 1, 2
   * @param {number} position - Text position
   * @param {number} font - Font for HRI characters
   * @param {number} height - Barcode height
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  printBarcode: function (data, system, align, position, font, height, success, error) {
    exec(success, error, "BluetoothPrinter", "printBarcode", [system, data, align, position, font, height]);
  },

  /**
   * POS printing
   *
   * @param {string} str - POS (Ex: OC) => OC is a POS command for page feed
   * @param {function} success - Result on success
   * @param {function} error - Result on failure
   */
  printPOSCommand: function (str, success, error) {
    exec(success, error, "BluetoothPrinter", "printPOSCommand", [str]);
  }
};

module.exports = BluetoothPrinter;
