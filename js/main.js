


$(document).ready(function(){
    $(".charactertext p").hide();
    $("#t1").show();
    $(".portrait_img").hide();
    $("#1").show();


    $(".card").on("click", function(){
        $("#1").hide();
        $("#t1").hide();
        $("#2").show();
        $("#t2").show();
        console.log("#1")
    });

});