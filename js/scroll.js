$("#scr").hover(function(){
    $(this).css("background-color","black");
    $('#scr_img').attr("src","asset/scroll_over.png");
}, function(){
    $(this).css("background-color","white");
    $('#scr_img').attr("src","asset/scroll.png");
});

$('#scr').click(function(){
    $('.container').show();
    $(window).scrollTo(".container",1500, {
        onAfter: function(){
            requestAnimationFrame(function(){
                $('.container').css("visibility","visible");
                $('.container').addClass('animated slideInLeft');
            })
        }
    })
});
   


