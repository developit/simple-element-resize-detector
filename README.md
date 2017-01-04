# simple-element-resize-detector [![NPM](https://img.shields.io/npm/v/simple-element-resize-detector.svg?style=flat)](https://www.npmjs.org/package/simple-element-resize-detector)


Observes resizing of an element using a hidden iframe.

[**JSFiddle Demo**](https://jsfiddle.net/developit/62Lgh3wz/)

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

## Notes

* `element` passed to `observeResize()` must have `position: relative` style to be correctly observed, otherwise nearest relative ancestor will be observed instead.
* This library uses `<iframe>`s to detect when an element resizes. `<iframe>`s are heavy objects are usually take good amount of memory. Be careful and don't abuse it.

## License

MIT
