require('./styles/ntueesa.scss');

require('./styles/bootswatch.less');

require('jquery');
require('bootstrap');

var tplHome = require('./templates/links.html');
var tplContact = require('./templates/contact.html');

//var dataCourses = require('./data/courses.json');

var Rlite = require('rlite-router');
var r = new Rlite();

r.add('', function() {
	$('.nav li').each(function() {
		$(this).removeClass('active');
	});

	$('#page').html(tplHome);
	$('#well-left-1').css('height', $('#well-right-1').height() - 15);
	$('#well-left-2').css('height', $('#well-right-2').height() - 15);
	$('#well-left-3').css('height', $('#well-right-3').height() - 15);

	$(window).resize(function(){
		$('#well-left-1').css('height', $('#well-right-1').height() - 15);
		$('#well-left-2').css('height', $('#well-right-2').height() - 15);
		$('#well-left-3').css('height', $('#well-right-3').height() - 15);
	});
});

r.add('contact', function() {
	$('#nav-contact').addClass('active');
	$('#page').html(tplContact);
});

function processHash() {
	var hash = location.hash || '#';
	r.run(hash.slice(1));
}

window.addEventListener('hashchange', processHash);
processHash();