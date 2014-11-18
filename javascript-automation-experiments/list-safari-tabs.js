#!/usr/bin/env osascript -l JavaScript


var safari = Application('Safari');

if ( safari ) {
    
	windows = safari.windows();
	var matchingUrls;

	var s = "test string";
	if ( s.match(/test/) ) {
		matchingUrls = "yes";
	}


	// for ( winId in windows ) {
	//    thisWin = windows[winId];
	//    for ( tabId in thisWin.tabs() ) { 
	//		thisTab = thisWin.tabs().at(tabId);		   

	//    }
	//}
}
