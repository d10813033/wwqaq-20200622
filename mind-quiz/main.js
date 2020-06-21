$(document).ready(function(){
    let currentQuiz=null;
    $("#startButton").click(function(){
        //console.log("clicked!");
        if(currentQuiz==null){
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(let x=0;x<questions[0].answers.length;x++){
            $("#options").append( 
                "<input name= 'options' type='radio' value="+
                x+
                "<label>"+questions[0].answers[x][0]+
                "</label><br><br>"
                );
            }
            //按紐文字切換
            $("#startButton").attr("value","Next");
    }else{
    $.each(   
            $(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        //通往最終結果
                        let finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        currentQuiz=null;
                        $("#startButton").attr("value","Restart");   
                    }else{
                       //跳去某一題
                       $(":radio"),function(i,val){}
                       if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        let finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        currentQuiz=null;
                        $("#startButton").attr("value","Restart");
                   
                    }else{
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(let x=0;x<questions[currentQuiz].answers.length;x++){
                            $("#options").append(
                                "<input name='options' type= 'radio' value="+
                                x+
                                "<label>"+questions[currentQuiz].answers[x][0]+
                                "</label><br><br>"
                            );
                    }
                }
            }
                }
                    return false
    
                }
            }
        );
    }
});
});