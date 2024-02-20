var context = "all";

var menuScanPage= {
	"id": "Scan",
	"title": "Highlight all links",
	"contexts": ["all"]
};

var menuItem = {
	"id": "LinkCheck",
	"title": "Check Link",
	"contexts": ["all"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.create(menuScanPage);

chrome.contextMenus.onClicked.addListener(clickLink);

function clickLink(info, tab) {
	if (info.menuItemId == "LinkCheck"){
		var myUrl = info.linkUrl;
		chrome.tabs.create({url: myUrl});
	}
	if (info.menuItemId == "Scan"){
		chrome.tabs.executeScript(undefined, {file: "highlight.js" });
	}

};