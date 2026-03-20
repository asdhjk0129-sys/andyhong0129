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
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    Array.from(numbers).sort((a, b) => a - b).forEach(number => {
        const circle = document.createElement('div');
        circle.classList.add('number');
        circle.textContent = number;
        circle.style.backgroundColor = getGradeColor(number);
        numbersContainer.appendChild(circle);
    });
});

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Set initial theme
document.body.classList.add('light-mode');
