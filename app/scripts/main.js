var colors = ['#ee1c27','#2b003a','#00887c','#8c0049']
var clicks=0 ;

$('.more-content-button').on('click',function(){
  if(clicks===6000){
    clicks = -1 ;
  }
  clicks++ ;
  var color = colors[clicks%4] ;
  $('.text').css('color',color) ;
  $('.title').css('color',color) ;
  $('.nav-button').css('color',color) ;
  $('.background-color-shifter').css('background',color) ;
}) ;
