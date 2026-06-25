document.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth > 991) return;

    document.querySelectorAll(".featured-box").forEach(box => {

        const grid = box.querySelector(".products-grid");
        const cards = grid.querySelectorAll(".product-card");

        if (cards.length <= 1) return;

        let current = 0;

        // Crear flechas
        const prev = document.createElement("button");
        prev.className = "featured-arrow prev";
        prev.innerHTML = "❮";

        const next = document.createElement("button");
        next.className = "featured-arrow next";
        next.innerHTML = "❯";

        box.appendChild(prev);
        box.appendChild(next);

        // Crear puntitos
        const dots = document.createElement("div");
        dots.className = "featured-dots";

        cards.forEach((_, i) => {

            const dot = document.createElement("span");

            if(i === 0)
                dot.classList.add("active");

            dot.addEventListener("click", () => {

                current = i;
                goToSlide();

            });

            dots.appendChild(dot);

        });

        box.appendChild(dots);

        const updateDots = () => {

            dots.querySelectorAll("span").forEach((dot,index)=>{

                dot.classList.toggle("active",index===current);

            });

        };

        const goToSlide = () => {

            grid.scrollTo({

                left: cards[current].offsetLeft - grid.offsetLeft,
                behavior:"smooth"

            });

            updateDots();

        };

        prev.addEventListener("click",()=>{

            current--;

            if(current < 0)
                current = cards.length-1;

            goToSlide();

        });

        next.addEventListener("click",()=>{

            current++;

            if(current >= cards.length)
                current = 0;

            goToSlide();

        });

        setInterval(()=>{

            current++;

            if(current >= cards.length)
                current = 0;

            goToSlide();

        },5000);

    });

});