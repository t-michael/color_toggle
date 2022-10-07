const basicColors = ["green", "red", "pink", "purple", "yellow", "orange"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    // Generate Random Number 0-5
    const randomNum = generateRandomNum();
    document.body.style.backgroundColor = basicColors[randomNum];
    color.textContent = basicColors[randomNum];
});

function generateRandomNum() {
    return Math.floor(Math.random() * basicColors.length);
}