<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    const colorContainer = document.getElementById("coresAqui");
    const generateColorsButton = document.getElementById("gerar");

    generateColorsButton.addEventListener("click", function () {
        const colorCount = parseInt(document.getElementById("qtCores").value);

        // Set CSS variable to control the number of colors
        document.documentElement.style.setProperty('--qtCores', colorCount);

        // Clear previous colors
        colorContainer.innerHTML = "";

        for (let i = 0; i < colorCount; i++) {
            const randomColor = getRandomColor();

            // Create a color box div
            const colorBox = document.createElement("div");
            colorBox.classList.add("colorBox");
            colorBox.style.backgroundColor = randomColor;

            // Create a hex value div
            const hexValue = document.createElement("div");
            hexValue.textContent = randomColor;
            hexValue.classList.add("hex-value");

            // Append hex value to the color box
            colorBox.appendChild(hexValue);

            // Append color box to the colorContainer
            colorContainer.appendChild(colorBox);
        }
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
=======
document.addEventListener("DOMContentLoaded", function () {
    const colorContainer = document.getElementById("coresAqui");
    const generateColorsButton = document.getElementById("gerar");

    generateColorsButton.addEventListener("click", function () {
        const colorCount = parseInt(document.getElementById("qtCores").value);

        // Set CSS variable to control the number of colors
        document.documentElement.style.setProperty('--qtCores', colorCount);

        // Clear previous colors
        colorContainer.innerHTML = "";

        for (let i = 0; i < colorCount; i++) {
            const randomColor = getRandomColor();

            // Create a color box div
            const colorBox = document.createElement("div");
            colorBox.classList.add("colorBox");
            colorBox.style.backgroundColor = randomColor;

            // Create a hex value div
            const hexValue = document.createElement("div");
            hexValue.textContent = randomColor;
            hexValue.classList.add("hex-value");

            // Append hex value to the color box
            colorBox.appendChild(hexValue);

            // Append color box to the colorContainer
            colorContainer.appendChild(colorBox);
        }
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
>>>>>>> 855ccccc275cf730cf1d0632aa2e815936f6cd07
});