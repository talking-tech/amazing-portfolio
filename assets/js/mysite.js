$(document).ready(function(){
    
    // Swapping Roles In Header
    setInterval(swapRoles,2000);
    var masterroles = ["Business Analyst", "Marketing Stratergist", "Team Player", "Web Developer"]; 
    var count = 0;
    function swapRoles(){
        $('.roles').fadeOut("slow", function(){
          $(this).html(masterroles[count++ % masterroles.length]) .fadeIn("slow");
        });
    };
    
    // Scrolling Navbar
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 1300);
        $('nav').toggleClass('navbar-dark', $(this).scrollTop() >1300);
    });
    
  });