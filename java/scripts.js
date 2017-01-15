$(document).ready(function(){

    $('#topo').hide();

    $(window).scroll(function() {
      if ($(document).scrollTop() > 650 ) {
        $('#topo').fadeIn();
      } else {
        $('#topo').fadeOut();
      }
    });

    $('#topo').click(function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 500, function() {
           $('#topo').stop().animate({}, 500);
        });
    });

});
