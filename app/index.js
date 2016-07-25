require('./styles/ntueesa.scss');

require('./styles/bootswatch.less');

var $ = require('jquery');

$(function() {
	$('#well-left-1').css('height', $('#well-right-1').height() - 15);
	$('#well-left-2').css('height', $('#well-right-2').height() - 15);
});