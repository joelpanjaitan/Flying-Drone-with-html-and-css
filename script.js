
$('#background').mousemove(function(e){
    var moveX = (e.pageX* -1/2) + 450;
    var moveY = (e.pageY* -1/3) + 150;
    // $("#drone-box").css({
    //     'transform' : 'translate3d('+moveX+'px, '+moveY+'px, 0)'
    // });
});

$(document).ready(function() {
    $(this).keydown(function(e) {
        console.log(e.key)
        var element = $('#drone-box');
        // var position = element.getBoundingClientRect();
        let height = $(window).height();
        let width = $(window).width();
        var elementTop = element.offset().top;
        var elementBottom = (height - (element.offset().top + element.outerHeight()));
        var elementLeft = element.offset().left;
        var elementRight = (width - (element.offset().left + element.outerWidth()));
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        console.log(elementTop,elementBottom)
        // console.log(height,width)
        // if($("#drone-box").position().left < 0 ) 
        // {return;}
        switch(e.key){
            case "ArrowLeft":
               if( elementLeft < (0 + 90) ){
                   console.log("out of view")
               } else {
                   $( "#drone-box" ).animate({ "left": "-=105px" }, 10 );
               }
            break
            case "ArrowRight":
                if(elementRight<(0 + 112)){
                    console.log("out of view")
                }else {
                    $( "#drone-box" ).animate({ "left": "+=105px" }, 10 );
                }
            break
            case "ArrowUp":
                if(elementTop < (0 + 99)){
                    console.log("out of view")
                } else {
                    $( "#drone-box" ).animate({ "top": "-=105px" }, 10 );
                }
            break
            case "ArrowDown":
                if (elementBottom < (0 + 112)){
                    console.log("out of view")
                } else {
                    $( "#drone-box" ).animate({ "top": "+=105px" }, 10 );
                }
            break
        }
    });

    $(this).keyup(function(e) {
        if(e.keyCode == 18) { alt_shifter = false; $('.access_key').css({ textDecoration: 'none' }); }
    });
});