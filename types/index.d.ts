// Type definitions for cordova-plugin-bluetoothprinter
// Project: https://github.com/apache/cordova-plugin-bluetoothprinter
// Definitions by: Codivoire <https://codivoire.github.io>

/**
* Global object BluetoothPrinter.
*/
interface Window {
  BluetoothPrinter: BluetoothPrinter;
}

interface BluetoothPrinter {
  status(
    success: (data: boolean) => void,
    error: (error: any) => void
  ): void

  list(
    success: (data: any[]) => void,
    error: (error: any) => void
  ): void

  connect(
    name: string,
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  isConnected(
    success: (data: boolean) => void,
    error: (error: any) => void
  ): void

  disconnect(
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  setEncoding(
    str: string,
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  printText(
    str: string,
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  printTextSizeAlign(
    str: string,
    size: number,
    align: number,
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  printTitle(
    str: string,
    size: number,
    align: number,
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  printImageUrl(
    str: string,
    align: number,
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  printBase64(
    str: string,
    align: number,
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  printQRCode(
    data: string,
    align: number,
    model: number,
    size: number,
    eclevel: number,
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  printBarcode(
    data: string,
    system: number,
    align: number,
    position: number,
    font: number,
    height: number,
    success: (data: any) => void,
    error: (error: any) => void
  ): void

  printPOSCommand(
    str: string,
    success: (data: any) => void,
    error: (error: any) => void
  ): void
}
