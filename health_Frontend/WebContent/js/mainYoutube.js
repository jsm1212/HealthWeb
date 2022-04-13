var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var section = {
	start: 25,
	end: 140
}

var mainplayer;

function onYouTubeIframeAPIReady() {
	mainplayer = new YT.Player('mainplayer', {
		videoId: 'nuJ4ySrXOM8',
		playerVars:{
			autoplay: true,
			showsearch:0,
			rel:0,
	      	loop: true,
		  	controls:0,
	      	mute:1,
	      	playlist:'nuJ4ySrXOM8'
		},
		events:{
			onReady:onPlayerReady,
	      	onStateChange:onPlayerStateChange
		}
	});	
}

function onPlayerReady(event) {
	mainplayer.seekTo(section.start);
	mainplayer.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var duration = section.end - section.start;
    setTimeout(restartVideoSection, duration * 1000);
  }
}

function restartVideoSection() {
  mainplayer.seekTo(section.start);
}