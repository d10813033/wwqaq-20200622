let mapArray,ctx,currentImgMainX,currentImgMainY;
let imgMountain, imgMain, imgEnemy;

//載入後要做的事
$(document).ready(function(){   
//Map 0:OK 1:花盆 2:往特待生寮 3:ren 4:oboro 5:aki 6:kei
    mapArray = [0,5,6,1,0,0,0,1,1,7,0,2,3,0,0,4];
    ctx = $("#myCanvas")[0].getContext("2d");

imgMain = new Image();
imgMain.src = "rpg/images/shimojima.png";
currentImgMainX = 0;
currentImgMainY = 0;
imgMain.onload = function(){
    ctx.drawImage(imgMain,0,0,720,720,currentImgMainX,currentImgMainY,200,200);
};


imgMountain = new Image();
imgMountain.src = "rpg/images/aaa.png";
imgaki = new Image();
imgaki.src = "rpg/images/aki.png";
imgkei= new Image();
imgkei.src = "rpg/images/kei.png";
imgrentaro = new Image();
imgrentaro.src = "rpg/images/rentaro.png"; //蓮蓮
imgoboro = new Image();
imgoboro.src ="rpg/images/oboro.png";
imgtree = new Image();
imgtree.src ="rpg/images/tree.png";
imgbanner = new Image();
imgtree.src ="rpg/images/tree.png";
imgMountain.onload = function(){ 
    imgaki.onload = function(){ 
    imgkei.onload = function(){ 
    imgrentaro.onload = function(){ 
    imgoboro.onload = function(){ 
    imgtree.onload = function(){ 
        for(let x in mapArray){
            if(mapArray[x]==1){
                ctx.drawImage(imgMountain,0,0,80,80,x%4*200,Math.floor(x/4)*200,200,200);
            }else if(mapArray[x]==3){
                ctx.drawImage(imgrentaro,0,0,700,700,x%4*200,Math.floor(x/4)*200,200,200);
            }else if(mapArray[x]==4){
                ctx.drawImage(imgoboro,0,0,700,700,x%4*200,Math.floor(x/4)*200,200,200);  
            }else if(mapArray[x]==5){
                ctx.drawImage(imgaki,0,0,700,700,x%4*200,Math.floor(x/4)*200,200,200); 
            }else if(mapArray[x]==6){
                ctx.drawImage(imgkei,0,0,700,700,x%4*200,Math.floor(x/4)*200,200,200);  
            }else if(mapArray[x]==7){
                ctx.drawImage(imgtree,0,0,80,80,x%4*200,Math.floor(x/4)*200,200,200);  
            }
          //  }else(mapArray[x]==2){ctx.drawImage(imgPeople,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
            }
        }
    }
}
}
}
}
});
$(document).keydown(function(event){
    let targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;
    
    event.preventDefault();

    switch(event.originalEvent.code){
        case "ArrowLeft": //向左
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 0;
            break;

        case "ArrowUp": //向上
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-200;
            cutImagePositionX = 700;
            break;
            
        case "ArrowRight": //向右
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 0;
            break;

        case "ArrowDown": //向下
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+200;
            cutImagePositionX = 0;
            break;
        default: //其他按鍵不回應
        return;
    }

    //在邊界內
    if(targetImgMainX<=600 && targetImgMainX>=0 && targetImgMainY<=600 && targetImgMainY>=0){
        targetBlock = targetImgMainX/200+targetImgMainY/200*4;        
    }else{ //超出邊界
        targetBlock = -1;
    }

    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);
    if(targetBlock == -1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3 || mapArray[targetBlock]==4 || mapArray[targetBlock]==5 || mapArray[targetBlock]==6 || mapArray[targetBlock]==7 || mapArray[targetBlock]==8){
        //所有異常(不動)
    }else{ //正常狀況就設定新位置
            $("#talkBox").empty();
            currentImgMainX = targetImgMainX
            currentImgMainY = targetImgMainY;
    }
    //在新位置放主角
    ctx.drawImage(imgMain,cutImagePositionX,0,720,720,currentImgMainX,currentImgMainY,200,200);
    
    //文字顯示狀態
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("不知道是誰掉的番茄");
            break;
        case 2: 
            $("#talkBox").text("往宿舍");
            break;
        case 3: //
            $("#talkBox").text("正在打BOSS戰很忙");
            break;
        case 4: //改成obo
            $("#talkBox").text("有、有什麼事情嗎……？");
        break;

        case 5: //改成obo
            $("#talkBox").text("哈！哈哈哈哈！");
        break;       
        
        case 6: 
        $("#talkBox").text("還是一如往常有精神呢，呵呵");
        break;
    }

});