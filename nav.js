// ...
const navOptions = [{
	path: "path.html",
	title: "Path basics"
},{
	path: "transform.html",
	title: "Transform basics"
}];
const currPath = location.pathname;

// ...
let link = null;
let navElem = document.createElement( "div" );

// ...
navElem.classList.add( "nav" );
navOptions.forEach( ( nav ) => {
	link = document.createElement( "a" );
	link.setAttribute( "href", nav.path );
	link.innerText = nav.title;
	link.classList.add( "link" );
	if( currPath.indexOf( nav.path ) >= 0 ) {
		link.classList.add( "link--active" );
	}

	navElem.appendChild( link );
});

// ...
document.getElementById( "container" ).insertBefore(
	navElem,
	document.getElementsByClassName( "selector" )[ 0 ] || document.getElementById( "canvas" )
);