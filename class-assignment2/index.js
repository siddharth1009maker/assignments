$("document").ready(function(){
    $(".greenBtn").click(greenButton);
    $(".blackBtn").click(blackButton);
    $(".yellowBtn").click(yellowButton);
    $(".blueBtn").click(blueButton);
    function greenButton()
    {
        $("body").css("background-color","green");
        $("textarea").css({"border":"4px solid black","color":"black","background-color":"green"});
    }
    function yellowButton()
    {
        $("body").css("background-color","yellow");
        $("textarea").css({"border":"4px solid black","color":"black","background-color":"yellow"});
    }
    function blueButton()
    {
        $("body").css("background-color","blue");
        $("textarea").css({"border":"4px solid white","color":"white","background-color":"blue"});
    }
    function blackButton()
    {
        $("body").css("background-color","black");
        $("textarea").css({"border":"4px solid white","color":"white","background-color":"black"});
    }
});