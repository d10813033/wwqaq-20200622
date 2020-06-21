/*
window.onload=function(){
    //document.write("hello JaveScript!!")
}
*/

$(document).ready(function(){
    //按按鈕有反應
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    
    //$("H1").text($("li").eq(randomChildNumber).text());
    //$("img").attr("src",images[randomChildNumber]);

      $("#random-result").text($("#choices li").eq(randomChildNumber).text());
      $("#random-pic").attr("src",images[randomChildNumber]);

    });
});



