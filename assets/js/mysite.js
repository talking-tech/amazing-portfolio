$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
    $('nav').toggleClass('navbar-dark', $(this).scrollTop() > 500);
});