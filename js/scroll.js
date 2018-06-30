console.log('bounce')
$("#scr").hover(function(){
    $(this).css("background-color","black");
    $('#scr_img').attr("src","asset/scroll_over.png");
}, function(){
    $(this).css("background-color","white");
    $('#scr_img').attr("src","asset/scroll.png");
});

$('#scr').click(function(){
    $(window).scrollTo(".container", {
        onAfter: function(){
            requestAnimationFrame(function(){
                $('.anim').addClass('.bounceIn');
            })
        }
    }
)});