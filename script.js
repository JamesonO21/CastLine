const fish = [
    "🐟 Bluegill",
    "🐠 Yellow Perch",
    "🌈 Rainbow Trout"
];

const button = document.getElementById("castButton");
const result = document.getElementById("fish");

button.addEventListener("click", () => {
    const randomFish = fish[Math.floor(Math.random() * fish.length)];
    result.textContent = randomFish;
});
