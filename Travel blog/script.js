$(function() {
    $('#open-btn').click(function(){

        $('#open-btn').hide();
        $('#close-btn').show();

        $('.header-menus nav').slideDown();
    });

    $('#close-btn').click(function(){

        $('#close-btn').hide();
        $('#open-btn').show();

        $('.header-menus nav').slideUp();
    });
});
