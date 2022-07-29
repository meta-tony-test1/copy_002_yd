var h_no;
var h_h
$(".gnb_title li").hover(function(){
    h_no = $(this).index();
    $("#detail .wrap > div").eq(h_no).addClass("on").siblings("div").removeClass("on")
    h_h = $("#detail .wrap > div").eq(h_no).outerHeight(true);
    console.log(h_h);
    $("#detail").stop().animate({"height":h_h},500);
    $(".modal").addClass("on");

},function(){
    $("#detail .wrap > div").siblings("div").removeClass("on")
    $("#detail").stop().animate({"height":0},500);
    $(".modal").removeClass("on");
})
