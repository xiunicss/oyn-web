$(document).ready(function(){
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); 
	   
		if (scrollTop > 100) { 
			$('#top').addClass('on');
		} else {
			$('#top').removeClass('on');
		}

		if ($(window).width() > 768 && scrollTop > 0) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	};

		stickyNav();
			
	$(window).scroll(function(){
		stickyNav();
		var footerHeight = $('#footer').height();
		var heightFlag = $(document).height() - footerHeight;
		var scrollValue = $(window).scrollTop() + $(window).height();

		console.log('heightFlag', heightFlag)
		console.log('scrollValue', scrollValue)


		if( heightFlag <= scrollValue ){
			$('#top').css({
			'transform' : 'translateY(-150px)',
			'background':'#0A519C'
			})
		}else{
			$('#top').removeAttr('style');
			}
		});

	$(window).resize(function(){
		stickyNav();
	});


	$("#top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$("#visual .vis_slide").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 1500
	});

	$("#header .all_btn").click(function(){
		$(".nav_menu").toggleClass('on');
		$(".bg").toggleClass('on');
		$("body").toggleClass('fixed');
	});
	$(".bg").click(function(){
		$(".nav_menu").removeClass('on');
		$(".bg").removeClass('on');
		$("body").removeClass('fixed');

	});



	AOS.init();
});
