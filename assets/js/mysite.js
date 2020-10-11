$(document).ready(function(){
    
    // Swapping Roles In Header
    setInterval(swapRoles,1000);
    var masterroles = ["Student", "VITian", "Baller","Toastmaster","Reader","Web Developer"]; 
    var count = 0;
    function swapRoles(){
        $('.roles').fadeOut("fast", function(){
          $(this).text(masterroles[count++ % masterroles.length]);
          $(this).fadeIn("fast");
        });
    };
    
    // Scrolling Navbar
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
        $('nav').toggleClass('navbar-dark', $(this).scrollTop() > 500);
    });
    
  });
  
