jQuery(document).ready(function ($) {
//Maximage2 carousel
	$(function(){
		$('#maximage').maximage({
			cycleOptions: {
				fx:'fade',
				speed: 800,
				timeout: 10,
				prev: '#arrow_left',
				next: '#arrow_right'
			},
			onFirstImageLoaded: function(){
				jQuery('#cycle-loader').hide();
				jQuery('#maximage').fadeIn('fast');
			}
		});
	});
	
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
	
	// Adding animation for .submenu for desktop
		function animatedSubmenu() {
			if (window.matchMedia("(min-width: 768px)").matches) {
				$('#responsiveMenu ul li').each(function() {
					$(this).find('.submenu li').each(function(index) {
						//when mouse hover
							$(this).find('a').addClass('transition-delay' + index);
						//when mouse unhover
							var delay = 5; //time between each "a"
							var delay2 = 20 //time between unhover instant and the start of animation
							var timer = (delay*index + delay2)/100; 
							$(this).find('a').css('transition-delay', timer + 's');
					});
				});
			}
		};
		
		animatedSubmenu();
		$(window).resize(function() {
			animatedSubmenu();
		});
	// end
	
	// Method to center the .submenu compared to responsiveMenu for desktop
		function centerSubmenu() {
			if (window.matchMedia("(min-width: 768px)").matches) {
				$('#responsiveMenu ul li').each(function() {
					var x = $(this).find('.submenu li').length;
					//TODO : ajouter la méthode pour centrer également entre min-width: 768px et max-width: 1110px
					$(this).find('.submenu').css('margin-left', ((-230/7)*x)+(545/7) + 'px');
				});
			}
		};
		
		centerSubmenu();
		$(window).resize(function() {
			centerSubmenu();
		});
	// end of center method
	
// end of ResponsiveMenu
	
// Caculate size of bubbles
	function bubblesSize() {
		var $bubble = $('a.bubble i');
		$bubble.css({
			'height': $bubble.width(),
			'line-height': $bubble.width() + 'px'
		});
	};
	
	bubblesSize();
	$(window).resize(function() { 
		bubblesSize()
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