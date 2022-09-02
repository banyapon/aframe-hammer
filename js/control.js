var rotate;
var el;

AFRAME.registerComponent('rotate-box', {
    init: function () {
        var myElement = document.getElementById('myElement');
        var mc = new Hammer(myElement);
        mc.on("panleft panright tap press", function (ev) {
            myElement.textContent = ev.type + " gesture detected.";
            console.log(ev.type + " gesture detected.");
            rotate = ev.type;
            console.log("Rotate: " + rotate);
        });
        this.el.addEventListener("click", e => {
            if(rotate == "panleft"){
                this.el.setAttribute("rotation", "-45 0 0")
            }else if(rotate == "panright"){
                this.el.setAttribute("rotation", "45 0 0")
            }
            
        })
    }
});