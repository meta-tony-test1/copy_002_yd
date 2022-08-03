/* header */
var h_no;
var h_h;
var ww = $(window).width();

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


$("header .fnb .side p").click(function(){
    $(this).toggleClass("on");
})

/* 메뉴 & 사이트맵 아이콘 */
$(".head_icon > a").click(function(){
    ww = $(window).width();
    console.log(ww);
    if(ww <= 1030) {
        $(this).attr("href","#")
    }else{
        $(this).attr("href","sitemap.html")
    }
})

$(".head_icon button").click(function(){
    $(this).toggleClass("on");
})
/* 모바일 메뉴 */
$(".head_icon > a").click(function(){
    $("#m_menu").addClass("on");
    $(".m_modal").addClass("on");
})
$(".m_modal").click(function(){
    $("#m_menu").removeClass("on");
    $(".m_modal").removeClass("on");
})
$(".menu_lang p").click(function(){
    $(".menu_lang").toggleClass("on")
})

$(".menu_list h3").click(function(){
    $(this).addClass("blue").siblings("ul").slideDown(500)
        .parent().siblings().children("ul").slideUp(500).siblings("h3").removeClass("blue") ;
})

$(".menu_list p").click(function(){
    $(this).toggleClass("on").siblings("div").slideToggle(500);
})
