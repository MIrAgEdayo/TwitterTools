document.getElementById('btn_removeSpam').addEventListener('click', () => {
	chrome.tabs.query( {active:true, currentWindow:true}, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, "removeSpam");
	});
});