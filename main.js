const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

Menu.setApplicationMenu(null);

const createWindow = () => {
	let win = new BrowserWindow({
		width: 1000,
		height: 700,
		useContentSize: true,
		minWidth: 25,
		minHeight: 25,
		title: "Chess Comp Stomp with Hacks",
		icon: path.join(__dirname, "icon512x512.png")
	});
	
	win.loadFile("ChessCompStompWithHacks.html");
};

app.whenReady().then(() => {
	createWindow();
});
