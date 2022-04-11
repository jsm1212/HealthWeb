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

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'kgWv6kYmn6s',
    playerVars: {
      autoplay: true,
      loop: true,
	  controls:0,
      mute:1,
      playlist: 'kgWv6kYmn6s'
    },
    events: {
      /*onReady: function (event) {
        event.target.mute()
      }*/
	  onReady:onPlayerReady,
      onStateChange:onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
	player.seekTo(section.start);
	player.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var duration = section.end - section.start;
    setTimeout(restartVideoSection, duration * 1000);
  }
}

function restartVideoSection() {
  player.seekTo(section.start);
}