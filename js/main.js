
  AOS.init();
const textoMini = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aliquid optio"]
  const texto = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aliquid optio, necessitatibus nesciunt iste incidunt ipsa, sequi animi laudantium quas at, modi repellendus cupiditate atque impedit aperiam vel nemo vero."]

let siu = 0;
let visible = false;

const boton = document.getElementById("botton-read-more")
const textoo = document.getElementById("textoo")

boton.addEventListener('click', () => {
    if (!visible) {
        textoo.textContent = texto[siu];
        textoo.style.display = "block";
        visible = true;
        siu++; 
        if (siu >= texto.length) siu = 0; 
    } else {
        textoo.textContent = textoMini[siu];
        visible = false;
    }
});
