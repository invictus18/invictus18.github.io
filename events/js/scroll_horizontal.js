console.log("running");
$("#next_arrow").hover(function(){
    $(this).css("background-color","black");
    $('#_next_arrow').attr("src","asset/forward_over.png");
}, function(){
    $(this).css("background-color","white");
    $('#_next_arrow').attr("src","asset/forward.png");
});

$("#back_arrow").hover(function(){
    $(this).css("background-color","black");
    $('#_back_arrow').attr("src","asset/back_over.png");
}, function(){
    $(this).css("background-color","white");
    $('#_back_arrow').attr("src","asset/back.png");
});