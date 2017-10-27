const CSS = 'position:absolute;left:0;top:-100%;width:100%;height:100%;margin:1px 0 0;border:none;opacity:0;pointer-events:none;';

export default (element, handler) => {
	let frame = document.createElement('iframe');
  let supportsPE = document.documentMode < 11 ? false : 'pointerEvents' in frame.style;

	frame.style.cssText = supportsPE ? CSS : CSS + 'visibility:hidden;';
	element.appendChild(frame);
	frame.contentWindow.onresize = () => { handler(element); };
	return frame;
}
