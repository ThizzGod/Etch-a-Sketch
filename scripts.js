
let page = document.querySelector("#page");

let blockNumber = function () {
    let number = prompt("How many blocks per row?")
    
    for (i = 0; i < number**2; i++) {
        let i = document.createElement("div");
        page.appendChild(i);
        i.addEventListener("mouseenter", () => {
            i.classList.add("bg-color")
        })
    
    }
}


let btn = document.querySelector("#changeBlockNumber")

btn.addEventListener("click", blockNumber)

for (i = 0; i < 9**2; i++) {
    let i = document.createElement("div");
    page.appendChild(i);
    i.addEventListener("mouseenter", () => {
        i.classList.add("bg-color")
    })

}



//use blocknumber to find min-width percent to fit that many blocks in one row
//formula is (blockNumber + 1)/100 round down to two decimal places


