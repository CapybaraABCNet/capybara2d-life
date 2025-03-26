const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let capybara = {
    x: 50,
    y: 50,
    width: 150,
    height: 130,
    speed: 15,
    image: new Image()
};

// Загружаем изображение капибары
capybara.image.src = 'https://static.donationalerts.ru/uploads/images/7511609/ca69f09c152c8267136dcba3000ab6d7.jpeg';

function drawCapybara() {
    ctx.drawImage(capybara.image, capybara.x, capybara.y, capybara.width, capybara.height);
}

function drawBorder() {
    ctx.strokeStyle = 'black'; // Цвет границы
    ctx.lineWidth = 5; // Ширина границы
    ctx.strokeRect(0, 0, canvas.width, canvas.height); // Рисуем границу
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем канвас
    drawBorder(); // Рисуем границу
    drawCapybara(); // Рисуем капибару
}

function moveCapybara(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (capybara.y - capybara.speed >= 0) {
                capybara.y -= capybara.speed;
            }
            break;
        case 'ArrowDown':
            if (capybara.y + capybara.height + capybara.speed <= canvas.height) {
                capybara.y += capybara.speed;
            }
            break;
        case 'ArrowLeft':
            if (capybara.x - capybara.speed >= 0) {
                capybara.x -= capybara.speed;
            }
            break;
        case 'ArrowRight':
            if (capybara.x + capybara.width + capybara.speed <= canvas.width) {
                capybara.x += capybara.speed;
            }
            break;
    }
    update();
}




document.addEventListener('keydown', moveCapybara);
capybara.image.onload = update; // Обновляем игру после загрузки изображения



