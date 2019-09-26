let text = "";
let isCaretVisible = true;
let caretX = 10;

setInterval(() => {
  isCaretVisible = !isCaretVisible;
}, 500);

document.addEventListener("keydown", e => {
  if (e.key === "Backspace") {
    text = text.slice(0, -1);
  } else {
    text += e.key;
  }
  caretX = 10 + ctx.measureText(text).width;
});

const WIDTH = 500;
const HEIGHT = 500;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const pixelRatio = window.devicePixelRatio || 1;

canvas.width = WIDTH * pixelRatio;
canvas.height = HEIGHT * pixelRatio;

canvas.style.width = WIDTH + "px";
canvas.style.height = HEIGHT + "px";

const ctx = canvas.getContext("2d");

ctx.scale(pixelRatio, pixelRatio);

const render = () => {
  requestAnimationFrame(render);

  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.font = "48px serif";
  ctx.fillText(text, 10, 50);
  if (isCaretVisible) {
    ctx.fillRect(caretX, 10, 1, 50);
  }
};

render();
