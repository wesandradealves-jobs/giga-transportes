var lastScrollTop = 0;

$( window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $(".tcon-transform").removeClass("tcon-transform"),
        $(".-on").removeClass("-on"),
        $('.header').css('z-index', 2).find('.logo').css('z-index', 'initial'),
        $('.header').find('.navigation').css('z-index', 'initial')   
    }
    lastScrollTop = st;
}); 

$(window).resize(function(){
    $(".tcon-transform").removeClass("tcon-transform"),
    $(".-on").removeClass("-on"),
    $('.header').css('z-index', 2).find('.logo').css('z-index', 'initial'),
    $('.header').find('.navigation').css('z-index', 'initial')   
});

function _mobileNavigation(e) {
    $(e).toggleClass("tcon-transform"),
    $(".navigation-mobile").toggleClass("-on")
    if($(".navigation-mobile").is('.-on')){
        $('.header').css('z-index', 'initial').find('.logo').css('z-index', 2),
        $('.header').find('.navigation').css('z-index', 16)
    }
}