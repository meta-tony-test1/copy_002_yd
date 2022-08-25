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
    $("html").css({"overflow-y":"hidden"});
    $("#m_menu").addClass("on");
    $(".m_modal").addClass("on");
})
$(".m_modal").click(function(){
    $("html").css({"overflow-y":"auto"});
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

/* content */
/* s1_site_map */
$(".v_map .prev").click(function(){
   $(".v_map ul").css({"left":"-20%"}).children("li:last-child").prependTo($(".v_map ul"));
   $(".v_map ul").stop().animate({"left":0},300);
   })
$(".v_map .next").click(function(){
   $(".v_map ul").stop().animate({"left":"-20%"},300,function(){
       $(this).css({"left":"0"}).children("li:first-child").appendTo($(".v_map ul"));
   })
})
/* s1-site map animate*/
var sm_no;
function sm_swing(){
    $(".v_map li").eq(sm_no).find("i").animate({"top":-6},300);
    $(".v_map li").eq(sm_no).find("i").animate({"top":2},300);
    $(".v_map li").eq(sm_no).find("i").animate({"top":-4},300);
    $(".v_map li").eq(sm_no).find("i").animate({"top":0},300);
}

$(".v_map li").hover(function(){
    sm_no = $(this).index();
    sm_swing();
    move = setInterval("sm_swing()",1400);
    },function(){
    $(".v_map li").eq(sm_no).find("i").finish();
    clearInterval(move);
    return false;
    });


/* s1-main_slide*/
var ms_last = $(".main_slide li:last-child").index() + 1;
var ms_no = 1;
var ms_stop = 1;
$(".main_slide .list_no").text(ms_no + " /" + (ms_last));

function back(){
    $(".main_slide li:last-child").prependTo($(".main_slide ul")).css({"opacity":0});
    $(".main_slide li:first-child").finish().animate({"opacity":1},300);
    ms_no--;
    if(ms_no <= 0){ ms_no = 6}
    $(".main_slide .list_no").text(ms_no + " /" + (ms_last));
}

function go(){
        $(".main_slide li:first-child").finish()
        ms_no++;
        if(ms_no >=7){ ms_no = 1}
        $(".main_slide .list_no").text(ms_no + " /" + (ms_last));
        $(".main_slide li:first-child").animate({"opacity":0},300,function(){
        $(this).appendTo($(".main_slide ul")).css({"opacity":1});
        })
    }

$(".main_slide .next").finish().click(function(){
    go();
})

$(".main_slide .prev").click(function(){
    back();
})

var timer = setInterval("go()",3000);
/*stop*/
$(".main_slide").hover(function(){
    clearInterval(timer);
},function(){
    if(ms_stop >= 1){ //play 상대만 적용할 수 있는 변수
    clearInterval(timer); // play의 인터벌 각각 재생 방지
    timer = setInterval("go()",3000);
    }

})

/* Play & Stop 연속 클릭시 재생 충돌 */
        $(".main_slide .stop").click(function(){
            ms_stop = 0;
            clearInterval(timer);
            $(this).removeClass("on");
            $(".main_slide .play").addClass("on");
        })
        $(".main_slide .play").click(function(){
            ms_stop = 1;
            clearInterval(timer);
            timer = setInterval("go()",3000);
            $(this).removeClass("on");
            $(".main_slide .stop").addClass("on");
        })


/* 청사 안내 아이콘 움직임*/
var i_no;
function swing(){
    $(".staff > ul li").eq(i_no).find("i").animate({"top":-6},300);
    $(".staff > ul li").eq(i_no).find("i").animate({"top":2},300);
    $(".staff > ul li").eq(i_no).find("i").animate({"top":-4},300);
    $(".staff > ul li").eq(i_no).find("i").animate({"top":0},300);
}

$(".staff > ul li").hover(function(){
    i_no = $(this).index();
    swing();
    move = setInterval("swing()",1400);
    },function(){
//    여러번 호버시 중복 실행됨.
//    setInterval 진행 중간에 끊어야함.
    $(".staff > ul li").eq(i_no).find("i").finish();
    clearInterval(move);
    /*return false;*/
    });

$(".b_info li").click(function(){
    var info_no = $(this).index();
    $(this).addClass("on").siblings("li").removeClass("on");
    $(".b_info > div").eq(info_no).addClass("on").siblings("div").removeClass("on");
})



/* s2-pop slide*/
var ns_last = $(".notice_slide li:last-child").index() + 1;
var ns_no = 1;
var ns_stop =1;
$(".slide_no b").text(ns_no);

function ns_back(){
    $(".notice_slide li:last-child").prependTo($(".notice_slide ul")).css({"opacity":0});
    $(".notice_slide li:first-child").finish().animate({"opacity":1},300);
    ns_no--;
    if(ns_no <= 0){ ns_no = 12}
    $(".slide_no b").text(ns_no);
}
function ns_go(){
    $(".notice_slide li:first-child").finish()
    ns_no++;
    if(ns_no >=13){ ns_no = 1}
    $(".slide_no b").text(ns_no);
    $(".notice_slide li:first-child").animate({"opacity":0},300,function(){
    $(this).appendTo($(".notice_slide ul")).css({"opacity":1});
    })
}
$(".notice_slide .next").finish().click(function(){
    ns_go();
})

$(".notice_slide .prev").click(function(){
    ns_back();
})

var ns_timer = setInterval("ns_go()",3000);
$(".notice_slide ul").hover(function(){
    clearInterval(ns_timer);
},function(){
    if(ns_stop >= 1){
    ns_timer = setInterval("ns_go()",3000);
    }
})
$(".btn .stop").click(function(){
    ns_stop = 0;
    clearInterval(ns_timer);
    $(this).removeClass("on");
    $(".btn .play").addClass("on");
})
$(".btn .play").click(function(){
    ns_stop = 1;
    ns_timer = setInterval("ns_go()",3000);
    $(this).removeClass("on");
    $(".btn .stop").addClass("on");
})

/* s2-quick slide 하단 아이콘*/
var qs_no;
function qs_swing(){
    $(".notice_app a").eq(qs_no).find("span").animate({"background-position-y":"85%"},300);
    $(".notice_app a").eq(qs_no).find("span").animate({"background-position-y":"105%"},300);
    $(".notice_app a").eq(qs_no).find("span").animate({"background-position-y":"90%"},300);
    $(".notice_app a").eq(qs_no).find("span").animate({"background-position-y":"100%"},300);
    console.log("swing");
}
$(".notice_app a").hover(function(){
    console.log("this");
    qs_no = $(this).index();
    qs_swing();
    qs_move = setInterval("qm_swing()",1400);
    },function(){
    $(".notice_app a").eq(qs_no).find("span").finish();
    clearInterval(qs_move);
    });


/* s2_Quick Menu */
$(".qm_slide .back").click(function(){
    var qm_move = $(".qm_slide li:first-child").width();
   $(".qm_slide ul").css({"left":-qm_move}).children("li:last-child").prependTo($(".qm_slide ul"));
   $(".qm_slide ul").stop().animate({"left":0},300);
   })
$(".qm_slide .next").click(function(){
    var qm_move = $(".qm_slide li:first-child").width();
   $(".qm_slide ul").stop().animate({"left":-qm_move},300,function(){
       $(this).css({"left":"0"}).children("li:first-child").appendTo($(".qm_slide ul"));
   })
})
/* s2-quick silde animate*/
var qm_no;
function qm_swing(){
    $(".qm_slide li").eq(qm_no).find("i").animate({"top":-6},300);
    $(".qm_slide li").eq(qm_no).find("i").animate({"top":2},300);
    $(".qm_slide li").eq(qm_no).find("i").animate({"top":-4},300);
    $(".qm_slide li").eq(qm_no).find("i").animate({"top":0},300);
}
$(".qm_slide li").hover(function(){
    qm_no = $(this).index();
    qm_swing();
    qm_move = setInterval("qm_swing()",1400);
    },function(){
    $(".qm_slide li").eq(qm_no).find("i").finish();
    clearInterval(qm_move);
    return false;
    });

/* 주일 달력 메소드 */
var n;
var today = new Date().getDate();
var CDate = new Date();
var date_no = new Date().getDay(); //날짜 순번; 1번째 일요일
var prevLast = new Date(CDate.getFullYear(), CDate.getMonth(), 0).getDate(); //지난 달의 마지막 날
var thisLast = new Date(CDate.getFullYear(), CDate.getMonth() + 1, 0).getDate(); //이번 달의 마지막 날
for (n = 0; n <= 6; n++) {
    var day_list = today - date_no + n;//n번째 금일 날짜 - 요일 순번 + n번째 li;
    if(day_list <= 0){ var day_list = day_list + prevLast //전월 날짜
    }else if (day_list > thisLast ) {
        var day_list = day_list - thisLast; // 다음달 시작
    }
    $(".date li").eq(n).text(day_list);
}
