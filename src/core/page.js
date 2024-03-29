/**

Page load tasks

*/
// fix background image flicker on ie6
if ( browser.ie6 ) { 
	try { 
		doc.execCommand( 'BackgroundImageCache', false, true );
	} catch (ex) {}; 
}

// adding informational css classes to the root element for convenience
var classname = ['unknown'], key;
for ( key in browser ) {
	if ( browser[key] ) {
		if ( classname[0] == 'unknown' ) { 
			classname = [key]; 
		} 
		else {
			classname.push( key );
		}
	}
}

removeClass( docRoot, 'no-js' );
classname.push( 'js' );
addClass( docRoot, classname.join(' ') );