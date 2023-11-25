const figuresArray: Array<string> = ["straight", "square", "T", "L", "skew"];

const gridColumns = 10;
const gridRows = 18;
// const cellSize = Math.min(canvas.width / gridColumns, canvas.height / gridRows);

class Square {
  x: number;
  y: number;
  static size: number = 2;
  static speed: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= 1;
    }
  }

  moveRight() {
    if (this.x + Square.size < gridColumns) {
      this.x += 1;
    }
  }

  moveDown() {
    if (this.y + Square.size < gridRows) {
      this.y += Square.speed;
    }
  }

  draw(ctx: CanvasRenderingContext2D, cellSize: number) {
    ctx.fillStyle = "blue";
    const x = this.x * cellSize;
    const y = this.y * cellSize;
    ctx.fillRect(x, y, Square.size * cellSize, Square.size * cellSize);
  }

  setSpeed(speed: number) {
    Square.speed = speed;
  }
}

let square: Square;

function handleKeyDown(event: KeyboardEvent) {
  switch (event.key) {
    case "ArrowLeft":
      square.moveLeft();
      break;
    case "ArrowRight":
      square.moveRight();
      break;
  }
}

function setSpeed(speed: number) {
  square.setSpeed(speed);
}

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const ctx = canvas?.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const gridColumns = 10;
  const gridRows = 18;
  const cellSize = Math.min(
    canvas.width / gridColumns,
    canvas.height / gridRows
  );

  square = new Square(gridColumns / 2 - 1, 0);

  function animate() {
    square.moveDown();
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      square.draw(ctx, cellSize);
    }
    requestAnimationFrame(animate);
  }

  document.addEventListener("keydown", handleKeyDown);

  setSpeed(0.05);

  animate();
});
