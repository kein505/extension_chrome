//'use strict';
//alert("Сделай зарядку-v2");

let lastDate = null; 
let isEnabled = false;
let datech=null;

chrome.runtime.onMessage.addListener((action, sender, sendResponse) => {
    switch(action) {
        case "start":
            isEnabled = true;
            lastDate = Date.now();
            break;
        case "stop":
            isEnabled = false;
            lastDate = null;
			datech = null;
            break;
        case "get_time": {
			datech = Date.now() - lastDate;
            if(isEnabled) {
                
				if(datech>950 && datech<1100)
				{
					alert("Сделай зарядку-v3");
				}
				//else 
				//{
					sendResponse(datech);
				//}
				
				
            } 
			else {
				datech=null;
                sendResponse(null);	
            }
            break;
        }
    }
});
//3600000 - 1 час
/* chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
}); */