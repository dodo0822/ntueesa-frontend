require('./styles/ntueesa.scss');

require('./styles/bootswatch.less');

var $ = require('jquery');

$(function() {
	$('.well-left-1').css('height', $('.well-right-1').css('height'));
});