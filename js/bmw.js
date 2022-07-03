function addZero(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return "" + num;
    }
}
//console.log(addZero(11));


var gap = 30;
var imgTotal = 38;
var imgNum = 1;
$("#view").on("mousedown", function (e) {
    var oldX = e.pageX;
    $("#view").on("mousemove", function (e) {
        var posX = e.pageX;
        //var distance = Math.abs(posX-clickPosX);
        if (posX > gap + oldX) {
            imgNum++;
            if (imgNum > imgTotal) {
                imgNum = 1;
            }
            oldX = posX;
        } else if (posX < oldX - gap) {
            imgNum--;
            if (imgNum < 1) {
                imgNum = imgTotal;
            }
            oldX = posX;
        }
        $(".txt").text(`posX====${posX},clickPosX====${oldX}`);
        $("#view .car").attr({
            src: `./images/${addZero(imgNum)}.jpg`
        });
    });
});
$("#view").on("mouseup", function () {
    $("#view").off("mousemove");
});
$("#view").on("mousewheel", function (e) {
    var amount = e.originalEvent.deltaY;
    if (amount > 0) {
        imgNum++;
        if (imgNum > imgTotal) {
            imgNum = 1;
        }
    } else {
        imgNum--;
        if (imgNum < 1) {
            imgNum = imgTotal;
        }
    }
    $("#view .car").attr({
        src: `./images/${addZero(imgNum)}.jpg`
    });
});

gsap.registerPlugin(InertiaPlugin);

Draggable.create("#drag .knob", {
    type: "x",
    edgeResistance: 1,
    bounds: "#drag .bg",
    inertia: true,
    onDrag: function() {
        //720:this.x = 38:x
        //x=this.x*38/720
        imgNum = Math.floor(this.x*37/720)+1;
        $("#view .car").attr({
            src: `./images/${addZero(imgNum)}.jpg`
        });
    },
    onThrowUpdate:function() {
        imgNum = Math.floor(this.x*37/720)+1;
        $("#view .car").attr({
            src: `./images/${addZero(imgNum)}.jpg`
        });
    }
});