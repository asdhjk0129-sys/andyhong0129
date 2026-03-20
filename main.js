
const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');

const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
};

const createNumberCircle = (number) => {
    const circle = document.createElement('div');
    circle.classList.add('number-circle');
    circle.textContent = number;

    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;

    return circle;
};

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const lottoNumbers = generateLottoNumbers();
    lottoNumbers.forEach(number => {
        const circle = createNumberCircle(number);
        numbersContainer.appendChild(circle);
    });
});
