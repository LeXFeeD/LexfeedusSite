/*// Получаем ссылки на элементы видео и svg
const video = document.getElementById('video');
const svg = document.getElementById('play-button');

// Добавляем обработчик события при клике на svg
svg.addEventListener('click', function () {
    if (video.paused) {
        // Воспроизводим видео
        video.play();
        // Устанавливаем opacity=0 для svg
        svg.style.opacity = '0';
    } else {
        // Останавливаем видео
        video.pause();
        // Восстанавливаем opacity=1 для svg
        svg.style.opacity = '1';
    }
});*/

// Получаем коллекцию всех видео и кнопок
const videos = document.querySelectorAll('.sc-cTAqQK video');
const buttons = document.querySelectorAll('.sc-cTAqQK svg');

// Добавляем обработчик события для каждой кнопки
buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const video = videos[index];
        if (video.paused) {
            // Воспроизводим видео
            video.play();
            // Устанавливаем opacity=0 для svg
            button.style.opacity = '0';
        } else {
            // Останавливаем видео
            video.pause();
            // Восстанавливаем opacity=1 для svg
            button.style.opacity = '1';
        }
    });
});
