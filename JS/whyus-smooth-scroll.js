// Определение функции для обработки события прокрутки
function smoothScroll(event) {
    // Получение значения прокрутки
    var delta = event.wheelDelta || -event.detail;
    var scrollTop = document.documentElement.scrollTop;
    var finalScroll = scrollTop - delta;

    // Анимированная прокрутка до значения finalScroll
    // Можно использовать любую библиотеку анимации или реализовать свою собственную логику
    // В этом примере используется библиотека jQuery для анимации прокрутки
    $('html, body').animate({ scrollTop: finalScroll }, 500);
}

// Добавление обработчика события колесика мыши
if (window.addEventListener) {
    // Для браузеров, поддерживающих событие DOMMouseScroll (например, Firefox)
    window.addEventListener('DOMMouseScroll', smoothScroll, { passive: false });
}
// Для остальных браузеров
window.onwheel = smoothScroll;
