// ...
let selector = document.createElement( "select" );
let svgElems = document.getElementsByTagName( "svg" );

// ...
let showSvg = () => {
	Array.prototype.forEach.call( svgElems, ( el ) =>   el.style.display = "none" );
	document.getElementsByClassName( selector.value )[ 0 ].style.display = "block" ;
};

// ...
let len = svgElems.length;
Array.prototype.forEach.call( svgElems, ( el, i ) => {
	let nameOfElem = el.classList.value.split( " " ).pop();
	selector.innerHTML += `
		<option value="${ nameOfElem }">
			${ len - i }. ${ nameOfElem }
		</option>
		`;
});

// ...
selector.classList.add( "selector" );
selector.addEventListener( "change", showSvg );
document.getElementById( "container" ).insertBefore(
	selector,
	document.getElementById( "canvas" )
);
showSvg();