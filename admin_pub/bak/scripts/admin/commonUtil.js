/**
 * 공통
 */

$(document).ready(function(){
	
	var lnbH;
	var containerW;
	var containerH;
	var contentsH;
	var footerW;

	lnbHeight()
	containerSize()
	//contentsHeight()
	footerWidth()

	/*  메뉴 height  */
	function lnbHeight(){
		lnbH = window.innerHeight - $('#header').height() + 30;
		$('#nav').height(lnbH);
	}

	/*  container size  */
	function containerSize(){
		containerW = window.innerWidth - $('#nav').width() -17;
		$('#container').width(containerW);

		containerH = $('#nav').height(lnbHeight);
		$('#container').width(containerH);
	}

	/*  contents height 
	function contentsHeight(){
		contentsH = window.innerHeight - $('#header').height() - $('.footer').height() - 30;
		$('.contents-wrap').height(contentsH);
	} */

	/*  footer width  */
	function footerWidth(){
		footerW = $('#container').width() - 80;
		$('.footer').width(footerW);
	}
	
	
	
	$(window).resize(function () {
		lnbHeight()
		containerSize()
		//contentsHeight()
		footerWidth()
	});

	

	/*   2depth   */
	$('#nav .depth01-menu li a').click(function(){
		$(this).next('.depth02-menu').slideDown(400);
		$(this).parent().addClass('on');

		$('#nav .depth01-menu li a').not(this).next().slideUp(400);
		$('#nav .depth01-menu li a').not(this).parent().removeClass('on');
		return false;
	});
	
	$('#nav .depth01-menu li a').eq(0).trigger("click");
	
	
	/*   datepicker  */
	$( function() {
		$( "#datepickerFrom" ).datepicker({
		  showOn: "button",
		  buttonImage: "/images/common/ico_calendar.png",
		  buttonImageOnly: true,
		  buttonText: "Select date",
		  dateFormat: 'yy-mm-dd'
		});
		$( "#datepickerTo" ).datepicker({
			showOn: "button",
			buttonImage: "/images/common/ico_calendar.png",
			buttonImageOnly: true,
			buttonText: "Select date",
			dateFormat: 'yy-mm-dd'
		  });
		$( "#datepickerDefault" ).datepicker({
			showOn: "button",
			buttonImage: "/images/common/ico_calendar.png",
			buttonImageOnly: true,
			buttonText: "Select date",
			dateFormat: 'yy-mm-dd'
		  });

	  });
	
	
	/*   팝업 begin  */
	$('.pop-wrap').css({
		"top": (($(window).height()-$('.pop-wrap').outerHeight())/2+$(window).scrollTop())+'px',
		"left": (($(window).width()-$('.pop-wrap').outerWidth())/2+$(window).scrollLeft())+'px'
	});
	/*  팝업 end */
	
	
	
});
		
		










		
			