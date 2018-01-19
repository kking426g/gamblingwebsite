//跑馬登設置
var marquee = function () {
    var dom = $("#marquee");
    var stage = $("#marquee .stage");
    var showbox = $("#marquee .stage .showbox");
    var link = $("#marquee .stage .showbox a");
    var marquee_width = 0;
    var SetWidth = 0;
    var bool = true;
    ///init
    if (dom.length < 0 || link.length < 0) {
        return
    };

    link.each(function () {
        SetWidth += $(this).outerWidth(true);
    });

    //set width and clone to 3 items
    showbox.width(SetWidth * 1.1);
    var copytimes = 0;
    if (showbox.outerWidth() > 0) {
        copytimes = Math.floor(stage.outerWidth() / showbox.outerWidth());
    }
    for (var i = 0; i <= copytimes; i++) {
        showbox.eq(0).clone().appendTo(stage);
    };

    //Pause
    stage.hover(function () {
        bool = false;
    }, function () {
        bool = true;
    });
    //Start
    setInterval(function () {
        if (bool) {
            if (marquee_width > SetWidth) {
                $(".showbox").eq(1).clone().appendTo($("#marquee .stage"));
                $(".showbox").eq(0).remove();
                marquee_width = 0;
            } else {
                marquee_width += 1;
                $(".showbox").eq(0).css({
                    "margin-left": "-" + marquee_width * 1.1 + "px"
                });
            }
        }
    }, 22);
}

//執行跑馬燈
$(window).on('load', function () {
    //跑馬燈
    if ($("#marquee").length > 0) { marquee(); };
})


//