/*mobile header btns*/
$('.header__menu-btn').click(function () {
    $('.header__nav-wrap').toggleClass('vis');
    $('body').toggleClass('oh open-menu');
    $('.hamburger').toggleClass('open');
    $('.header__tel').removeClass('vis');
});
$('.header__nav > .parent > button').click(function () {
    $(this).parent().hasClass('vis') ? $(this).parent().removeClass('vis') : $(this).parent().addClass('vis');
    $(this).parent().find('.parent').removeClass('vis');
});
$('.header__nav .parent ul li.parent button').click(function () {
    $(this).parent().hasClass('vis') ? $(this).parent().removeClass('vis') : $(this).parent().addClass('vis');
});
$('.header__tel-btn').click(function () {
    $('.header__tel').toggleClass('vis');
});
/*end mobile header btns*/

/*animation on scroll*/
if($('.wow').length){
    new WOW().init();
}
/*end animation on scroll*/

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








