
let page = document.querySelector("#page");


for (i = 0; i < 9**2; i++) {
    let i = document.createElement("div");
    page.appendChild(i);
    //i.classList.add(`bg-color`);
    i.addEventListener("mouseenter", () => {
        i.classList.add("bg-color")
    })

}



//use blocknumber to find min-width percent to fit that many blocks in one row
//formula is (blockNumber + 1)/100 round down to two decimal places


