let sps = 16;
const grid = document.querySelector(".grid");
for (let i = 0; i < sps; i++) {
    let lat = document.createElement("div");
    lat.classList.add("lat");
    // lat.textContent = "This is a lateral row!"
    for (let j = 0; j < sps; j++) {
        let lon = document.createElement("div");
        lon.classList.add("lon");
        // lon.textContent = "box"
        lat.appendChild(lon);
    }
    grid.appendChild(lat);
}