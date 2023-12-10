const switch_removeSpam = document.getElementById('removeSpam');
switch_removeSpam.addEventListener('click', () => {
	if (switch_removeSpam.checked) {
		chrome.tabs.query( {active:true, currentWindow:true}, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, "removeSpam");
		});
	}
});

const switch_removeAffiliate = document.getElementById('removeAffiliate');
switch_removeAffiliate.addEventListener('click', () => {
	if (switch_removeAffiliate.checked) {
		chrome.tabs.query( {active:true, currentWindow:true}, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, "removeAffiliate");
		});
	}
});