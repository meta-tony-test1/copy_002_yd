/* header */
var h_no;
var h_h
$(".gnb_title li").hover(function(){
    h_no = $(this).index();
    $("#detail .wrap > div").eq(h_no).addClass("on").siblings("div").removeClass("on")
    h_h = $("#detail .wrap > div").eq(h_no).outerHeight(true);
    $("#detail").stop().animate({"height":h_h},500);
    $(".modal").addClass("on");

    $(this).addClass("on").children(":after");
    $(this).siblings("li").removeClass("on");
})
$(".gnb").mouseleave(function(){
    $("#detail .wrap > div").siblings("div").removeClass("on")
    $("#detail").stop().css({"height":0});
    $(".modal").removeClass("on");
    $(".gnb_title > li").removeClass("on");
})
/* 반복문 이미지 교체 */
var p_no = $(".part a:last-child").index();
var i;
for(i = 0; i <= p_no; i++){
$(".part .category a").eq(i).children().css({"background-image":"url(images/h"+(i+1)+".png)"});
};
$(".part .category a").hover(function(){
    bp = $(this).index() + 1;
    $(this).children().css({"background-image":"url(images/hb"+bp+".png)"});
},
function(){
    $(this).children().css({"background-image":"url(images/h"+bp+".png)"});
})

$(".head_icon button").click(function(){
    $(this).toggleClass("on");
})
$("header .fnb .side p").click(function(){
    $(this).toggleClass("on");
})
