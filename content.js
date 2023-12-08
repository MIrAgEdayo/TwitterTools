chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    var array = document.querySelectorAll('[data-testid="cellInnerDiv"]');
    var i = -1
    array.forEach(data => {
        i++;
        if (i != 0) {
            const accountId = data["innerText"].split("\n")[1];
            if (accountId != null) {
                const values = data.getElementsByClassName("css-1qaijid r-bcqeeo r-qvutc0 r-poiln3");

                const name = values[1].innerHTML;

                var isVerified = false;
                if (values[2].innerHTML.length != 0) {
                    isVerified = true;
                }
    
                console.log(name + "(" + accountId + ") isVerified: " + isVerified);
            }   
        }
    });
    let title = "a";
    sendResponse(title);
});