/*mobile menu*/
$('.header__menu-btn').click(function () {
    $('.header__nav-wrap').toggleClass('vis');
    $('body').toggleClass('oh open-menu');
    $('.hamburger').toggleClass('open');
});
/*end mobile menu*/

/*animation*/
if($(window).width() > 1024){
    new WOW().init();
}
/*end animation*/

/*currency toggle*/
$('[data-cur="cur"]').click(function () {
    $('[data-cur="cur"]').toggleClass('dol rub');
    $('[data-cur="cur"]').each(function (index, value){
        $(this).hasClass('dol') ? ($(this).html('$')) : ($(this).html('₽'));
    });
    $('[data-cost="cost"]').each(function (index, value){
        $(this).toggleClass('dol rub');
        let cost = $(this).html();
        if($(this).hasClass('dol')){
            $(this).html(Math.round(cost/90));
        }else{
            $(this).html(Math.round(cost*90));
        }
    });
});
/*end currency toggle*/

/*period toggle*/
$('[data-per="per"]').click(function () {
    $('[data-per="per"]').each(function (index, value){
        $(this).toggleClass('mon day');
        let cost = $(this).siblings('[data-cost="cost"]').html();
        if($(this).hasClass('mon')){
            $(this).html('month');
            $(this).siblings('[data-cost="cost"]').html(Math.round(cost*30));
        }else{
            $(this).html('day');
            $(this).siblings('[data-cost="cost"]').html(Math.round(cost/30));
        }
    });
});
/*end period toggle*/







