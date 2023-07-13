const {app, BrowserWindow, screen} = require('electron');
const serve = require('electron-serve');

const loadURL = serve({directory: 'renderer'});

let mainWindow;

(async () => {
	await app.whenReady();
	mainWindow = new BrowserWindow({
    height: screen.getPrimaryDisplay().size.height - 10,
    width: screen.getPrimaryDisplay().size.width- 10,
    icon: __dirname + "/build/icon.ico",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

	await loadURL(mainWindow);

	// The above is equivalent to this:
	await mainWindow.loadURL('app://-');
	// The `-` is just the required hostname
})();