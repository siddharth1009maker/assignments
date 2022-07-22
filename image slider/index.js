$(document).ready(function(){
    const img = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-XzZJ0liF3xqTopH1BQ330Nkd9F3K-Itm33SrZc21X3y00DnXBs_GvB8TQbmV9gmjkI&usqp=CAU","https://media.istockphoto.com/photos/wonders-of-the-night-sky-picture-id1182647541?k=20&m=1182647541&s=612x612&w=0&h=0Spity5xzoHv2QsDS5TyGAvsuAD2AZpi5GMKVu6uY-0="];
    let index = 0 ;
    $(".leftBtn").click(leftBtnFunction);
    $("img").attr("src",img[index]);
    function leftBtnFunction()
    {
        if(index == 0)
        {
            index = img.length - 1 ;
        }
        else
        {
            index--;
        }
        $("img").attr("src",img[index]);
    }
    $(".rightBtn").click(rightBtnFunction);
    function rightBtnFunction()
    {
        if(index == (img.length - 1))
        {
            index = 0 ;
        }
        else 
        {
            index++;
        }
        $("img").attr("src",img[index]);
    }
});