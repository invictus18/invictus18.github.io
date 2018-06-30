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

var window_pos = 1;

$('#next_arrow').click(function(){
    var mov = window_pos;
    mov=mov+1;
    var _win_id='window' + mov;
    var _win_id2='window' + window_pos;
    var win_id=$('#'+_win_id);
    var win_id2=$('#'+_win_id2);
    console.log(win_id)
    if(!$(win_id).html()==""){
        $(win_id).show();
        $(win_id2).hide();
        window_pos=mov;
    }
})

$('#back_arrow').click(function(){
    var mov = window_pos;
    mov=mov-1;
    var _win_id='window' + mov;
    var _win_id2='window' + window_pos;
    var win_id=$('#'+_win_id);
    var win_id2=$('#'+_win_id2);
    console.log(win_id)
    if(mov > 0){
      $(win_id).show();
      $(win_id2).hide();
      window_pos=mov;
     }
})