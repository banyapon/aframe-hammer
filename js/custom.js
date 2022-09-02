var extendDeep = AFRAME.utils.extendDeep;
var meshMixin = AFRAME.primitives.getMeshMixin();
var targetEl;



AFRAME.registerPrimitive('a-kmitl', extendDeep({}, meshMixin, {
    defaultComponents: {
        geometry: { primitive: 'box' }
    },

    mappings: {
        depth: 'geometry.depth',
        height: 'geometry.height',
        width: 'geometry.width'
    }
}));

AFRAME.registerPrimitive('a-xxx', {
    defaultComponents: {
        geometry: { primitive: 'sphere' }
    },

    mappings: {
        depth: 'geometry.depth',
        height: 'geometry.height',
        width: 'geometry.width'
    }
});



AFRAME.registerComponent('clickstep', {
    init: function () {
        targetEl = document.querySelector('#target');
    },

    tick: function () {
        document.querySelector('target').addEventListener('click', function (evt) {
            console.log('Touch & Click!');
        });
    }
});


