// script.js

// Function to generate a random hex color
function getRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`;
}

// Function to generate a color palette
function generatePalette(theme) {
    const paletteContainer = document.getElementById('palette-container');
    paletteContainer.innerHTML = ''; // Clear any existing colors

    let colors = [];
    
    // Generate colors based on selected theme
    if (theme === 'random') {
        for (let i = 0; i < 10; i++) {
            colors.push(getRandomColor());
        }
    } else if (theme === 'warm') {
        // Warm tones (reds, yellows, oranges)
        for (let i = 0; i < 10; i++) {
            colors.push(`#${Math.floor(Math.random() * 16711680).toString(16).padStart(6, '0')}`);
        }
    } else if (theme === 'cool') {
        // Cool tones (blues, greens, purples)
        for (let i = 0; i < 10; i++) {
            colors.push(`#${Math.floor(Math.random() * 65280).toString(16).padStart(6, '0')}`);
        }
    }

    // Create color boxes and display them
    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;
        colorBox.innerHTML = `<span class="color-code">${color}</span>`;
        colorBox.addEventListener('click', () => copyToClipboard(color));
        paletteContainer.appendChild(colorBox);
    });
}

// Copy color code to clipboard
function copyToClipboard(color) {
    navigator.clipboard.writeText(color).then(() => {
        alert(`Color ${color} copied to clipboard!`);
    });
}

// Event listener for generating new palette
document.getElementById('generate-btn').addEventListener('click', () => {
    const theme = document.getElementById('theme').value;
    generatePalette(theme);
});

// Initialize with a random palette
generatePalette('random');
