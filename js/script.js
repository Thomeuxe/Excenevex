jQuery(document).ready(function($) {
	$('#nav>ul').hide();

	$('#triggerMenu').click(function(event) {
		$('#nav>ul').stop().slideToggle(500,
			function(){
				$('#nav>ul').toggleClass('before');
			}
		);
	});

	var $bubble = $('a.bubble i');

	$bubble.css({
		'height': $bubble.width(),
		'line-height': $bubble.width()+'px'
	});

	var $ensoleillement = $('#meteo-section .ensoleillement');
	var $temperature = $('#meteo-section .temperature');

	$temperature.css({
		'height': $ensoleillement.height(),
		'line-height': $ensoleillement.height()+'px'
	});

});