$(window).scroll(function(){ 
    $(this).scrollTop() < 100 ?
    $('.logo').removeClass('scroll'):
    $('.logo').addClass('scroll');
});