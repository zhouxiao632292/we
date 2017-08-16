$(function(){
    $(".left").on("click",function(){
        var index=$(this).parent().index();
        for(var i=0;i<7;i++){
            $("li").eq(i).removeClass("flod");
        }
        $(this).parent().addClass("flod");


    })
})