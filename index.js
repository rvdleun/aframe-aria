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