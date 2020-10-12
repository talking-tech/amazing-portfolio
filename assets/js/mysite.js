$(document).ready(function(){
    
    // Swapping Roles In Header
    setInterval(swapRoles,1000);
    var masterroles = ["Designer", "Night Owl","Code Enthusiast", "Coffee Lover","Web Developer"]; 
    var count = 0;
    function swapRoles(){
        $('.roles').fadeOut("fast", function(){
          $(this).html('↓<br> { '+ masterroles[count++ % masterroles.length] +' }') .fadeIn("fast");
        });
    };
    
    // Scrolling Navbar
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
        $('nav').toggleClass('navbar-dark', $(this).scrollTop() >300);
    });
    
  });