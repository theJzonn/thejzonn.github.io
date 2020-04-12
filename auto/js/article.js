"use strict";

var articles = $('article');


function articleClicked() {
	articles.toggle();
	$(this).fadeToggle(1000).toggleClass('grand');
	$(this).find('.detail').slideToggle();
}

articles.on('click', articleClicked);