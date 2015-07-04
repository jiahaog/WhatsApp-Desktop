# WhatsApp

## Introduction

A few hours of tinkering around with [Electron](http://electron.atom.io), in an attempt to create a simple wrapper for WhatsApp Web with the sole purpose of being able to `⌘-tab` or `alt-tab` as an icon on my dock.

Simply a barebones implementation based on [antolinicolae's version](https://github.com/anatolinicolae/whatsapp).

This should function exactly the same as http://web.whatsapp.com. For jailbroken iOS users, see [WhatsApp Web Enabler](http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=whatsappwebenablerDp)

## Release

See [Releases](https://github.com/skewedlines/WhatsApp-Desktop/releases)

## Build

### Dependencies
- [Electron](https://github.com/atom/electron)
- [Electron Packager](https://github.com/maxogden/electron-packager)

### Package

Package the app into an executable application

```bash
$ cd <Project folder>

$ electron-packager ./ WhatsApp --platform=darwin --arch=x64 --version=0.29.1 --out=./build --icon=./assets/icon/whatsapp.icns --overwrite
```

### Run

Runs the app using the global `electron-prebuild`
```bash
$ electron .
```

## To-Do

- Find out how to convert and use an `.icns` file

