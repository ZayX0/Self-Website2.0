$(document).ready(function() {
  $('#slides').animate();
  $('#slides').superslides();

// Menu on hover switching
  $('.menu-item-container1').on('mouseenter', function(){
  $(this).find('li').animate({width: '+=50'}, 250);
    $('.first-item').css({'background-color': 'white',
                          'color': 'black'});
    });
  $('.menu-item-container1').on('mouseleave', function(){
    $(this).find('li').animate({width: '148px'}, 500);
    $('.first-item').css({'background-color': 'black',
                          'color': 'white'});
    });

  $('.menu-item-container2').on('mouseenter', function(){
    $(this).find('li').animate({width: '+=50'}, 250);
    $('.second-item').css({'background-color': 'white',
                          'color': 'black'});
      });
    $('.menu-item-container2').on('mouseleave', function(){
      $(this).find('li').animate({width: '130px'}, 500);
      $('.second-item').css({'background-color': 'black',
                            'color': 'white'});
      });

  $('.menu-item-container3').on('mouseenter', function(){
      $(this).find('li').animate({width: '+=50'}, 250);
      $('.third-item').css({'background-color': 'white',
                            'color': 'black'});
      });
  $('.menu-item-container3').on('mouseleave', function(){
        $(this).find('li').animate({width: '110px'}, 500);
        $('.third-item').css({'background-color': 'black',
                              'color': 'white'});
      });
  });
