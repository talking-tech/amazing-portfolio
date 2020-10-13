$(document).ready(function(){
    
    // Swapping Roles In Header
    setInterval(swapRoles,1000);
    var masterroles = ["Business Analyst", "Marketing Stratergist", "Team Player", "Web Developer"]; 
    var count = 0;
    function swapRoles(){
        $('.roles').fadeOut("fast", function(){
          $(this).html('↓<br> { '+ masterroles[count++ % masterroles.length] +' }') .fadeIn("fast");
        });
    };
    
    // Scrolling Navbar
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 1300);
        $('nav').toggleClass('navbar-dark', $(this).scrollTop() >1300);
    });
    
  });