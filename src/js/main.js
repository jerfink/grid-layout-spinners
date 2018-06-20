
$(function() {
    $('.box').hide();
    $('.box').each(function(i) {
        $(this).delay(2000 * i).fadeIn(500);
    });
});
