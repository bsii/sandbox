#!/usr/bin/env osascript -l JavaScript


function run(argv) {
    console.log(JSON.stringify(argv));
    
    if ( argv[0] == undefined ) {
        console.log("No arguments!")
        return;
    }
    
    var term = argv[0]
    
    var safari = Application('Safari');
   
    var newWindow = undefined;
    
    for ( window in safari.windows ) {
        console.log("window " + window)
        tabs = safari.windows[window].tabs.whose({ url: { _contains: term } })
        if ( ! newWindow && tabs.count > 0) {
//            safari.make({ "new": "document"} )
//            newWindow = safari.windows[0]
        }
        for ( tab in tabs ) {
            console.log( "tab n is " + tab + " and url is " + tabs[tab].url() );
//            tabs[tab].move( { "to": newWindow } );
        }
    }
    
    
//    var newWindow = safari.windows[0]
    
    // pretend this collects a set of tabs matching a URL pattern and moves them to a new window
    
    
    // then you have to close the first tab in the new window cuz making a new window made an extra tab

    if ( newWindow ) {
        newWindow.tabs[0].close()
    }
    
    
    
//    console.log( safari.windows[0].tabs[0].url() )
//    console.log( safari.windows[1].tabs[0].url() )
//    console.log( safari.windows[1].tabs[1].url() )
//    console.log( safari.windows[1].tabs[-1].url() )
    

//    safari.windows[1].tabs[0].move( { "to": safari.windows[0].tabs[-1] } )
    
//    var matchingUrls;
//    if ( safari ) {
//        for ( windowID in safari.windows() ) {
//            console.log(windowID);
//            if ( windowID === null ) {
//                console.log("NULL")
//            }
//            
//            var thisWindow = safari.windows().at(windowID);
//            if ( thisWindow ) {
//                for ( tabID in thisWindow.tabs() ) {
////                    console.log(tabID)
//                    //                var thisTab = thisWindow.tabs[tabID];
//                    //                if ( thisTab ) {
//                    //                    console.log(thisTab.url() );
//                    ////                    matchingUrls.push( { "windowID": windowID, "tabID": tabID, "url": thisTab.url() } )
//                    //                }
//                    
//                }
//            }
//        }
//    }
    
//    console.log(JSON.stringify( matchingUrls ));

    
}


    
//    for ( window in safari.windows() ) {
//        for ( tabId in window.tabs() ) {
//            window.tab[tabId];
//        }
    
       //	    for ( tabId in thisWin.tabs() ) {
//			thisTab = thisWin.tabs().at(tabId);		   
//
//	    }
//	}
    
    
    
//	var s = "test string";
//	if ( s.match(/test/) ) {
//		matchingUrls = "yes";
//	}
