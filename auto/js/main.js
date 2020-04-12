"use strict";

$(function(){
  var section = $('section');
  var un = $('#un');
  var deux = $('#deux');
  var trois = $('#trois');
  var logoDisplay = $('#logo');
  var buttonUp = $('.up');
  var buttonDown = $('.down');
  var index = [0,1,2];

  var voiture = ['Lamborghini','BMW','Porsche'];
  var logo = ['img/logo_lamborghini.png', 'img/logo_bmw.png', 'img/logo_porsche.png'];

  var data = [
    {
      'speed': 315, 'puissance': 520,
      'trainAvant' : 'Triangles tranversaux double',
      'trainArriere' : 'Triangles tranversaux double',
      'freinAvant' : 'Disques ventilés',
      'freinArriere' : 'Disques ventilés'
    },

    {
      'speed': 250, 'puissance': 370,
      'trainAvant' : 'Jambes de suspension à double articulation',
      'trainArriere' : 'Jambes de suspension à double articulation',
      'freinAvant' : 'Disques ventilés',
      'freinArriere' : 'Disques ventilés'
    },

    {
      'speed': 306, 'puissance': 430,
      'trainAvant' : "Mc Pherson (triangles, ressorts séparés) + barre antiroulis",
      'trainArriere' : "essieu multibras, ressorts hélicoïdaux, barre antiroulis, correcteur d'assiette",
      'freinAvant' : 'Disques ventilés',
      'freinArriere' : 'Disques ventilés'
    }
  ];

  function resetMenu() {
    un.text(voiture[index[0]]);
    deux.text(voiture[index[1]]);
    trois.text(voiture[index[2]]);

    logoDisplay.attr("src", logo[index[1]]);
    articlesReset(index[1]);
  }

  function changeMenuUp() {
    for (var i = 0; i < index.length; i++) {
      index[i] +=1;
      if(index[i]>(voiture.length-1)){
        index[i] = 0;
      }
    }
    resetMenu();
  }

  function changeMenuDown() {
    for (var x = 0; x < index.length; x++) {
      index[x] -=1;
      if(index[x]<0){
        index[x] = voiture.length-1;
      }
    }
    resetMenu();
  }

  /** background **/

  function previous(){
    switch ($('main').data('car')) {
      case "porsche":
        $('main').data('car', 'lambo');
        $('main').css("background-image", "url(img/im_lamborghini.png)");
        break;
      case "bmw":
        $('main').data('car', 'porsche');
        $('main').css("background-image", "url(img/im_porshe.png)");
        break;
      default:
        $('main').data('car', 'bmw');
        $('main').css("background-image", "url(img/im_bmw.png)");
        break;
    }
  }

  function next(){
    switch ($('main').data('car')) {
      case "bmw":
        $('main').data('car', 'lambo');
        $('main').css("background-image", "url(img/im_lamborghini.png)");
        break;
      case "lambo":
        $('main').data('car', 'porsche');
        $('main').css("background-image", "url(img/im_porshe.png)");
        break;
      default:
        $('main').data('car', 'bmw');
        $('main').css("background-image", "url(img/im_bmw.png)");
        break;
    }
  }

  // review

  function articlesReset(indexGet) {
    $("#speed").text('Vitess Max : ' + data[indexGet]['speed'] + ' km/h');
    $('#puissance').text('Puissance : ' + data[indexGet]['puissance'] + ' ch');
    $('#trainAvant').text('Train avant : ' + data[indexGet]['trainAvant']);
    $('#trainArriere').text('Train arriére : ' + data[indexGet]['trainArriere']);
    $('#freinAvant').text('Frein avant : ' + data[indexGet]['freinAvant']);
    $('#freinArriere').text('Frein arriére : ' + data[indexGet]['freinArriere']);
  }

  buttonUp.click(changeMenuUp);
  buttonDown.click(changeMenuDown);
  buttonUp.click(previous);
  buttonDown.click(next);

});
