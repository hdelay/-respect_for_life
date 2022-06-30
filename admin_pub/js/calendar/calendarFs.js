

// 달력 전역변수
var setDate;
var vltList = new Array();
var vltDay = new Array();

function drawCalendar(setDate) {
    var setDateYear = setDate.getFullYear();
    var setDateMonth = setDate.getMonth();
    var setDateDate = setDate.getDate();

    // 이번달 기준으로 지난 달의 마지막날
    var prevDate = new Date(setDateYear, setDateMonth, 0);
    var prevDateDate = prevDate.getDate(); // 일
    var prevDateDay = prevDate.getDay(); // 요일

    // 다음 달 기준으로 지난 달(=이번달)의 마지막날
    var nextDate = new Date(setDateYear, (setDateMonth + 1), 0);
    var nextDateDate = nextDate.getDate();
    var nextDateDay = nextDate.getDay();

    // 현재 월 표기
    $('.year-month').text(setDateYear + '.' + (setDateMonth + 1));

    // div에 html생성
    calendar = document.querySelector('.dates');
    var html = '';
    
    // 지난달
    if(prevDateDay < 6){
    	for (var i=(prevDateDate-prevDateDay); i<(prevDateDate+1); i++) {
        	html += '<div class="day disable">' + i + '</div>';
        }
    }
    
    // 이번달
    for (var i=1; i<(nextDateDate+1); i++) {
    	html += '<div class="day able">' + i + '<br/><br/>';
    	/* 봉사자 수 보여지는 곳 ->*/
    	if(vltList[i-1] != undefined && vltList[i-1] != null){
    		html += '<a href="#" onclick="console.log(\''+vltDay[i-1]+'\'); return false;">봉사자수: '+vltList[i-1]+"명</a>";
    	}
    	/*<- */
    	html += '</div>';
    }
    
    // 다음달
    for (var i=1; i<(7 - nextDateDay); i++) {        
    	html += '<div class="day disable">' + i + '</div>';
    }
    
    // HTML 적용
    calendar.innerHTML = html;

    // 오늘 날짜 표기
    var today = new Date(); // 로컬 기준
    if (today.getFullYear() ==  setDateYear && today.getMonth() == setDateMonth) {
        var date = today.getDate();
        var happyToday = document.querySelectorAll('.dates .able');
        happyToday[date-1].classList.add('today');
    }
}

// 검색
function setDataCalendar(type, date){
	var setYear, setMonth;
	if(type == 'btn'){
		setYear = date.year;
		setMonth = date.month;
		setDate = new Date(setYear, setMonth, 1);
	} else {
		setYear = $("#searchYear").val();
		setMonth = $("#searchMonth").val();
		setDate = new Date(setYear, (setMonth-1), 1);
	}
	
	// DB조회에 필요
	var startDay = setDate.getFullYear()+("0" + (1 + setDate.getMonth())).slice(-2)+'01';
	var endDate = new Date(setDate.getFullYear(), (setDate.getMonth() + 1), 0);
	var endDay = endDate.getFullYear()+("0" + (1 + endDate.getMonth())).slice(-2)+endDate.getDate();
	
	// Ajax 호출
	var url = "/admin/declareManage/calendarTest.ajax";
	var param = {
		"startDay" : startDay
		, "endDay" : endDay
	};
	fn_ajax(url, param, function(data){
		// 1. 배열 빈값으로 초기화
		vltList = [];
		// 2. 봉사자수 배열에 세팅
		var rstList =data.list;
		var rstLength = rstList.length;
		// 반드시 1일~31일 순서대로, 0명이어도 값을 가져와야 함
		for(var i=0; i<rstLength; i++){
			vltList[i] = rstList[i].count;
			vltDay[i] = rstList[i].day;
		}

		drawCalendar(setDate);
	});
}


$(function(){
	setDataCalendar();
	
	// 이전달
    $('.go-prev').on('click', function() {
    	var date = {"year": setDate.getFullYear()
    			, "month": (setDate.getMonth()-1)};
    	setDataCalendar('btn', date);
    });

    // 다음달
    $('.go-next').on('click', function() {
    	var date = {"year": setDate.getFullYear()
    			, "month": (setDate.getMonth()+1)};
    	setDataCalendar('btn', date);
    });
});
