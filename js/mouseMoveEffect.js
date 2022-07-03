$("#view").on("mousemove",function(e){
    var posX = $(window).width()-e.pageX;
    gsap.to("#view .up",{
        width:posX,
        duration:1,
        ease:"power3"
    })
});
