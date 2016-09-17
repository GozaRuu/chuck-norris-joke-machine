var colors = ['#ee1c27','#2b003a','#08391b']
var clicks=0 ;

$('.more-content-button').on('click',function(){
  clicks++ ;
  var color = colors[clicks%3] ;
  $('.color-shifter').css('color',color) ;
  $('.background-color-shifter').css('background',color) ;
}) ;
