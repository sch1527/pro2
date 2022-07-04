$(function(){
    $('.next').click(function(){
        $('.main_banner ul').animate({marginLeft:-100 + '%'}, 700, function(){
            $('.main_banner ul li').eq(0).appendTo('.main_banner ul')
            $('.main_banner ul').css({marginLeft:0})
        })
    })
    $('.prev').click(function(){
        $('.main_banner ul li').eq(-1).prependTo('.main_banner ul')
        $('.main_banner ul').css({marginLeft: -100 + '%'})
        $('.main_banner ul').animate({marginLeft:0}, 700)
    })
})