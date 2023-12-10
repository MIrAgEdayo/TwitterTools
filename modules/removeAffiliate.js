chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request == "removeAffiliate") {
		removeAffiliate();
	}
});

function removeAffiliate() {
	const replies = document.querySelectorAll('[data-testid="cellInnerDiv"]');
	const ownerAccountId = document.getElementsByClassName("css-1rynq56 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978")[0].textContent;
	var i = -1
	replies.forEach(reply => {
		i++;
		if (i == 0) {
			return;
		}

		const accountId = reply["innerText"].split("\n")[1];
		if (accountId == ownerAccountId) {
			const tweet = reply.getElementsByClassName("css-175oi2r r-1igl3o0 r-qklmqi r-1adg3ll r-1ny4l3l");
			const tree = reply.getElementsByClassName("css-175oi2r r-1adg3ll r-1ny4l3l");

			if (tweet.length == 0) {
				while (tree.length) {
					tree.item(0).remove();
				}
			}else {
				while (tweet.length) {
					tweet.item(0).remove();
				}
			}
			console.log("Affiliate removed");
		}
	});
}