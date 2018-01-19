function setSize() {
    //定義主框架尺寸 然後畫出頁面
    var wh = window.innerHeight;
    var ww = window.innerWidth;
    //卡片數量
    if(ww > 1300){
        pagecount = 12;
    } else {
        pagecount = 8;
    }
}

$(function () {
    setSize(); 
    $(window).resize(function(){
        setSize(); 
        var h = $("#menu_right").css('height');
        // $("#menu_left").css('height', h);
    })
});



