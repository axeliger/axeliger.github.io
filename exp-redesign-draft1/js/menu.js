$(function() {
  
    function toggleNav() {
        if ($('#site-wrapper').hasClass('show-nav')) {
            $('#site-wrapper').removeClass('show-nav');
            $('#overlay').removeClass('dark-overlay');
        } else {
            $('#site-wrapper').addClass('show-nav');
            $('#overlay').addClass('dark-overlay');
        }
    }

    $('.toggle-nav-btn').click(function() {
        toggleNav();
    });

    $('#overlay').click(function() {
        toggleNav();
    });
})
