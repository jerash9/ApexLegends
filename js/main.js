


$(document).ready(function(){
    $(".charactertext p").hide();
    $("#t1").show();
    $(".portrait_img").hide();
    $("#1").show();


    $(".card").on("click", function(){
        $("#1").hide();
        $("#t1").hide();
        $("#5").show();
        $("#t3").show();
    });



    // Botones de cambio de mapa

    function changeMap(map_id) {
        document.getElementById("bg").style.backgroundImage = "url('assets/mapas/Map_"+map_id+".webp')";
        console.log("'Map_"+map_id+".webp')");
    };

    let mapsBtns = document.querySelectorAll(".map");

    for (let i = 0; i < mapsBtns.length; i++) {
        mapsBtns[i].addEventListener("click",function(){
            changeMap(this.dataset.map);
        });
        
    }

});