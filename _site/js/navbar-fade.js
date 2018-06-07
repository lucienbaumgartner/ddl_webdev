
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $("#menu").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 300) {
                $('#menu').fadeIn();
            } else {
                $('#menu').fadeOut();
            }
        });
    });

});
  }(jQuery));
