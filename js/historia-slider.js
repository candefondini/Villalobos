const historiaSlides = document.querySelectorAll(".historia-slide");
const historiaPrev = document.querySelector(".historia-prev");
const historiaNext = document.querySelector(".historia-next");

let historiaActual = 0;

function mostrarHistoria(i){

    historiaSlides.forEach(slide=>{
        slide.classList.remove("active");
    });

    historiaSlides[i].classList.add("active");

}

historiaNext.addEventListener("click",()=>{

    historiaActual++;

    if(historiaActual >= historiaSlides.length){
        historiaActual = 0;
    }

    mostrarHistoria(historiaActual);

});

historiaPrev.addEventListener("click",()=>{

    historiaActual--;

    if(historiaActual < 0){
        historiaActual = historiaSlides.length-1;
    }

    mostrarHistoria(historiaActual);

});

setInterval(()=>{

    historiaActual++;

    if(historiaActual >= historiaSlides.length){
        historiaActual = 0;
    }

    mostrarHistoria(historiaActual);

},5000);