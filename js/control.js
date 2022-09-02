
AFRAME.registerComponent('rotate-box', {
    init: function () {
        const el = document.querySelector('a-box');
        var rotate;
        var myElement = document.getElementById('myElement');
        var mc = new Hammer(myElement);
        var value = 0;
        var pos_x = 0;
        mc.on("panleft panright tap press", function (ev) {
            myElement.textContent = ev.type + " gesture detected.";
            rotate = ev.type;
            console.log("Rotate: " + rotate);
            if (rotate == "panleft") {
                console.log("Left")
                value = value - 1
            } else if (rotate == "panright") {
                console.log("Right")
                value = value + 1
            }
            el.setAttribute('rotation', { x: 0, y: (pos_x+value), z: -3 });
        });
    }
});