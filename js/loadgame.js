var pageindex = 0; //預設load近來為第0頁
var pagecount = 8; //一頁8筆
var gameplatformid = '';


$(function () {
    window.onscroll = yHandler;
    if ($('#gamemenu').length > 0){
        // $("body").scroll(function () {
        //     //卷軸到底時 mobile < 1300 desktop < 200
        //     if ($('#gamemenu').height() - $("html").height() + $("header").height() + $('#gamemenu').offset().top <= 65) {
        //         loading();
        //     }
        // });
    }

    //首頁-左側menu 遊戲平台搜尋
    $('#game_menu button').on('click', function () {
        gameplatformid = $(this).data('gameplatformid');
        //搜尋都從第0頁開始
        pageindex = 0;
        load(pageindex, pagecount, gameplatformid);

        $("#game_menu span").css('display', 'none');
        $(this).find("span").css('display', 'block');
        $('#game_menu button').removeClass("on");
        $(this).addClass("on");
    });
})

function yHandler(){
    var gamemenu = $('#gamemenu');
    var contentHeight = gamemenu.offsetHeight;
    var yOffset = window.pageYOffset;
    var y = yOffset + window.innerHeight;
    if(y >= contentHeight){
        loading();
    }
}

function loading() {
    //每load下一頁 pageindex＋１
    pageindex = pageindex + 1;
    //載入
    // load(pageindex, pagecount, gameplatformid);

    // jInfo('Loading...', 600);
}

function load(pageindex, pagecount, gameplatformid) {

    var next_page_data = {
        pageindex: pageindex,
        pagecount: pagecount
    };

    //搜尋遊戲平台
    if (gameplatformid != '') {
        next_page_data.gameplatformid = gameplatformid;
    }

    $.ajax({
        method: 'POST',
        url: "/Ajax_game/get_GameListData",
        dataType: "HTML",
        data: next_page_data,
        success: function (data) {

            //若是搜尋過來，則清掉原本畫面上資料
            if (typeof(next_page_data.gameplatformid) != "undefined" && next_page_data.pageindex == 0) {
                $('#gamemenu div').remove();
            }

            if (data.length > 0) {
                $('#gamemenu').append(data);
            }
        }
    });
}

function jInfo(str, sec) {
    sec = sec || 600;
    if ($("body.lock").length >= 1) {
        return
    }
    ;
    $("body").addClass("lock");
    $("#load_title").text(str);
    //自动关闭
    setTimeout(function () {
        init();
    }, sec)
    return;
}

function init() {
    $("body").removeClass('lock');
}