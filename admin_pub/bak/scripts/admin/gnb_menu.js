
/* gnb */
$(".gnb > ul> li").mouseover(function(){
    $(".gnb > ul> li").find(".twodepth").stop().slideDown(200);
    $(".gnb").find(".gnb_background").stop().slideDown(200);
});
$(".gnb > ul> li").mouseleave(function(){
    $(".gnb > ul> li").find(".twodepth").stop().slideUp(200);
    $(".gnb").find(".gnb_background").stop().slideUp(200);
});


/* aside */
$(".menuInfo_menu>li").mouseover(function(){
    $(this).find(".menuInfo_2depth").stop().slideDown(200);
});
$(".menuInfo_2depth>li").mouseover(function(){
    $(this).find(".menuInfo_3depth").stop().slideDown(200);
});
/* $(".menuInfo_menu>li").mouseleave(function(){
    $(this).find(".menuInfo_2depth").stop().slideUp(200);
});
$(".menuInfo_2depth>li").mouseleave(function(){
    $(this).find(".menuInfo_3depth").stop().slideUp(200);
}); */