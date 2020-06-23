$(document).ready(function(){
	var slideCount = imagesUrl.length;
	var slideNow = 1;
	var mouse = true;
	if(slideCount > 1){
		for(i = 1; i < slideCount; i++){
			$('.sliderCount').children('div:first-child').append('<div class="sliderCountBtn"></div>');
		}
	}
	$('.sliderCount').find('.sliderCountBtn:first-child').addClass('active');
	$('.preview').mouseenter(function(){
		mouse = false;
	});
	$('.preview').mouseleave(function(){
		mouse = true;
	});
	function slideGo(){
		if(mouse == true){
			if(slideNow >= slideCount){
			    $('.preview').css('background-image', 'url(' + imagesUrl[0] + ')');
		        slideNow = 1;
		    } else {
		        $('.preview').css('background-image', 'url(' + imagesUrl[slideNow] + ')');
		        slideNow++;
		    }
		    $('.sliderCount').find('.sliderCountBtn').removeClass('active');
		    $('.sliderCount').find('.sliderCountBtn:nth-child(' + slideNow + ')').addClass('active');
	    } else {
		    return;
	    }
	};
	setInterval(slideGo, 10000);
	$('.sliderCount').find('.sliderCountBtn').click(function(){
		if($(this).index() + 1 == slideNow){
			return;
		} else {
			$('.preview').css('background-image', 'url(' + imagesUrl[$(this).index()] + ')');
		    slideNow = $(this).index() + 1;
		    $('.sliderCount').find('.sliderCountBtn').removeClass('active');
		    $('.sliderCount').find('.sliderCountBtn:nth-child(' + slideNow + ')').addClass('active');
		}
	});

	$('.category > div').click(function(){
		$(this).toggleClass('active');
		$(this).next('ul').toggle();
	});

	setInterval(function(){
		if($(window).width() >= 1200){
		$('.advantages > div > div').height($('.advantages > div').height());
	    }
	}, 500);
	
	$(window).resize(function(){
		if($(window).width() >= 1200){
		$('.advantages > div > div').css('height', 'max-content');
		$('.advantages > div').css('height', 'max-content');
		$('.advantages > div > div').height($('.advantages > div').height());
		}
	});
	$('.questions label').click(function(){
		if($('#agree').prop('checked')){
			$('.questions button').attr('disabled', true);
		} else {
			$('.questions button').removeAttr('disabled');

		}
	});

	var slideCount2 = sliderInfo.length;
	var slideNow2 = 1;
	var mouse2 = true;
	if(slideCount2 > 1){
		for(i = 1; i < slideCount2; i++){
			$('.aboutUsSliderCount').append('<div></div>');
		}
	}
	$('.aboutUsSliderCount').find('div:first-child').addClass('active');
	$('.aboutUs').mouseenter(function(){
		mouse2 = false;
	});
	$('.aboutUs').mouseleave(function(){
		mouse2 = true;
	});
	function slideGo2(){
		if(mouse2 == true){
			if(slideNow2 >= slideCount2){
		        slideNow2 = 1;
			    $('.aboutUsSlideImg').css('background-image', 'url(img/aboutUsSlide' + slideNow2 + '.png)');
			    $('.aboutUsSlideInfo div').html(sliderInfo[(slideNow2 - 1)][1]);
			    $('.aboutUsSlideInfo p').html(sliderInfo[(slideNow2 - 1)][2]);
		    } else {
		        slideNow2++;
		        $('.aboutUsSlideImg').css('background-image', 'url(img/aboutUsSlide' + slideNow2 + '.png)');
		        $('.aboutUsSlideInfo div').html(sliderInfo[(slideNow2 - 1)][1]);
			    $('.aboutUsSlideInfo p').html(sliderInfo[(slideNow2 - 1)][2]);
		    }
		    $('.aboutUsSliderCount').find('div').removeClass('active');
		    $('.aboutUsSliderCount').find('div:nth-child(' + slideNow2 + ')').addClass('active');
	    } else {
		    return;
	    }
	};
	setInterval(slideGo2, 10000);
	$('.aboutUsSliderCount').find('div').click(function(){
		if($(this).index() + 1 == slideNow2){
			return;
		} else {
		    slideNow2 = $(this).index() + 1;
		    $('.aboutUsSlideImg').css('background-image', 'url(img/aboutUsSlide' + slideNow2 + '.png)');
		    $('.aboutUsSlideInfo div').html(sliderInfo[(slideNow2 - 1)][1]);
			$('.aboutUsSlideInfo p').html(sliderInfo[(slideNow2 - 1)][2]);
		    $('.aboutUsSliderCount').find('div').removeClass('active');
		    $('.aboutUsSliderCount').find('div:nth-child(' + slideNow2 + ')').addClass('active');
		}
	});
	if($(document).scrollTop() > 0){
		$('header').addClass('scrollTop');
		$('.navLinksBig').slideUp(200);
		$('.productMenuBig').slideUp(200);
	} else {
		$('header').removeClass('scrollTop');
		$('.productMenuBig').slideDown(200);
		$('.navLinksBig').slideDown(200);
	}
	$(document).scroll(function(){
		if($(document).scrollTop() > 0){
		    $('.navLinksBig').slideUp(200);
		    $('.productMenuBig').slideUp(200);
			$('header').addClass('scrollTop');
		} else {
		    $('.navLinksBig').slideDown(200);
		    $('.productMenuBig').slideDown(200);
			$('header').removeClass('scrollTop');
		}
	});
});