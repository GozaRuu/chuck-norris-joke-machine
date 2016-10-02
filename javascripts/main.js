'use strict';

var colors = ['#ee1c27', '#2b003a', '#00887c', '#8c0049', '#27ae60', '#f39c12', '#FB6964', "#472E32", "#77326E"];
var clicks = 0;

$.ready(function () {
  console.log("ready!");
});

$('#about-btn').click(function () {
  $('#about').removeClass('hidden');
  $('#contact').addClass('hidden');
});

$('#contact-btn').click(function () {
  $('#contact').removeClass('hidden');
  $('#about').addClass('hidden');
});

$('.modal').on('blur', function () {
  $('#contact').addClass('hidden');
  $('#about').addClass('hidden');
});

$('.close-about').click(function () {
  $('#about').toggleClass('hidden');
});

$('.close-contact').click(function () {
  $('#contact').toggleClass('hidden');
});

$('.more-content-button').on('click', function () {
  //house-keeping
  if (clicks === 6000) {
    clicks = -1;
  }
  clicks++;

  //ajax content bringing

  $.ajax({
    url: "https://api.chucknorris.io/jokes/random"
  }).done(function (data) {
    // if ( console && console.log ) {
    //   console.log( "Sample of data:", data.value);
    // }
    $('.mid .text').text(data.value);
  }).fail(function () {
    $('.mid .text').text('error sorry :(');
  });

  //color changing
  var color = colors[clicks % colors.length];
  $('.text').css('color', color);
  $('.title').css('color', color);
  $('.nav-button').css('color', color);
  $('.background-color-shifter').css('background', color);
});
//# sourceMappingURL=main.js.map
