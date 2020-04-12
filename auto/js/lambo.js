"use strict";

var lambo = ["Lamborghini", "Motor", "Suspension","img/im_lamborghini.png"];

var article = $('<article>');
article.append("<img src='" + lambo[3] + "'>");
titre = '<h1>' + lambo[0] + '</h1>';
motor = '<p>' + lambo[1] + '</p>';
suspension = '<p>' + lambo[2] + '</p>';
article.append("<div class='info'>" + titre + "</div>");