// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#f0f0f0",
});

// Array Detail View
var arrayDetailView = Ti.UI.createView ({
	top: 40,
	left: 20,
	right: 20,
	height: "60%",
	backgroundColor: "#fff",
});

var arrayTextLabel = Ti.UI.createLabel ({
	text: "",
	color: "#000",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontStyle: "italic", fontFamily: "Arial", fontSize: 20}
});

// Next Btn
var nextView = Ti.UI.createView ({
	bottom: 20,
	right: 20,
	width: "40%",
	height: 40,
	backgroundColor: "#d3d3d3"
});

var nextTextLabel = Ti.UI.createLabel ({
	text: "NEXT",
	color: "#000",
	textAlign: "center",
	font: {fontWeight: "bold", fontFamily: "Arial"}
});

// Previous Btn
var previousView = Ti.UI.createView ({
	bottom: 20,
	left: 20,
	width: "40%",
	height: 40,
	backgroundColor: "#d3d3d3"
});

var prevTextLabel = Ti.UI.createLabel ({
	text: "PREVIOUS",
	color: "#000",
	textAlign: "center",
	font: {fontWeight: "bold", fontFamily: "Arial"}
});

var neededFiles = require("externalResources");

nextView.add(nextTextLabel);
previousView.add(prevTextLabel);
arrayDetailView.add(arrayTextLabel);
mainWindow.add(arrayDetailView, nextView, previousView);
mainWindow.open();



