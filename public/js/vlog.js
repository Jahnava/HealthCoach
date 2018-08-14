$('.item').on('click', function() {
  if( $(this).hasClass('active')) {
    $('.item').removeClass('active')
  } else {
    $('.item').removeClass('active')
    $(this).toggleClass('active')
  }
});
