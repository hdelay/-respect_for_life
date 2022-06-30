/**
  * @FileName : commonFunctions.js
  * @Project : JASAL
  * @Date : 2022. 1. 23.
  * @작성자 : 김동환
  * @변경이력 :
  * @프로그램 설명 : 공통기능 호출 ("공통기능"은 이 파일에서 추가 및 호출)
  */




/* AJAX 영역 -->*/
// 일반호출
function fn_ajax(url, param, callback) {
	$.ajax({
		type : 'POST',
		url : url,
		data : param,
		dataType : 'json',
		success : function(result) {
			return callback(result);
		},
		error : function(err) {
			return callback(err);
		}
	});
}

// 첨부파일이 포함 된 경우 호출
function fn_fileUploaAjax(url, formData, callback) {
	$.ajax({
		type : 'POST',
		url : url,
		data : formData,
		cache : false,
		contentType : false,
		processData : false,
		success : function(result) {
			return callback(result);
		}, error : function(err) {
			return callback(err);
		}
	});
}
/*<-- AJAX 영역 */


/* 유효성 체크영역 --> */
// 이메일 형식체크(정규식)
function fn_isEmail(asValue) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

// 이메일, 휴대전화, 전화번호, 팩스 세팅
function fn_EmailMobileTelSetting(){
	// 이메일 세팅
	$("input[name='emailAddr']").val($("input[name='email1']").val() + '@' + $("input[name='email2']").val());
	// 이메일 형식체크
	/*if(!fn_isEmail($("input[name='emailAddr']").val())){
		alert('적합한 이메일 주소가 아닙니다.');
		return false;
	}*/
	
	/* --> 이메일 제외 input 한개로 통일
	//휴대전화 세팅
	$("input[name='mobileNo']").val($("select[name='mobile1']").val() + '-' + $("input[name='mobile2']").val() + '-' + $("input[name='mobile3']").val());
	// 전화번호 세팅
	if($("input[name='tel1']").val() != "" && $("input[name='tel2']").val() != "" && $("input[name='tel3']").val() != ""){
		$("input[name='telNo']").val($("select[name='tel1']").val() + '-' + $("input[name='tel2']").val() + '-' + $("input[name='tel3']").val());
	}
	// 팩스 세팅
	if($("input[name='fax1']").val() != "" && $("input[name='fax2']").val() != "" && $("input[name='fax3']").val() != ""){
		$("input[name='faxNo']").val($("select[name='fax1']").val() + '-' + $("input[name='fax2']").val() + '-' + $("input[name='fax3']").val());
	}
	*/
}

// 날짜 형식체크(yyyy-mm-dd)
function fn_dateValChk(name){
	var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
	var tag = $("input[name='"+name+"']").val();
	var flag = true;
	
	if(!regex.test(tag)){
		flag = false;
	}
	
	return flag;
}

// 날짜 유효성 체크
function fn_dateValidate(){
	var rstFlag = true;
	if(!(fn_dateValChk('startDt') && fn_dateValChk('endDt'))){
		alert("날짜형식을 확인해주세요.");
		rstFlag = false;
	}
	
	var startDt = new Date($("input[name='startDt']").val());
	var endDt = new Date($("input[name='endDt']").val());	
	if (rstFlag && startDt > endDt) {
		alert('종료날짜가 시작날짜보다 이전일 수 없습니다.');
		rstFlag = false;
	}
	return rstFlag;
}

// 시작날짜 유효성 체크 (최대 1년)
function fn_startDtValidate(){
	var nowDt = new Date();
	var refDt = new Date(nowDt.setYear(nowDt.getFullYear() - 1));
	var refVal = refDt.getFullYear()+"-"
		+("0" + (1 + refDt.getMonth())).slice(-2)+"-"
		+("0" + refDt.getDate()).slice(-2);
	var setVal = $("input[name='startDt']").val();
	
	if (refVal > setVal) {
		alert('최대 1년 전 까지 선택가능합니다.');
		return false;
	}
}

