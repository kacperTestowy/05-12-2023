let count = 0;
let rotate = 0;
const wishes = [
    "Szczęścia",
    "Prezentów",
    "Zdrowia",
    "Promocji",
    "Pomyślności",
    "Wygody",
    "Miłości",
    "Chęci",
    "Ciepła",
    "Woli",
    "Cierpliwości",
    "Pieniędzy",
    "Mądrości",
    "Waleczności",
    "Życzliwości",
    "Wolności",
    "Wytrwałości",
    "Smaku",
    "Siły",
    "Ducha",
    "Roztropności",
    "Nadziei",
    "Radości"
    ]
const body = document.querySelector("body");
const uuu = document.querySelector(".uuu");
const title = document.querySelector("h1");
const info = document.querySelector(".info");
const items = document.querySelectorAll(".item");
items.forEach((e) => e.addEventListener("click", (e) => {
    
    if(e.target.classList.contains('opened')) {
        info.classList.toggle("show");
        setTimeout(() => {
            info.classList.toggle("show");
        }, 1500);
    }
    else {
        e.target.classList.add("opened");
        e.target.textContent = wishes[count];
        count += 1;
        if(count == 24) {
            items.forEach(e => {
                e.style.display = "none";
            })
            title.textContent = "Wesołych Świąt!";
            uuu.style.display = "block";
            setInterval(() => {
                body.style.backdropFilter = `hue-rotate(${rotate % 360}deg)`;
                rotate += 1;
            }, 100)
        }
    }
}))