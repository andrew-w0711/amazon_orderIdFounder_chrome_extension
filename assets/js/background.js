(function(window, jQuery){
	chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
		switch(request.msg) {
			case "start":
				var value = localStorage.getItem("client_value");
				chrome.tabs.query({active: true}, function(tabs){
				    chrome.tabs.sendMessage(tabs[0].id, 
			    	{
			    		action: "start_search",
			    		data: {
			    			value: value
			    		}
			    	}, function(response) {});  
				});
				sendResponse({});
				break;

			default:
				break;
		}
	});
})(window, $);