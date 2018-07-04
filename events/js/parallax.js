if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    console.log("Mobile Mode")
} else {

console.log('running');
$(window).scroll(function(){
    parallax();
})
function parallax(){
    var scroll = $(window).scrollTop();
    console.log('running parallax func')
    $('._1title').css("top",(0+scroll*(0.5))+'px');
}
    
}