const PE = document.documentMode < 11 ? false : 'pointerEvents' in style;
let CSS = 'position:absolute;left:0;top:-100%;width:100%;height:100%;margin:1px 0 0;border:none;opacity:0;pointer-events:none;';

if (!PE) {
  CSS += 'visibility:hidden;';
}

export default (element, handler) => {
	let frame = document.createElement('iframe');
	frame.style.cssText = CSS;
	element.appendChild(frame);
	frame.contentWindow.onresize = () => { handler(element); };
	return frame;
}
