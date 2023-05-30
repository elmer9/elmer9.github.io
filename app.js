const rectangle = document.getElementById('rectangle');
const saveButton = document.getElementById('saveButton');

rectangle.onclick = (ev) => {
    const text = document.createElement('span');
    text.textContent = 'りん';
    text.style.position = 'absolute';
    text.style.left = getRandomPosition(rectangle.offsetWidth - 50) + 'px';
    text.style.top = getRandomPosition(rectangle.offsetHeight - 50) + 'px';
    text.style.fontSize = '40px';
    text.style.color='red';
    rectangle.appendChild(text);
};

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

saveButton.onclick = () => {
    const canvas = document.createElement('canvas');
    canvas.width = rectangle.offsetWidth;
    canvas.height = rectangle.offsetHeight;
  
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(rectangle, 0, 0);
  
    const image = canvas.toDataURL('image/png');
  
    const link = document.createElement('a');
    link.href = image;
    link.download = 'rectangle_image.png';
    link.click();
  };