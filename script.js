let size = 16;
const grid = document.querySelector(".grid");
// Creates grid (default size is 16x16)
function makeGrid(sps) {
    grid.replaceChildren();
    for (let i = 0; i < sps; i++) {
        let lat = document.createElement("div");
        lat.classList.add("lat");
        for (let j = 0; j < sps; j++) {
            let lon = document.createElement("div");
            lon.classList.add("lon");
            // Listener for coloring boxes
            lon.addEventListener("mouseover", function() {
                lon.style.backgroundColor = "#000000";
            });
            lat.appendChild(lon);
        }
        grid.appendChild(lat);
    }
}  
makeGrid(size);
// Resize button
const resize = document.querySelector(".resize");
resize.addEventListener("click", function() {
    let inp = prompt("size?");
    if (inp > 100 || inp <= 0) {
        alert("Invalid Dimensions");
    } else {
        size = inp;
        makeGrid(size);
    }
})
// Eraser button
const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", function() {
    makeGrid(size);
})

