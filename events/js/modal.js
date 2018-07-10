$(".cross").hover(function(){
    $(".cross_img").attr("src","asset/cross_hover.png");
}, function(){
    $(".cross_img").attr("src","asset/cross.png");
})

/*$("._event_class").hover(function(){
    $("._event_class").css("overflow","visible");
}, function(){
    $("._event_class").css("overflow","hidden");
})*/

$(".cross").click(function(){
    console.log('running')
    $(".event_container").hide();
})

$("._link").click(function(){
    var event = $(this).attr('id');
    var _event = $('div#'+event);
    $(_event).show();
    $(_event).addClass('animated zoomIn');
    console.log(_event)
})