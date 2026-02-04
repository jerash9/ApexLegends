AOS.init();

$(document).ready(function(){
      
      $(".charactertext").hide();
      $("#t1").show();
      $("#t1").addClass("visible")
      $(".portrait_img").hide();
      $("#p1").show();
      $("#p1").addClass("visible");
      
      
      
      // Botones de cambio de personaje
      
      function changeChara(chara_id) {
          //hide currently visible
          $(".visible").hide();
          $(".visible").removeClass("visible");
          //show chosen character
          $("#p"+chara_id).show()
          $("#p"+chara_id).addClass("visible");
          $("#t"+chara_id).show()
          $("#t"+chara_id).addClass("visible");
        };
        
        let charaBtns = document.querySelectorAll(".card");
        
        for (let j = 0; j < charaBtns.length; j++) {
            charaBtns[j].addEventListener("click",function(){
                changeChara(this.dataset.chara);
            });
            
        };
        
        // Botones de cambio de mapa
        
        function changeMap(map_id) {
            document.getElementById("bg").style.backgroundImage = "url('assets/mapas/Map_"+map_id+".webp')";
        };
        
        let mapsBtns = document.querySelectorAll(".map");
        
        for (let i = 0; i < mapsBtns.length; i++) {
            mapsBtns[i].addEventListener("click",function(){
                changeMap(this.dataset.map);
            });
            
        };
        
        // Menu hamburguesa

        
 
    function changeChara(chara_id) {

  // quitar visibilidad actual
  $(".visible").removeClass("visible");

  // pequeño delay para reiniciar animación
  setTimeout(() => {
    $("#p" + chara_id).addClass("visible");
    $("#t" + chara_id).addClass("visible");
  }, 50);


          const layers = document.querySelectorAll(".map-layer");
let currentLayer = 0;

// mapa inicial
layers[0].style.backgroundImage = "url('assets/mapas/Map_1.webp')";
layers[0].classList.add("active");

function changeMap(map_id) {
  const nextLayer = (currentLayer + 1) % 2;

  layers[nextLayer].style.backgroundImage =
    "url('assets/mapas/Map_" + map_id + ".webp')";

  layers[nextLayer].classList.add("active");
  layers[currentLayer].classList.remove("active");

  currentLayer = nextLayer;
}


        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
      
        hamburger.addEventListener('click', () => {
            console.log("Coño");
          mobileMenu.classList.toggle('active');
        });


}
   });
