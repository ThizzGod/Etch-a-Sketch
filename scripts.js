
let page = document.querySelector("#page");

let blockNumber = function () {
    let number = prompt("How many blocks per row?");
    for (i = 0; i < number**2; i++) {
        if (number > 100) {
            alert("Please choose a number less than 100");
            break
        }
        let i = document.createElement("div");
        page.appendChild(i);
        let x = (100 / (+number)) + "%"
        i.style.minWidth = x
        console.log(x)
        i.addEventListener("mouseenter", () => {
            i.classList.add("bg-color")
        })
    }
}


let btn = document.querySelector("#changeBlockNumber")

btn.addEventListener("click", () => {
    page.innerHTML = '';
    blockNumber();
})


