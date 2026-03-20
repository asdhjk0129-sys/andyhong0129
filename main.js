const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeSwitcher = document.getElementById('theme-switcher');

// Function to get the color based on the number's grade
const getGradeColor = (number) => {
    if (number <= 10) return '#fbc400'; // 1-10: Yellow
    if (number <= 20) return '#69c8f2'; // 11-20: Blue
    if (number <= 30) return '#ff7272'; // 21-30: Red
    if (number <= 40) return '#aaaaaa'; // 31-40: Gray
    return '#b0d840'; // 41-45: Green
};

generateBtn.addEventListener('click', () => {
    // 1. Fade out existing numbers
    const existingNumbers = numbersContainer.querySelectorAll('.number');
    if (existingNumbers.length > 0) {
        existingNumbers.forEach(num => num.classList.add('fade-out'));
        // Wait for fade-out to finish before generating new numbers
        setTimeout(generateNewNumbers, 500); // 500ms is the animation duration
    } else {
        generateNewNumbers();
    }
});

function generateNewNumbers() {
    // 2. Clear container and generate new numbers
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    // 3. Create and fade in new numbers with a delay
    Array.from(numbers).sort((a, b) => a - b).forEach((number, index) => {
        const circle = document.createElement('div');
        circle.classList.add('number');
        circle.textContent = number;
        circle.style.backgroundColor = getGradeColor(number);
        numbersContainer.appendChild(circle);

        // Staggered fade-in effect
        setTimeout(() => {
            circle.classList.add('fade-in');
        }, index * 100); // 100ms delay between each number
    });
}

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Set initial theme
document.body.classList.add('light-mode');
