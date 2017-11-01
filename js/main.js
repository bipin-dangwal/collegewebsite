function fade($ele) {
    $ele.fadeIn(2500).delay(3100).fadeOut(2500, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());