
let page = document.querySelector("#page");

let blockNumber = function () {
    for (i = 0; i < 25**2; i++) {
        let i = document.createElement("div");
        page.appendChild(i);
        let x = (100 / 25) + "%"
        i.style.minWidth = x
        console.log(x)
        i.classList.add("bg-color")
        i.addEventListener("mouseenter", () => {
            i.classList.remove("bg-color")
        })
    }
}

blockNumber()



