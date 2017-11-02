/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * This component will add a tabindex to the element if there is none yet, and listen for the mouseenter event.
	 * Once this happens, the element will receive focus.
	 */
	AFRAME.registerComponent('aframe-aria', {
	    init: function() {
	        console.log(this.el.getAttribute('tabindex'));
	        if(this.el.getAttribute('tabindex') === null) {
	            this.el.setAttribute('tabindex', '-1');
	        }

	        this.el.addEventListener('mouseenter', this.onMouseEnter.bind(this));
	    },

	    onMouseEnter: function() {
	        console.log('focus');
	        this.el.focus();
	    },
	});

	/**
	 * Here's where the magic happens. Each supported ARIA attribute will be recreated as an aframe component that will add the aframe-aria
	 * component to it. This way, the element will be focusable by the cursor which will lead to the screenreader analyzing the element.
	 */
	var ariaAttributes = ['aria-label', 'aria-checked', 'aria-labelledby', 'role'];
	for(var key in ariaAttributes) {
	    AFRAME.registerComponent(ariaAttributes[key], {
	        schema: { type: 'string' },

	        init: function() {
	            this.el.setAttribute('aframe-aria', '');
	        }
	    });
	}

/***/ }
/******/ ]);