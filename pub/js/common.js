$(function(){
    // menu drop down
    $('nav > ul > li').hover(function(){
    	if(currentMenu($(this).children('a')[0].innerText)) {
	    	$(this).addClass('hover');
	        $(this).find('ul').stop().slideDown(200);
    	}
    }, function(){
    	$(this).removeClass('hover');
        $(this).find('ul').stop().slideUp(200);
        currentMenu('add');
    });
    
    $('nav > ul > li > ul > li').hover(function(){
    	let upperMenu = $(this).parent('ul').parent('li').children('a')[0].innerText;
    	let thisMenu = $(this).children('a')[0].innerText;
    	
    	if(currentMenu(upperMenu, thisMenu)) $(this).addClass('hover');
    }, function(){
    	$(this).removeClass('hover');
    	currentMenu('add');
    });

    // 웹접근성을 위한 focus menu drop down 2022.03.11 추가
    $('nav > ul > li > a').focus(function(){
        $(this).parent().find('ul').stop().slideDown(200);
        if($(this).parent().siblings().focus()){
            $(this).parent().siblings().find('ul').stop().slideUp(200);
        }
    });
    
    // all menu btn
    $('.all_menu_btn').on('click', function(){
        $(this).toggleClass('on');
        $('.all_menu').toggleClass('on');
    });

    // datepicker
    $(".datepicker_day").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+1',
		maxDate: "d",
        buttonImage: "./images/egovframework/com/usr/ico/ico_datepicker.svg",
        buttonImageOnly: true
    });

    $(".datepicker_start").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+1',
        buttonImage: "./images/egovframework/com/usr/ico/ico_datepicker.svg",
        buttonImageOnly: true
    });
    $(".datepicker_end").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+1',
        buttonImage: "./images/egovframework/com/usr/ico/ico_datepicker.svg",
        buttonImageOnly: true
    });
    $('.datepicker_end').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_start").datepicker( "option", "maxDate", selectedDate );
    });
    $('.datepicker_start').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_end").datepicker( "option", "minDate", selectedDate );
    });

    $('.datepicker_month').datepicker({
        displayFormat: 'yy-mm',
        dateFormat: 'yy-mm',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: 'both',
        buttonImage: './images/egovframework/com/usr/ico/ico_datepicker.svg',
        buttonImageOnly: true,
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        closeText: '완료',
        onClose: function(dateText, inst) { 
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
    });
    $('.datepicker_month').focus(function(){
        $('.ui-datepicker-calendar, .ui-datepicker-current').hide();
    });
    
    // 팝업

    let beforeScrollPosition = 0;
    let popupOpenType = false;
    
    // 팝업 뒤 html 스크롤 조정가능여부
    window.addEventListener('scroll', function() {
        const htmlEl = document.getElementsByTagName('html')[0];
      
        if(popupOpenType) {
            htmlEl.scrollTop = beforeScrollPosition;
        } else {
            beforeScrollPosition = htmlEl.scrollTop;
        }
    });

    var modals = document.getElementsByClassName("modal"); // 팝업 div
    var btns = document.getElementsByClassName("modal_btn"); // 팝업 버튼
    var spanes = document.getElementsByClassName("modal_close"); // 팝업창 header닫기버튼
    var spanes2 = document.getElementsByClassName("modal_content_close"); // 팝업창 content닫기버튼
    var modalbg = document.getElementsByClassName("modal_bg"); // 배경
    var funcs = [];

    function Modal(num) {
        return function() {
            
            btns[num].onclick =  function() {
                modals[num].style.display = "block";
                modalbg[num].style.display = "block";
                popupOpenType = true; // html스크롤 조절불가능
            };
    
            spanes[num].onclick = function() {
                modals[num].style.display = "none";
                modalbg[num].style.display = "none";
                popupOpenType = false; // html스크롤 조절가능
            };

            spanes2[num].onclick = function() {
                modals[num].style.display = "none";
                modalbg[num].style.display = "none";
                popupOpenType = false; // html스크롤 조절가능
            };
        };
    }

    // alert 팝업
    $('.modal.alert .modal_close, .modal.alert .modal_content_close').on('click', function(){
        $('.modal.alert').hide();
        $('.modal.alert + .modal_bg').hide();
    });
    
    // 원하는 팝업창 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
    for(var i = 0; i < btns.length; i++) {
        funcs[i] = Modal(i);
    }
    
    // 원하는 팝업창 수만큼 funcs 함수를 호출합니다.
    for(var j = 0; j < btns.length; j++) {
        funcs[j]();
    }

    // help 도움말 
    $('.help_group > .btn_search').on('click', function(){
        $(this).next().toggleClass('on');
    });

    // 장애인차별금지법 슬라이드
    $('.txt_list_group.prohibition ul li .subject a').on('click', function(){
        if($(this).parent().parent().siblings().hasClass('on')){
            $('.txt_list_group.prohibition ul li').removeClass('on');
        }
        $(this).parent().parent().toggleClass('on');
    });

    // 돋보기 영역 외 클릭시 닫기
    $('html').click(function(e){
        if($(e.target).parents('.help_group').length < 1){
            $('.help_content').removeClass('on');
        } 
    });
    
    currentMenu('add');
});
