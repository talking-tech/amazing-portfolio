$(document).ready(function(){
    
    // Swapping Roles In Header
    setInterval(swapRoles,2000);
    var masterroles = ["Code Enthusiast","Coffee Lover","Web Developer"]; 
    var count = 0;
    function swapRoles(){
       $(".roles").fadeOut("slow").text(masterroles[count++ % masterroles.length]).fadeIn("slow");
    };
    
    // Scrolling Navbar
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
        $('nav').toggleClass('navbar-dark', $(this).scrollTop() > 500);
    });
    
  });
  
