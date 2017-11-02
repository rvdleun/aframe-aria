## aframe-aria

A project to add support for aria attributes to AFrame. When a cursor looks at an
entity with a supported aria-attribute, the browser will add focus on the HTML element. 
This way, a screen reader will be able to communicate what the user is looking at, and
provide additional instructions for input.

#### Browser Installation

Include the `dist/aframe-aria.min.js` file in your project and you're good to go.

### Supported attributes

* `aria-label`
* `aria-checked`
* `aria-labelledby`
* `role`

### Tested on

* MacBook Pro - VoiceOver
* Samsung S8+ - Voice Assistent

### Todo

* Examples
* Instructions / thoughts on how to use
* Support for more aria-attributes
* Test with more software