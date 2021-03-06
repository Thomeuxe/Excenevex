jQuery(document).ready(function($) {
    $('a.zoombox').zoombox();

    //Multiselect box
    $('.multiselect .selectBox').click(function() {
        var checkboxes = $('#checkboxes');
        checkboxes.stop().slideToggle('fast');
    });

    //rating-stars
    $('#stars li').mouseover(function(event) {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    });
    $('#stars li').mouseleave(function(event) {
        $(this).parent().children('li.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });

    /* 2. Action to perform on click */
    $('#stars li').click(function(event) {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "Thanks! You rated this " + ratingValue + " stars.";
        } else {
            msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
        }
        responseMessage(msg);

    });

});

function responseMessage(msg) {
    // $('.success-box').slideDown();
    // $('.success-box div.text-message').html("<span>" + msg + "</span>");
    window.alert(msg);
}