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
	$('#responsiveMenu .submenu').parent().find(">a").append('<i class="xs-visible fa fa-angle-right"></i>'); // if there is a submenu, add a plus icon
	$('#responsiveMenu>ul>li i').click(function (event) {
		$(this).toggleClass('fa-rotate-90');
		$(this).parent().parent().find('ul.submenu').stop().slideToggle();							 
	});

	// Fix for ripple-effect on submenu
		// for mobile
			if (window.matchMedia("(max-width: 767px)").matches) {
				$('#responsiveMenu .submenu .sub-item').addClass('ripple--effect');
			}
			$(window).resize(function(event) {
				if (window.matchMedia("(max-width: 767px)").matches) {
					$('#responsiveMenu .submenu .sub-item img').removeClass('ripple--effect');
					$('#responsiveMenu .submenu .sub-item').addClass('ripple--effect');
				}
			});

		//for desktop
			if (window.matchMedia("(min-width: 768px)").matches) {
				$('#responsiveMenu .submenu .sub-item img').addClass('ripple--effect');
			}
			$(window).resize(function(event) {
				if (window.matchMedia("(min-width: 768px)").matches) {
					$('#responsiveMenu .submenu .sub-item').removeClass('ripple--effect')
					$('#responsiveMenu .submenu .sub-item img').addClass('ripple--effect');
				}
			});
	// end of fix
	
	//à mettre en js pour centrer le .submenu
	//.submenu li a {
	//pour 1 item : left: 45px;
	//pour 2 items : left: 10px;
	//pour 3 items : left: -20px;
	//pour 4 items : left: -50px;
	//pour 5 items : left: -88px;
	//}
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