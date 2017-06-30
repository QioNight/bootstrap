$(document).ready(function() {
    //滚动消息
    var oUlClone = $('.message>ul>li').clone();
    var w = ($('.message>ul>li').length) * ($('.message>ul>li').width() + 20);
    $('.message>ul').append(oUlClone).width(($('.message>ul>li').length) * ($('.message>ul>li').width() + 20));
    (function fn() {
        $('.message>ul').animate({"left" : $('.message>ul').position().left - 1}, 10, 'swing', function() {
            if($('.message>ul').position().left <= (-w)) {
                $('.message>ul').css("left", "0px");
                fn();
            }else {
                fn();
            }
        });
    })();

    //logo更换
    $(window).scroll(function(event){
        var winPos = $(window).scrollTop();
        if(winPos >= 10) {
            $('.navbar').removeClass('navbar-inverse').addClass('navbar-default');
            $('.navbar-header').children('a').eq(0).addClass('collapse');
            $('.navbar-header').children('a').eq(1).removeClass('collapse');
        }else {
            $('.navbar').removeClass('navbar-default').addClass('navbar-inverse');
            $('.navbar-header').children('a').eq(1).addClass('collapse');
            $('.navbar-header').children('a').eq(0).removeClass('collapse');
        }
    });

    //红人榜
    for(var i=1; i<19; i++) {
        var oImg = document.createElement('img');
        oImg.src = 'img/model/xinrui' + i + '.jpg';
        var oSpan1 = $('<p></p>').html('模特ID/' + Math.floor(Math.random()*10000 + 1000) + '<br>' + '热值度/' + Math.floor(Math.random()*1000 + 400) + ' °C');
        $('#xinrui').append($('<li></li>').append(oImg).append(oSpan1));
    }

    //超模榜
    for(var i=1; i<13; i++) {
        var oImg = document.createElement('img');
        oImg.src = 'img/model/chaomo' + i + '.jpg';
        var oSpan1 = $('<p></p>').html('模特ID/' + Math.floor(Math.random()*300 + 100) + '<br>' + '热值度/' + Math.floor(Math.random()*1000 + 400) + ' °C');
        $('#chaomo').append($('<li></li>').append(oImg).append(oSpan1));
    }
    
    //车模
    for(var i=1; i<13; i++) {
        var oImg = document.createElement('img');
        oImg.src = 'img/model/chemo' + i + '.jpg';
        var oSpan1 = $('<p></p>').html('模特ID/' + Math.floor(Math.random()*300 + 100) + '<br>' + '热值度/' + Math.floor(Math.random()*1000 + 400) + ' °C');
        $('#chemo').append($('<li></li>').append(oImg).append(oSpan1));
    }
});
