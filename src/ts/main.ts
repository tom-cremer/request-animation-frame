import {Rectangle} from './shapes/Rectangle';
import {random} from "./helper";


const canvasElement: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d');

const rect: Rectangle = new Rectangle(30, 40, 'pink', ctx, canvasElement);


rect.draw();

function animate() {
    rect.update();
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    rect.draw();
    requestAnimationFrame(animate);
}

animate();




canvasElement.addEventListener('click', (e) => {
   const x = e.offsetX;
   const y = e.offsetY;

   if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
       rect.color = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
   }
});