const next = document.querySelector(".next");
const info = document.querySelector(".info");
const prev = document.querySelector(".previous");
const tab = document.querySelectorAll(".info-tab");
const repeat = document.querySelector(".repeat");

var content = 0;

function display() {
    if(content >= 0 && content < 5) {
        next.addEventListener("click", function() {
            content++;
            prev.classList.remove("hidden");
            tab[content-1].classList.add("hidden");
            tab[content].classList.remove("hidden");
            if(content == 5) {
                next.classList.add("hidden");
                repeat.classList.remove("hidden");
            }
        });

        prev.addEventListener("click", function() {
            content--;
            next.classList.remove("hidden");
            repeat.classList.add("hidden");
            if(content == 0) {
                prev.classList.add("hidden");
                tab[content].classList.remove("hidden");
                tab[content + 1].classList.add("hidden");

            } else if(content > 0) {
                tab[content].classList.remove("hidden");
                tab[content + 1].classList.add("hidden");
                
            }

            
        });
        
        function reset() {
            tab[content].classList.add("hidden");
            tab[0].classList.remove("hidden");
            content = 0;
            prev.classList.add("hidden");
            next.classList.remove("hidden");
            repeat.classList.add("hidden");
        }

        repeat.addEventListener("click", function() {
            reset();
        });

    }
    
}

display();