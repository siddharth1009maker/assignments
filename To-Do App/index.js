$(document).ready(function(){
    const addItem = () =>{
        let input = $("#input").val(); //To get the value entered by the user
        if(input!=="")
        {
            $("ul").append(`<li> ${input} <i class = "fas fa-check fa-trash"></li>`);
        }
        $("#input").val("");
    }
    $("#addBtn").click(addItem);
    $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").fadeOut(200);
  });
});