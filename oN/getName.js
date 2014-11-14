(function(){
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if(request.askForTitle) {	
		var j = $('title').html().replace(/(\w*) (\(\d+\)|\(TV Series \d+.*\)) - IMDb/,'$1');		
		sendResponse({title: j});
	} else {
		sendResponse({});
	}	
  });
})()