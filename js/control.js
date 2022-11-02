AFRAME.registerComponent('rotate-box', {
    init: function () {
        const el = document.querySelector('#box');
        var myElement = document.getElementById('myElement');
        var mc = new Hammer(myElement);
        mc.on('pan', (ev) => {
            let rotation = el.getAttribute("rotation");
            myElement.textContent = ev.type + " gesture detected.";
            rotate = ev.type;
            console.log("Rotate: " + rotate);

            switch (ev.direction) {
                case 2:
                    rotation.y = rotation.y + 10;
                    break;
                case 4:
                    rotation.y = rotation.y - 10;
                    break;
                case 8:
                    rotation.x = rotation.x + 10;
                    break;
                case 16:
                    rotation.x = rotation.x - 10;
                    break;
                default:
                    break;
            }
            el.setAttribute("rotation", rotation)
        });

        mc.on("pinch", (ev) => {
            let scale = { x: ev.scale, y: ev.scale, z: ev.scale }
            el.setAttribute("scale", scale);
        });
    }
});


AFRAME.registerComponent('ortho', {
    init: function () {
        var sceneEl = this.el.sceneEl;
        sceneEl.addEventListener('render-target-loaded', () => {
            this.originalCamera = sceneEl.camera;
            this.cameraParent = sceneEl.camera.parent;
            this.orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1);
            this.cameraParent.add(this.orthoCamera);
            sceneEl.camera = this.orthoCamera;
        });
    },
    remove: function () {
        this.cameraParent.remove(this.orthoCamera);
        sceneEl.camera = this.originalCamera;
    }
});