// 키 입력 이벤트(아이디는 영문, 번호는 숫자만 입력 가능하게끔..)
function fn_keyUpValidate(){
	// 아이디, 이름
	$(".empId, .empName").on("blur keyup", function() {
		if($(this).attr("name") == "empId"){
			//한글입력불가
			$(this).val( $(this).val().replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' ) );
		} else {
			//숫자입력불가
			$(this).val($(this).val().replace(/[0-9]/g,""));
		}		
		//특수문자입력불가
		$(this).val( $(this).val().replace( /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, '' ) );
	});
	
	// 번호
	$(".call").on("blur keyup", function() {
		$(this).val($(this).val().replace(/[^0-9]/g,""));
	});

	// 이메일
	$(".emailAddr").on("blur keyup", function(){
		//한글입력불가
		$(this).val( $(this).val().replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' ) );
		if($(this).attr("name") == "email1"){
			//특수문자입력불가
			$(this).val( $(this).val().replace( /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, '' ) );
		}
	});
	
	// 이메일 select 이벤트
	$("#mail").change(function() {
		var selEmail = $("#mail").val();
		var flag = false;
		if(selEmail != "" && selEmail.trim().length > 4){
			flag = true;
		}
		$("input[name='email2']").val(selEmail);
		$("input[name='email2']").attr("readonly", flag);
	});
}



/* <-- 유효성 체크영역 */


/* 웹 에디터 영역 --> */
function fn_setNoteEditor() {
	$(".noteEditor").summernote({
		height : 300
		, lang : 'ko-KR'
		, focus : true
		, placeholder : '내용은 10글자 이상 입력해주세요.'
		, disableResizeEditor : true // 크기고정
		, callbacks : { 
			// 이미지첨부
			onImageUpload : function(files, editor, welEditable) {
				for(var i=0; i<files.length; i++){
					if(files[i].size > (1024*1024*1)){
						alert("이미지는 1MB 미만 업로드 가능합니다.");
						return false;
					}
					
					fn_noteEditorImgUpload(files[i], this);
				}
			}
		}
	});
}

function fn_noteEditorImgUpload(file, el){
	var url = "/common/util/noteEditorImageUpload.ajax";
	var data = new FormData();
	data.append("file", file);

	$.ajax({
		url : url,
		data : data,
		type : 'post',
		enctype : 'multipart/form-data',
		processData : false,
		contentType : false,
		success : function(data) {
			$(el).summernote('editor.insertImage', data.url);
		},
		error : function(err){
			console.log(err);
		}
	});
}

function contentValidate() {
	var rstFlag = false;
	var cnLength = $(".noteEditor").val().replace(/(<([^>]+)>)/gi, '').trim().length;
	
	if(cnLength < 10){
		alert("내용은 최소 10자 이상 작성해주세요.");
		rstFlag = false;
	} else {
		rstFlag = true;
	}
	
	return rstFlag;
}
/* <-- 웹 에디터 영역 */


/* MODAL(모달) 영역 --> */
// 모달 켜기
function fn_showModal(url) {
	$("#div_modal").load(url);
	$("#div_modal").show();
}

// 모달 끄기
function fn_hideModal(id){
	if(id == 'clsfPop'){
		$("input[name='clsfCode']").val("");
		$("input[name='clsfName']").val("");
	} else if(id == 'adrsPop'){
		$("input[name='clsfCode']").val("");
		$("input[name='clsfName']").val("");
	}
	
	
	$('#div_modal').empty();
	$('#div_modal').hide();
}
/* <-- 모달 영역 */


/* realgrid2 영역 --> */
// 그리드 페이징
function fn_gridSetPaging(){
	var totalData = dataProvider.getRowCount();    // 총 데이터 수
	var dataPerPage = 10;    // 한 페이지에 나타낼 데이터 수
	var pageCount = 3;// 한 화면에 나타낼 페이지 수
	if(totalData < dataPerPage){
		dataPerPage = totalData;
	}
	if(totalData < pageCount){
		pageCount = totalData;
	}
	
	//fn_gridSetPageSelbox(totalData, dataPerPage); // 페이징 selectBox
	gridView.setPaging(true, dataPerPage); // 그리드
	paging(totalData, dataPerPage, pageCount, 1);
}

// 페이징 selectBox
/* function fn_gridSetPageSelbox(totalData, dataPerPage){
	var totalPage = Math.ceil(totalData/dataPerPage);    // 총 페이지 수
	
	for (var i=1; i <= totalPage; i++) {
	    var optStr = "<option value=" + i + ">" + i + "</option>";
	    console.log(optStr);
	    $("#selBox").append(optStr);
	}
	
	$("#selBox").change(function() {
	    var totalData = dataProvider.getRowCount();    // 총 데이터 수
	    var dataPerPage = 1;    // 한 페이지에 나타낼 데이터 수
	    var pageCount = 3;        // 한 화면에 나타낼 페이지 수
	    var selectedPage = $(this).val();
	
	    gridView.setPage(selectedPage-1);
	    paging(totalData, dataPerPage, pageCount, selectedPage);
	});
} */


// 페이징 html 생성, 클릭 이벤트
function paging(totalData, dataPerPage, pageCount, currentPage){
	var totalPage = Math.ceil(totalData/dataPerPage);    // 총 페이지 수
	var pageGroup = Math.ceil(currentPage/pageCount);    // 페이지 그룹		
	var last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
	if(last > totalPage){
		last = totalPage;
	}
	if(last < pageCount){
		pageCount = last;
	}
	var first = last - (pageCount-1);    // 화면에 보여질 첫번째 페이지 번호
	var next = last+1;
	var prev = first-1;

	var $pingingView = $("#paging");
	
	var html = "";
	
	if(prev == 0) {
		html += "<a href=# id='first' class='disabled'>|<</a> ";
	    html += "<a href=# id='prev' class='disabled'><</a> ";
	} else {
	    html += "<a href=# id='first'>|<</a> ";
	    html += "<a href=# id='prev'><</a> ";         
	}
			
	for(var i=first; i <= last; i++){
	    html += "<a href='#' style='width: 50px' id=" + i + ">" + i + "</a> ";
	}
	
	if(last < totalPage) {
	    html += "<a href=# id='next'>></a>";
	    html += "<a href=# id='last'>>|</a>";
	} else {
	    html += "<a href=# id='next' class='disabled'>></a>";
	    html += "<a href=# id='last' class='disabled'>>|</a>";
	}
	
	$("#paging").html(html);    // 페이지 목록 생성
	
	$("#paging a").css({"color": "black",
	                    "padding-left": "10px"});
	                    
	$("#paging a#" + currentPage).css({"text-decoration":"none", 
	                                   "color":"red", 
	                                   "font-weight":"bold"});    // 현재 페이지 표시
	                                   
	$("#paging a").click(function(event){
	    event.preventDefault();
	    
	    var $item = $(this);
	    var $id = $item.attr("id");
	    var $class = $item.attr("class");
	    var selectedPage = $item.text();
	    
	    
		if($class != 'disabled'){
			if($id == "first")   selectedPage = 1;
		    if($id == "next")    selectedPage = next;
		    if($id == "prev")    selectedPage = prev;
		    if($id == "last")    selectedPage = totalPage;
		    
		    var nowPage = selectedPage-1;
		    
		    gridView.setPage(nowPage);
		    paging(totalData, dataPerPage, pageCount, selectedPage);
		}	    
	});                                
}


// 그리드 생성
function fn_clearGrid(){
	dataProvider = new RealGrid.LocalDataProvider();
	dataProvider.setFields(fields); // setRowStyleCallback에 필요
	
	gridView = new RealGrid.GridView("realgrid");
	gridView.setDataSource(dataProvider);	
	dataProvider.setFields(fields);
	gridView.setColumns(columns);
	
	gridView.header.height = 40;
	gridView.displayOptions.rowHeight = 36;
	gridView.editOptions.insertable = true;
	gridView.editOptions.appendable = true;
	
	gridView.footer.visible = false; // 푸터 숨김
	gridView.stateBar.visible = false; // 상태바 숨김
	gridView.displayOptions.selectionStyle = "rows" // 행 전체가 선택되도록
	gridView.displayOptions.fitStyle = "even"; // 컬럼을 grid사이즈에 맞춤
	gridView.displayOptions.columnMovable = false; // 컬럼이동 막기
}
/* <-- realgrid2 영역 */