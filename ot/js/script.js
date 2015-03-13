jQuery(document).ready(function ($) {
//Maximage2 carousel
	$(function(){
		$('#maximage').maximage({
			cycleOptions: {
				fx:'fade',
				speed: 1000,
				timeout: 5000, // 1s = 1000
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
	});

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
// End of forecasts
// Share-menu
//    <aside class="social-buttons">
//        <section class="share">
//            <a href="#" title="Partager l'article sur les réseaux sociaux"><span><i class="fa fa-share-alt"></i>10</span></a>
//            <div class="share-menu">
//                <h6>Partager sur :</h6>
//                <ul>
//                    <li><i class="fa fa-facebook"></i> Facebook</li>
//                    <li><i class="fa fa-twitter"></i> Twitter</li>
//                </ul>
//            </div>
//        </section>
//        <section class="comment">
//            <a href="#" title="Commenter l'article"><span><i class="fa fa-comments-o"></i>12</span></a>
//        </section>
//    </aside>
    $('.social-button .share-menu').hide();
  $('.social-buttons .share>a').click(function() {
      $(this).parent().find('.share-menu').slideDown();
  });


});