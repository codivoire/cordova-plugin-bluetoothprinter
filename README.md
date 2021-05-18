# cordova-plugin-bluetoothprinter

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcodivoire%2Fcordova-plugin-bluetoothprinter.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcodivoire%2Fcordova-plugin-bluetoothprinter?ref=badge_shield)
[![npm version](https://img.shields.io/npm/v/@codivoire/cordova-plugin-bluetoothprinter.svg?style=flat-square)](https://www.npmjs.org/package/@codivoire/cordova-plugin-bluetoothprinter)
[![npm downloads](https://img.shields.io/npm/dm/@codivoire/cordova-plugin-bluetoothprinter.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@codivoire/cordova-plugin-bluetoothprinter)
![Supports Android](https://img.shields.io/badge/platforms-android-lightgrey.svg) 
![Apache 2.0](https://img.shields.io/npm/l/@codivoire/cordova-plugin-bluetoothprinter.svg)

A cordova plugin for bluetooth printer for android platform.

This code is being adapted from a fork of [Cordova-Plugin-Bluetooth-Printer](https://github.com/srehanuddin/Cordova-Plugin-Bluetooth-Printer), of free use and modifications that will arise for the improvement of the plugin.

Suggestions, critiques are welcome, participate and send a commit helping to improve the plugin for the community.

Thanks!

## Support

- [cordova-plugin-bluetoothprinter](#cordova-plugin-bluetoothprinter)
  - [Support](#support)
  - [Install](#install)
  - [Usage](#usage)
    - [Check Bluetooth status](#check-bluetooth-status)
    - [Connect printer](#connect-printer)
    - [Check if printer is connected](#check-if-printer-is-connected)
    - [Disconnect printer](#disconnect-printer)
      - [Obs](#obs)
    - [Set text encoding](#set-text-encoding)
    - [Print simple text](#print-simple-text)
    - [Print text with size and align](#print-text-with-size-and-align)
    - [Print image from path with align](#print-image-from-path-with-align)
    - [Print image from base64 with align](#print-image-from-base64-with-align)
    - [Print title with size and align](#print-title-with-size-and-align)
    - [POS printing](#pos-printing)
    - [Print QRCode](#print-qrcode)
    - [Print Barcode](#print-barcode)
  - [Size options](#size-options)
  - [Align options](#align-options)
  - [Sample receipt](#sample-receipt)

## Install

Using the Cordova CLI and NPM, run:

```bash
cordova plugin add cordova-plugin-bluetoothprinter
```

## Usage

Get list of paired bluetooth devices, including printers, if any:

```javascript
BluetoothPrinter.list(function (data) {
  console.log("Success");
  console.log(data);
},function (err) {
  console.log("Error");
  console.log(err);
})
```

Returns an array with the format:

```txt
data[0] = Device 1 name
data[1] = Device 1 MAC address
data[2] = Device 1 type
data[3] = Device 2 name
data[4] = Device 2 MAC address
data[5] = Device 2 type
```

Where device **name** is the required string to connect to the printer.

### Check Bluetooth status

```javascript
BluetoothPrinter.status(function(data){
  console.log("Success");
  console.log(data)
},function(err){
  console.log("Error");
  console.log(err)
})
```

### Connect printer

```javascript
BluetoothPrinter.connect("PrinterName", function(data){
  console.log("Success");
  console.log(data)
},function(err){
  console.log("Error");
  console.log(err)
})
```

### Check if printer is connected

```javascript
BluetoothPrinter.isConnected(function(data){
  console.log("Success");
  console.log(data)
},function(err){
  console.log("Error");
  console.log(err);
})
```

### Disconnect printer

```javascript
BluetoothPrinter.disconnect("PrinterName", function(data){
  console.log("Success");
  console.log(data)
}, function(err){
  console.log("Error");
  console.log(err)
})
```

#### Obs

I thought it best to create the function within a timeout

```javascript
setTimeout(function(){
  BluetoothPrinter.disconnect("PrinterName", function(data){
    console.log("Success");
    console.log(data)
  },function(err){
    console.log("Error");
    console.log(err)
  });
}, 1500)
```

### Set text encoding

```javascript
BluetoothPrinter.setEncoding("ISO-8859-1", function(data){
  console.log("Success");
  console.log(data)
},function(err){
  console.log("Error");
  console.log(err)
})
```

Refer to printer's manual for supported encodings and codepages.

### Print simple text

```javascript
BluetoothPrinter.printText("String to Print", function(data){
  console.log("Success");
  console.log(data)
},function(err){
  console.log("Error");
  console.log(err)
})
```

### Print text with size and align

```javascript
BluetoothPrinter.printTextSizeAlign("String to Print", 0, 0, function(data){
  console.log("Success");
  console.log(data)
},function(err){
  console.log("Error");
  console.log(err)
})
```

### Print image from path with align

```javascript
BluetoothPrinter.printImageUrl("Path String", 0, function(data){
  console.log("Success");
  console.log(data);
},function(err){
  console.log("Error");
  console.log(err);
})
```

In android tests with /storage/emulated/0/Pictures/myfolder/myimage.jpg - size max: 300x300px.

### Print image from base64 with align

- with align still in tests not work alignment)

```javascript
BluetoothPrinter.printBase64("Image Base64 String", '0', function(data){
  console.log("Success");
  console.log(data);
},function(err){
  console.log("Error");
  console.log(err);
})
```

### Print title with size and align

- with align still in tests not work alignment)

```javascript
BluetoothPrinter.printTitle("String text", 0, 0, function(data){
  console.log("Success");
  console.log(data);
},function(err){
  console.log("Error");
  console.log(err);
})
```

### POS printing

```javascript
BluetoothPrinter.printPOSCommand("0C", function(data){
  console.log("Success");
  console.log(data)
},function(err){
  console.log("Error");
  console.log(err)
})
```

### Print QRCode

```javascript
var data = "https://github.com/CesarBalzer/Cordova-Plugin-BluetoothPrinter";
var align = 1; /* 0, 1, 2 */
var model = 49; /* https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=140 */
var size = 32; /* https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=141 */
var eclevel = 50; /* https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=142 */

BluetoothPrinter.printQRCode(data, align, model, size, eclevel, function(data){
  console.log("Success");
  console.log(data);
},function(err){
  console.log("Error");
  console.log(err);
})
```

### Print Barcode

```javascript
var system = 0; /* Barcode system, defined as "m" at https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=128 */
var data = "012345678901"; /* Barcode data, according to barcode system */
var align = 1; /* 0, 1, 2 */
var position = 2; /* Text position: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=125 */;
var font = 0; /* Font for HRI characters: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=126 */
var height = 64; /* Set barcode height: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=127*/

BluetoothPrinter.printBarcode(system, data, align, position, font, height, function(data) {
  console.log("Success");
  console.log(data);
}, function(err){
  console.log("Error");
  console.log(err);
})
```

Notice that UPC-A, UPC-E, EAN13 and ITF accepts only:

```txt
Numbers 0-9
```

Sending other characters will return a plugin error with the proper description.

CODE39 accepts:

```txt
0 – 9, A – Z, SP, $, %, *, +, -, ., /
```

CODABAR accepts:

```txt
0 – 9, A – D, a – d, $, +, −, ., /, :
```

## Size options

```javascript
0 = CHAR_SIZE_01 // equivalent 0x1B, 0x21, 0x00
8 = CHAR_SIZE_08 // equivalent 0x1B, 0x21, 0x08
10 = CHAR_SIZE_10 // equivalent 0x1B, 0x21, 0x10
11 = CHAR_SIZE_11 // equivalent 0x1B, 0x21, 0x11
20 = CHAR_SIZE_20 // equivalent 0x1B, 0x21, 0x20
30 = CHAR_SIZE_30 // equivalent 0x1B, 0x21, 0x30
31 = CHAR_SIZE_31 // equivalent 0x1B, 0x21, 0x31
51 = CHAR_SIZE_51 // equivalent 0x1B, 0x21, 0x51
61 = CHAR_SIZE_61 // equivalent 0x1B, 0x21, 0x61
```

## Align options

```javascript
0 = ESC_ALIGN_LEFT // equivalent 0x1B, 0x61, 0x00
1 = ESC_ALIGN_CENTER // equivalent 0x1B, 0x61, 0x01
2 = ESC_ALIGN_RIGHT // equivalent 0x1B, 0x61, 0x02
```

## Sample receipt

The following sample receipt was printed with the plugin demo app using a generic portable bluetooth printer:

![Receipt](https://github.com/codivoire/cordova-plugin-bluetoothprinter/raw/master/demo/btplugin-demo-receipt.png)
