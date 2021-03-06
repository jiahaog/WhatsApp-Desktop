/**
 * Created by JiaHao on 4/7/15.
 */


var app = require('app');

var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow(
        {
            width: 1280,
            height: 800,
            'web-preferences': {
                javascript: true,
                plugins: true,
            }
        }
    );

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    //mainWindow.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    })
});

