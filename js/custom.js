$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});


$(function(){
	$('.menu_flutuante ul li').click(function(){
		var alvo = $(this).data('href').split('#').pop();
		$('html, body').animate({scrollTop: $('#'+alvo).offset().top }, 300);
		return false;
	});


	$(window).bind('scroll', function(e) {
		parallaxScroll();
	});
	function parallaxScroll() {
		var width  = screen.width;
		var height = screen.height;
		var res = Math.round((width+height)/2);
		var res = Math.round(res);
		var scrolledY = $(window).scrollTop();


		//paralaxxHome
		if (scrolledY >= 300) {
			$('.menu_flutuante').css('position', 'fixed');
			$('.menu_flutuante').css('top', '11px');
		}else{
			$('.menu_flutuante').css('position', 'absolute');
			$('.menu_flutuante').css('top', '300px');
		}

	}
});
// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

/*Slider*/
$(document).ready(function(){
    
	var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
})

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});
/*fim slider*/
/*tabs*/

/*fim tabs*