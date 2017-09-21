

$(function(){
    // declaration des variables
    var dark = $('.hov');
    var img = $('.galerie img');
    var content = $('.content');
    var diapo = $('.figure');
    var before = $('#previous');
    var after = $('#next');
    var on;

    before.fadeOut();
    diapo.addClass('img1');
    dark.hide();

    img.mouseenter(function(){
        $(this).next().fadeIn('slow');
        content.addClass('content_hover');
    });
    dark.mouseleave(function(){
      $(this).fadeOut('slow');
      content.removeClass('content_hover');
    });

    function previous(){
      if (diapo.hasClass('img2')) {
        diapo.removeClass('img2');
        diapo.addClass('img1');
        before.fadeOut();
      }
      else if (diapo.hasClass('img3')) {
        diapo.removeClass('img3');
        diapo.addClass('img2');
        after.fadeIn();
      }
    }

    function next(){
      if (diapo.hasClass('img1')) {
        diapo.removeClass('img1');
        diapo.addClass('img2');
        before.fadeIn();
      }
      else if (diapo.hasClass('img2')) {
        diapo.removeClass('img2');
        diapo.addClass('img3');
        after.fadeOut();
      }
      else if (diapo.hasClass('img3')) {
        diapo.removeClass('img3');
        diapo.addClass('img1');
        after.fadeIn();
        before.fadeOut();
      }
    }

    function sildeOn() {
    	if (on == "on") {
    		window.clearInterval(timer);
    		on = "off";
    	}
    	else{
    		on = "on";
    		timer = window.setInterval(next, 6000);
    	}
    }

    sildeOn();

    diapo.mouseenter(sildeOn);
    diapo.mouseleave(sildeOn);
    before.mouseenter(sildeOn);
    before.mouseleave(sildeOn);
    after.mouseenter(sildeOn);
    after.mouseleave(sildeOn);
    before.click(previous);
    after.click(next);

});
