const rectangle = document.getElementById('rectangle');

rectangle.onclick = (ev) => {
    const text = document.createElement('span');
    text.textContent = 'りん';
    text.style.position = 'absolute';
    text.style.left = getRandomPosition(rectangle.offsetWidth - 50) + 'px';
    text.style.top = getRandomPosition(rectangle.offsetHeight - 50) + 'px';
    text.style.fontSize = 'larger';
    rectangle.appendChild(text);
};

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}
