# simple-element-resize-detector

Observes resizing of an element using a hidden iframe.


## Installation

```sh
npm i -S simple-element-resize-detector
```


## Usage

```js
import observeResize from 'simple-element-resize-detector';

// any DOM element that can have children
let element = document.createElement('div');

// listen for resize
observeResize(element, () => {
	console.log('new size: ', {
		width: element.clientWidth,
		height: element.clientHeight
	});
});
```

To stop observing resize events, simply remove the returned detector frame:

```js
let detector = observeResize(el, () => {});

detector.remove();

// or, for better browser compatibility:
// detector.parentNode.removeChild(detector)
```

## License

MIT
