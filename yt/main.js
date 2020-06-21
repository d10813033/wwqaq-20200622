var player; //YT播放器
var currentPlay = 0; //紀錄播到第幾首

//當YT API 準備好時
function onYouTubeIframeAPIReady(){   

player = new YT.Player("player",
{   
    height:"390",
    width:"640",
    videoId:playList[currentPlay],
    playerVars:{
        "autoplay":0, //不自動播放
        "controls":0,  //不顯示下方控制選項
        "start":playTime[currentPlay][0],  //起始秒數
        "end":playTime[currentPlay][1],  //結束秒數
        "showinfo":0,  //關標題(已廢除)
        "rel":0, //關閉結束後推薦影片(可用預載影片擋住)
        "iv_load_policy":3 //不顯示註解式行銷
    },
    events:{
        "onReady":onPlayerReady,
        "onStateChange":onPlayerStateChange
    }
}
);
}
function onPlayerReady(event){   //當YT播放器準備好時

    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}
function onPlayerStateChange(event){//當播放器播放狀態改變
    //播放秒數=結束秒數=>播下一首
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        //正常播下一首
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else{ //播到最後一首，準備第一首並停止播放
            currentPlay = 0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    } //影片開始時抓取影片標題
if(player.getVideoLoadedFraction()>0){
    $("h2").text(player.getVideoData().title);
    }
}