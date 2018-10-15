$(document).ready(function() {
    $(".input,.searchTerm").focusin(function() {
        $(this).find("span").animate({ "opacity": "0" }, 200);
    });

    $(".input,.searchTerm").focusout(function() {
        $(this).find("span").animate({ "opacity": "1" }, 300);
    });

    $('.showmenu').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});