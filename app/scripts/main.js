var colors = ['#ee1c27','#2b003a','#00887c','#8c0049']
var clicks=0 ;

$('.more-content-button').on('click',function(){
  //house-keeping
  if(clicks===6000){
    clicks = -1 ;
  }
  clicks++ ;

  //ajax content bringing

  $.ajax({
  url: "https://api.chucknorris.io/jokes/random"
})
  .done(function( data ) {
    // if ( console && console.log ) {
    //   console.log( "Sample of data:", data.value);
    // }
    $('.text').text(data.value) ;
  });

  //color changing
  var color = colors[clicks%4] ;
  $('.text').css('color',color) ;
  $('.title').css('color',color) ;
  $('.nav-button').css('color',color) ;
  $('.background-color-shifter').css('background',color) ;
}) ;
