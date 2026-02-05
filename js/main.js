AOS.init();



    //VENTANAS MODALES DE LAS ARMAS

    function openWeaponWindow(weapon_id) {
        console.log("hola")
        let weaponWindow = document.querySelector("#weaponWindow" + weapon_id);
        weaponWindow.classList.add("show-modal");   
    }

    // Función para cerrar la ventana modal 
    function closeWeaponWindow(weapon_id) {
        let weaponWindow = document.querySelector("#weaponWindow" + weapon_id);
        weaponWindow.classList.remove("show-modal");  
    }

    // Array de botones de abrir
    let weaponsBtns = document.querySelectorAll(".weapon");

    for (let k = 0; k < weaponsBtns.length; k++) {
        console.log("weaponsBtns"+[k])
        weaponsBtns[k].addEventListener("click", function() {
            openWeaponWindow(this.dataset.weapon);
        });

    }

    // Array de botones de cerrar 

    let weaponXClose = document.querySelectorAll(".close");

    for (let m = 0; m < weaponXClose.length; m++) {
        console.log("weaponXClose"+[m])
        weaponXClose[m].addEventListener("click", function() {
            closeWeaponWindow(this.dataset.closemodal);
        })
    }

    let weaponsWindows = document.querySelectorAll(".weapon-window");

    for (let n = 0; n < weaponsWindows.length; n++) {
        console.log("weaponsWindows"+[n])
        window.addEventListener("click", function(event){
            if (event.target == weaponsWindows[n]) {
                closeWeaponWindow(weaponsWindows[n].dataset.modalnumber);
            }
        })
    }


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
        
    
    // mapa inicial
    const layers = document.querySelectorAll(".map-layer");
    let currentLayer = 0;
    
    function changeMap(map_id) {
        const nextLayer = (currentLayer + 1) % 2;
        
        layers[nextLayer].style.backgroundImage ="url('assets/mapas/Map_" + map_id + ".webp')";
        
        layers[nextLayer].classList.add("active");
        layers[currentLayer].classList.remove("active");
        
        currentLayer = nextLayer;
    }   
    
    // Menu hamburguesa

    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
      
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });


    //Ventana Modal del formulario

    let formBtns = document.querySelectorAll(".formBtn");
    let formWindow = document.querySelector(".formWindow")
    function openFormWindow(){
        formWindow.classList.add("show-modal");
    };
    
    
    for (let q = 0; q < formBtns.length; q++) {
        formBtns[q].addEventListener("click", function() {
            openFormWindow();
    });        
    }

    let formwindow = document.querySelector(".formWindow");
    
    function closeFormWindow(){
        formWindow.classList.remove("show-modal");
    }
    
    window.addEventListener("click", function(event){
            if (event.target == formWindow) {
                closeFormWindow(formWindow);
            }
        })
        let carousel = document.querySelector('.main-carousel');

if (carousel) {
    new Flickity(carousel, {
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        autoPlay: 3000, // cambia cada 3 segundos
        pauseAutoPlayOnHover: true,
        imagesLoaded: true
    });
}

});
