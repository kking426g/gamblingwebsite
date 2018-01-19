
$(function () {
    $("#my_record_list").on('click', function(e){
        e.preventDefault(); 
        location.href = "record_list.html";
    }) 

    $(".icon-massage").on('click', function(e){
        e.preventDefault();
        console.log('123')  
        location.href = "message_list.html";
    })
    
    $('#alert').on('shown.bs.modal', function() {
        $('#myInput').focus()
    })

    //手機banner顯示
    if( window.innerWidth > window.innerHeight && window.innerWidth < 768){
        $('.img_box').addClass('shrink');
        $('#record_menu_s, #left_menu, #banner_s, .gameitem, #terms_condition, #bg_obj1, #bg_obj2, #bg_obj3, .language, .label_text, #login_info').addClass('landscape');
    }else{
        $('#record_menu_s, #left_menu, #banner_s, #terms_condition, #bg_obj1, #bg_obj2, #bg_obj3, .language, .label_text, #login_info').removeClass('landscape');
        $('.img_box').removeClass('shrink');
    }

    window.addEventListener("orientationchange", function() {
            if (window.orientation == 90 || window.orientation == -90) {
                $('.img_box').addClass('shrink');
                $('#load_title').removeClass('desk');
                $('#record_menu_s, #left_menu, #banner_s, .gameitem, #terms_condition, #bg_obj1, #bg_obj2, #bg_obj3, #load_title, .language, .label_text, #login_info').addClass('landscape');
            } else{

                $('#record_menu_s, #left_menu, #banner_s, .gameitem, #terms_condition, #bg_obj1, #bg_obj2, #bg_obj3,.language, .label_text, #login_info').removeClass('landscape');
                $('#record_table_right_s').css('display','none');
                $('.img_box').removeClass('shrink');
                $('#load_title').addClass('desk');
            }
    }, false);

    var scrolled = 0;//滑動位置

    //讀信件
    $(".read_btn").click(function(){
        var this_td = $(this).parent();
        var this_tr = this_td.parent();
        var s = this_tr.next();
        if (s.css('display') != 'table-row') {
            s.css('display','table-row');
            this_tr.addClass('yellow');
            $(this).removeClass("plus_btn").addClass("minus_btn");
        } else {
            s.css('display','none');
            $(this).removeClass("minus_btn").addClass("plus_btn");
            this_tr.removeClass('yellow');
        }
    })

    //左邊選單按鈕
    $("button#menu").click(function(e){
        e.preventDefault();
        $('.mask1').css('display', 'block');
        $(".page").toggleClass("stop_scrolling");
        $("#left_menu").removeClass("closemenu").toggleClass("openmenu");       
    })

    //header menu
    var span = $("#menu").find('span');
    $("#menu").hover(function(){   
        span.removeClass("icon-gameslobby_menu");
        span.addClass("icon-gameslobby_menu_on");
    }, 
    function(){ 
        span.removeClass("icon-gameslobby_menu_on"); 
        span.addClass("icon-gameslobby_menu");      
    })

    //關閉提示窗
    $(".popout_xx").click(function(){
        $(".pop_up").css('display', 'none');
    })

    //2016-06-22 z change  the language click event
    //and need change css;
    $(".language li").on("click",function() {
        $(".language").toggleClass('hover');
    });
    $(".language li").on("click",function() {
        $(".language li").removeClass("visit");
        $(this).addClass('visit');
    });
 
    var dropdown = 0;
    $("#dropdown").click(function(){
        $("#record_menu_s").toggle(function(){
            dropdown ++;
            if(dropdown%2 != 0){
                $(".arrow").removeClass("arrow-down").addClass("arrow-up");
                $("#dropdown").css('border-top', '1px solid #fff');
            } else {
                $(".arrow").removeClass("arrow-up").addClass("arrow-down");
                $("#dropdown").css('border-top', 'none');
            }  
        });
    });

    $(".icon-close").on('click', function(e){
        e.preventDefault();
        $("#left_menu").toggleClass("openmenu").toggleClass("closemenu");
        $('.mask1').css('display', 'none');
        $(".page").toggleClass("stop_scrolling");
    })

});

$(window).on('load', function () {
    timedCount();
})

//時間顯示
function timedCount(){
    var Today=new Date();
    var zone = '';
    if(Today.getTimezoneOffset()/-60 > 0){
        zone = '+' + Today.getTimezoneOffset()/-60;
    } else {
        zone = Today.getTimezoneOffset()/-60;
    }
    $('.datetime').empty().append('GMT'+ zone + " " + Today.getFullYear() + '-' + (Today.getMonth()+1) + '-' + Today.getDate()+ ' ' + Today.getHours()+ ':' + Today.getMinutes() + ':' + Today.getSeconds());
    t = setTimeout("timedCount()",1000);
}