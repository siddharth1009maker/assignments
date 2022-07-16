$(document).ready(function(){
    $("#copyBtn").click(textCopied);
    function textCopied()
    {
        alert("Copy The Text");
        $("#copyText").select();
        document.execCommand('copy');
    }
});