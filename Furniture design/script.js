$(function(){
    $('.nav_toggle').on('click', function () {
        $('#header').toggleClass('show');
    });
    $('#mask').on('click', function() {
        $('#header').removeClass('show');
    });
    
})
