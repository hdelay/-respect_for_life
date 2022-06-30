
$("#media").bind({
	loadeddata: function(){ // 영상 준비완료
		fn_setTimer("totalTime");
		$( '.controls' ).css("visibility", 'visible');
	}
	, timeupdate: function(){ // 영상 실시간 타이머
		fn_setTimer("timerTime");
	}
	, ended: function(){ // 영상 끝
		media.pause();
		var text = '<span style="font-size: 30px;">vedio ended</span>';
		$("#end").html(text);
		alert("play ended");
	}
});

// 영상 재생,일시정지
function fn_mediaPlay(){
	if(media.paused) {
		$('.playerBtn').attr("data-icon", "u");
	    media.play();
	  } else {
		  $('.playerBtn').attr("data-icon", "P");
	    media.pause();
	  }
}

// 볼륨조절
function set_vol(val) {
	media.volume = val / 100; 
}

// mute on,off
function fn_mediaMute(){
	var volSound = $("#volSound");
	var volRange = $("#volRange");
	var i_mute = $("#i_mute");

	if(i_mute.html() == "ON"){
		// 현재 vol값을 전달해서
		volSound.val(volRange.val());
		// range값을 0으로 세팅하고
		volRange.val(0);
		// mute상태 아이콘 띄우고
		i_mute.html("OFF");
		// media 소리 없앰
		set_vol(0);
	} else {
		// 이전 vol값을 range에 세팅하고
		volRange.val(volSound.val());
		// mute해제 아이콘 띄우고
		i_mute.html("ON");
		// mideo 소리 켜기
		console.log(volSound.val());
		set_vol(volSound.val());
	}
}

// timer, timerBar
function fn_setTimer(id) {
  var minutes, seconds;
  if(id == 'timerTime'){
	  // 실시간=> #timerTime
	  minutes = Math.floor(media.currentTime / 60);
	  seconds = Math.floor(media.currentTime - minutes * 60);
  }else{
	  // 총시간=> #totalTime
	  minutes = Math.floor(media.duration / 60);
	  seconds = Math.floor(media.duration - minutes * 60);
  }
  
  if (minutes < 10) {
	  minutes = '0' + minutes;
  }
  if (seconds < 10) {
	  seconds = '0' + seconds;
  }

  var mediaTime = minutes + ':' + seconds;
  // timer
  $("#"+id).html(mediaTime);
  
  // timerar 
  if(id == 'timerTime'){
	  let barLength = $(".timer").width() * (media.currentTime/media.duration);
	  $( '#timerBar' ).css("width", barLength);
  }
}