// ...
const navOptions = [{
	path: "/",
	title: "Path basics"
},{
	path: "/index2.html",
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
	if( currPath == nav.path ) {
		link.classList.add( "link--active" );
	}

	navElem.appendChild( link );
});

// ...
document.getElementById( "container" ).insertBefore(
	navElem,
	document.getElementsByClassName( "selector" )[ 0 ] || document.getElementById( "canvas" )
);