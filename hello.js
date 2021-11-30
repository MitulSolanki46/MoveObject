let fullBody = document.querySelector("body");
fullBody.style.backgroundColor = "black";
let circle = document.querySelector("#element");
// circle.style.backgroundColor = "green";
const moveBy = 50;
window.addEventListener("load", () => {
    circle.style.position = "absolute";
    circle.style.left = "0";
    circle.style.top = "0";
});
window.addEventListener("keyup", (e) => {
    console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            circle.style.top = parseInt(circle.style.top) - moveBy + "px";
            break;
        case "ArrowDown":
            circle.style.top = parseInt(circle.style.top) + moveBy + "px";
            break;
        case "ArrowLeft":
            circle.style.left = parseInt(circle.style.left) - moveBy + "px";
            break;
        case "ArrowRight":
            circle.style.left = parseInt(circle.style.left) + moveBy + "px";
            break;
    }
});