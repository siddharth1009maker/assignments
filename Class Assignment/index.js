$(document).ready(function(){
    $(".submitBtn").click(submitFunction);
    function submitFunction()
    {
        let weight = $(".weightInput").val();
        console.log(weight);
        weight = weight/1000;
        $(".answer").text(`Weight :  ${weight} Kg`);
    }
});