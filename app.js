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

// saveButton.onclick = () => {
//     const canvas = document.createElement('canvas');
//     canvas.width = rectangle.offsetWidth;
//     canvas.height = rectangle.offsetHeight;
  
//     const ctx = canvas.getContext('2d');
//     ctx.fillStyle = 'white'; // 背景色を指定（必要に応じて変更してください）
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//     const data = new XMLSerializer().serializeToString(rectangle);
//     console.log(data)
  
//     const img = new Image();
//     img.onload = () => {
//       ctx.drawImage(img, 0, 0);
  
//       const link = document.createElement('a');
//       link.href = canvas.toDataURL('image/png');
//       link.download = 'rectangle_image.png';
//       link.click();
//       console.log("a")
//     };
//     img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data);
//     console.log(img)

//     const link = document.createElement('a');
//       link.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data);
//       link.download = 'rectangle_image.png';
//       link.click();
//   };

saveButton.onclick = () => {
  html2canvas(rectangle).then((canvas) => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'rectangle_image.png';
    link.click();
  });
  //新しくキャンバスを作ってhtml2canvas(rectangle) を貼り付ける


};

var mem_canvas;

    function createCanvas() {
      mem_canvas = document.createElement("canvas");
      mem_canvas.width = 64;
      mem_canvas.height = 64;
      var context = mem_canvas.getContext('2d');
      context.fillStyle = "rgb(0,0,192)";
      context.fillRect(0, 0, 64, 64);
    }