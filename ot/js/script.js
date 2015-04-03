jQuery(document).ready(function ($) {
//Maximage2 carousel

	$('#maximage').maximage({
		cycleOptions: {
			fx:'fade',
			speed: 1000,
			timeout: 10000, // 1s = 1000
			prev: '#arrow_left',
			next: '#arrow_right',
			pause: 1
		},
		onFirstImageLoaded: function(){
			jQuery('#cycle-loader').hide();
			jQuery('#maximage').fadeIn('fast');
		},
		// cssBackgroundSize might be causing choppiness in retina display safari
		// cssBackgroundSize: false <-- ajoute un scroll horizontal donc à voir si c'est vraiment utile...
	});
	
	// To show it is dynamic html text
	jQuery('.in-slide-content').delay(1200).fadeIn();


// ResponsiveMenu
	$('#responsiveMenu>ul').hide();
	if ($("#responsiveMenu>ul>li:first-child").hasClass("current-menu-item"))
		$("#responsiveMenu>ul").addClass("colorFix");
	$('#triggerMenu').click(function (event) {
		$('#responsiveMenu>ul').stop().slideToggle(500,
			function () {
				//TODO : Corriger le bug du triangle quand on double clique sur MENU
				$('#responsiveMenu>ul').toggleClass('before');
			}
		);
	});
	
	// sub-menu for mobile
	$('#responsiveMenu .sub-menu').parent().find(">a").append('<i class="fa fa-angle-right"></i>'); // if there is a sub-menu, add a plus icon
	$('#responsiveMenu>ul>li i').click(function (event) {
		$(this).toggleClass('fa-rotate-90');
		$(this).parent().parent().find('ul.sub-menu').stop().slideToggle();							 
	});

	// Fix for ripple-effect on sub-menu
		// for mobile
			if (window.matchMedia("(max-width: 767px)").matches) {
				$('#responsiveMenu .sub-menu .sub-item').addClass('ripple--effect');
			}
			$(window).resize(function(event) {
				if (window.matchMedia("(max-width: 767px)").matches) {
					$('#responsiveMenu .sub-menu .sub-item img').removeClass('ripple--effect');
					$('#responsiveMenu .sub-menu .sub-item').addClass('ripple--effect');
				}
			});

		//for desktop
			if (window.matchMedia("(min-width: 768px)").matches) {
				$('#responsiveMenu .sub-menu .sub-item img').addClass('ripple--effect');
			}
			$(window).resize(function(event) {
				if (window.matchMedia("(min-width: 768px)").matches) {
					$('#responsiveMenu .sub-menu .sub-item').removeClass('ripple--effect')
					$('#responsiveMenu .sub-menu .sub-item img').addClass('ripple--effect');
				}
			});
	// end of fix
	
	// Adding animation for .sub-menu for desktop
		function animatedSubmenu() {
			if (window.matchMedia("(min-width: 768px)").matches) {
				$('#responsiveMenu ul li').each(function() {
					$(this).find('.sub-menu li').each(function(index) {
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
	
	// Method to center the .sub-menu compared to responsiveMenu for desktop
		function centerSubmenu() {
			if (window.matchMedia("(min-width: 768px)").matches) {
				if (window.matchMedia("(max-width: 1289px)").matches) {
					$('#responsiveMenu ul li').each(function() {
						var x = $(this).find('.sub-menu li').length;
						$(this).find('.sub-menu').css('margin-left', -33*x+53 + 'px');
					});
				}
				else {
					$('#responsiveMenu ul li').each(function() {
						var x = $(this).find('.sub-menu li').length;
						$(this).find('.sub-menu').css('margin-left', ((-230/7)*x)+(545/7) + 'px');
					});
				}
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

// Zoombox
// Forecasts
	var $ensoleillement = $('#meteo-section .ensoleillement');
	var $temperature = $('#meteo-section .temperature');

	$temperature.css({
		'height': $ensoleillement.height(),
		'line-height': $ensoleillement.height() + 'px'
	});
// End of forecasts
// Social menus
    $('.social-buttons .share-menu').hide();
    $('.social-buttons .share>a').click(function (event) {
        $(this).toggleClass('active');
        $(this).parent().find('.share-menu').slideToggle(200,
            function (){
                $(this).toggleClass('before');
            }
        );
    });
//End Social menus
// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});
// email changer
	$("a#my-mail").each(function () {

		var href = $(this).attr('href');

		if (href.indexOf('mailto:') != -1) {

			href = href.replace('|', '@');

			var text = $(this).text().replace('|', '<strong>@</strong>');

			$(this).attr('href', href);

			$(this).html(text);

		}

	});
});