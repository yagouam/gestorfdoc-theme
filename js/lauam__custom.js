
(function($) {
    "use strict";

    // Make table tr rows selectable
    $('.lauam__selectable-tr')
        .click(function(event) {
            var checkbox = $(this).find('input[type="checkbox"]');
            checkbox.prop("checked", !checkbox.prop("checked"));

            if (checkbox.prop("checked")) {
                $(this).addClass('bg-dark text-white')
            } else {
                $(this).removeClass('bg-dark text-white')
            }
        });

})(jQuery)