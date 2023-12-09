chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request == "removeSpam") {
		removeSpams();
	}
});

function removeSpams() {
	var array = document.querySelectorAll('[data-testid="cellInnerDiv"]');
	var i = -1
	array.forEach(data => {
		i++;
		if (i != 0) {
			const accountId = data["innerText"].split("\n")[1];
			if (accountId != null) {
				const values = data.getElementsByClassName("css-1qaijid r-bcqeeo r-qvutc0 r-poiln3");
				const tweet = data.getElementsByClassName("css-175oi2r r-1igl3o0 r-qklmqi r-1adg3ll r-1ny4l3l");
				const name = values[1].innerHTML;
				var isVerified = false;

				if (values[2].innerHTML.length != 0) {
					isVerified = true;
					
					while (tweet.length) {
						tweet.item(0).remove();
					}
					console.log(name + " removed");
				}
				console.log(name + "(" + accountId + ") isVerified: " + isVerified);
			}   
		}
	});
}