$(document).ready(
    $('.bulb').on('click', function () {
            bulb = $(this);

        if(bulb.hasClass('active')) {
            bulb.removeClass('active');
        } else{
            bulb.addClass('active');
            bulb.siblings().removeClass('active');

            if (bulb.attr('id') === 'yellow') {
                setTimeout(function () {
                    $('#red').click();
                }, 2000);
            }
        }
    })
);