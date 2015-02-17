jQuery(document).ready(function ($) {
	// ResponsiveMenu
	$('#responsiveMenu>ul').hide();

	$('#triggerMenu').click(function (event) {
		$('#responsiveMenu>ul').stop().slideToggle(500,
			function () {
				//TODO : Corriger le bug du triangle quand on double clique sur MENU
				$('#responsiveMenu>ul').toggleClass('before');
			}
		);
	});
	
	// Submenu for mobile
	$('#responsiveMenu .submenu').parent().find(">a").append('<i class="fa fa-angle-right"></i>'); // if there is a submenu, add a plus icon
	$('#responsiveMenu>ul>li i').click(function (event) {
		$(this).toggleClass('fa-rotate-90');
		$(this).parent().parent().find('ul.submenu').stop().slideToggle();							 
	});

	// end of ResponsiveMenu
	
	// Caculate size of bubbles
	var $bubble = $('a.bubble i');
	$bubble.css({
		'height': $bubble.width(),
		'line-height': $bubble.width() + 'px'
	});

	$(window).resize(function ($bubble) {
		var $bubble = $('a.bubble i');
		$bubble.css({
			'height': $bubble.width(),
			'line-height': $bubble.width() + 'px'
		});
	});
	// End of bubbles
	
	// Forecasts
	var $ensoleillement = $('#meteo-section .ensoleillement');
	var $temperature = $('#meteo-section .temperature');

	$temperature.css({
		'height': $ensoleillement.height(),
		'line-height': $ensoleillement.height() + 'px'
	});

});