"use strict";


// function getPathId(){
//   console.log(this);
//   console.log($(this).attr('title'));
// }
//
// $('path').on('click', getPathId);


function affiche2() {
  // Metropolitan Manila
  console.log($(this).attr('title').toLowerCase());
  var articleUn = $(this).attr('title').toLowerCase();
  switch (articleUn) {
    case 'metropolitan manila':
        $('#manille').slideToggle();
      break;
    case 'palawan':
        $('#palawan').slideToggle();
      break;
    case 'antique':
        $('#boracay').slideToggle();
      break;

  }
}

function hideArticle() {
  console.log($(this).attr('title'));
  var articleUn = $(this).attr('title');
  $('#'+articleUn).hide();
}

$('path').on('click', affiche2);
$('.quitter').on('click', hideArticle);
