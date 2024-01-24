
let page = document.querySelector("#page");

let blockNumber = function () {
    let number = prompt("How many blocks per row?");
    if (number < 19) {
        let x = (100 / (+number + 1)) + "%"
    } else {
        let x = (100 / +number) + "%"
    }
    for (i = 0; i < number**2; i++) {
        let i = document.createElement("div");
        page.appendChild(i);
        //let width = document.querySelector("#page div");
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
//btn.addEventListener("mouseup", blockNumber)

/* for (i = 0; i < 9**2; i++) {
    let i = document.createElement("div");
    page.appendChild(i);
    i.addEventListener("mouseenter", () => {
        i.classList.add("bg-color")
    })

} */



//use blocknumber to find min-width percent to fit that many blocks in one row
//formula is (blockNumber + 1) * x == 100 round down to two decimal places


