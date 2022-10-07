const advancedColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E",
 "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () =>{
    let hexValue = "#";
    for (let i = 0; i < 6; i++) {
        hexValue += advancedColors[generateRandomNum()];
    }
    color.textContent = hexValue;
    document.body.style.backgroundColor = hexValue;
});

function generateRandomNum() {
    return Math.floor(Math.random() * advancedColors.length)
}