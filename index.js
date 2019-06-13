const CSS = `position:absolute;left:0;top:-100%;width:100%;height:100%;margin:1px 0 0;border:none;opacity:0;pointer-events:none;`;

export default (element, handler) => {
	const frame = document.createElement('iframe');
	const supportsPE = document.documentMode < 11 && 'pointerEvents' in frame.style;

	frame.style.cssText = `${CSS}${supportsPE ? '' : 'visibility:hidden;'}`;
	frame.onload = () => {
		frame.contentWindow.onresize = () => {
			handler(element);
		};
	};
	element.appendChild(frame);
	return frame;
};
