$(function() {
    $('.nav_toggle').on('click', function () {
        $('#header').toggleClass('show');
    });
});

$(function() {
  $('#nav a').on('click', function () {
      $('#header').toggleClass('show');
  });
});

$(function() {
  $('.left-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時//
      $(this).addClass('Left-SlideIn');
    } else {
    //表示領域から出た時//
      $(this).removeClass('Left-SlideIn');
    }
    });
});

$(function() {
    $('.right-wrapper').on('inview', function(event, isInView) {
      if (isInView) {
      //表示領域に入った時//
        $(this).addClass('Right-SlideIn');
      } else {
      //表示領域から出た時//
        $(this).removeClass('Right-SlideIn');
      }  
    });
});

$(function() {
    $('.voice-wrapper').on('inview', function(event, isInView) {
      if (isInView) {
      //表示領域に入った時//
        $(this).addClass('voice-inview');
      } else {
      //表示領域から出た時//
        $(this).removeClass('voice-inview');
      }
      });
  });
