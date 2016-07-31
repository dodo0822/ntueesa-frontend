require('./styles/ntueesa.scss');

require('./styles/bootswatch.less');

require('jquery');
require('bootstrap');

var tplHome = require('./templates/links.html');
var tplContact = require('./templates/contact.html');

var apiPath = 'http://54.64.171.58/api';

var Rlite = require('rlite-router');
var r = new Rlite();

r.add('', function() {
	$('.nav li').each(function() {
		$(this).removeClass('active');
	});

	$.ajax(apiPath + '/course', {
		success: function(resp) {
			resp = resp.results;
			for(var i = 0; i < resp.length; ++i) {
				var left = $('<div id="well-left-' + (i+1) + '" class="vertical-align"></div>');
				left.text(resp[i].name);
				$('#well-left').append(left);
				var right = $('<div id="well-right-' + (i+1) + '"></div>');
				for(var j = 0; j < resp[i].subcategories.length; ++j) {
					var subcat = resp[i].subcategories[j];
					var row = $('<div class="row"></div>');
					var title = $('<div class="col-xs-3"></div>');
					title.text(subcat.name);
					var col1 = $('<div class="col-xs-5"></div>');
					var col2 = $('<div class="col-xs-4"></div>');
					for(var k = 0; k < subcat.course.length; k += 2) {
						var link = $('<a href="#"></a>');
						link.text(subcat.course[k]);
						if(k > 0) col1.append('<br>');
						col1.append(link);
					}
					for(var k = 1; k < subcat.course.length; k += 2) {
						var link = $('<a href="#"></a>');
						link.text(subcat.course[k]);
						if(k > 1) col2.append('<br>');
						col2.append(link);
					}
					row.append(title).append(col1).append(col2);
					right.append(row);
				}
				$('#well-right').append(right);
			}

			$('#well-left-1').css('height', $('#well-right-1').height() - 15);
			$('#well-left-2').css('height', $('#well-right-2').height() - 15);

			$(window).resize(function(){
				$('#well-left-1').css('height', $('#well-right-1').height() - 15);
				$('#well-left-2').css('height', $('#well-right-2').height() - 15);
			});
		}
	});

	$('#page').html(tplHome);
});

r.add('contact', function() {
	$('#nav-contact').addClass('active');
	$('#page').html(tplContact);
	$('#eesa-logo').attr('src', require('./favicon.png')).css('width', 200);
});

function processHash() {
	var hash = location.hash || '#';
	r.run(hash.slice(1));
}

window.addEventListener('hashchange', processHash);
processHash();