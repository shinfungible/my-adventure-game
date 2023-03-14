import path from "path";
import { BrowserWindow, app } from "electron";

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
    width: 1414,
    height: 1000,
    frame: false,
  });

  mainWindow.loadFile("dist/index.html");
  mainWindow.setAspectRatio(1414 / 1000);
  // mainWindow.webContents.openDevTools({ mode: 'detach' });
});

app.once("window-all-closed", () => app.quit());