const gridColumns = 10;
const gridRows = 20;

const vacant = "black";

let board: string[][] = [];

for (let r = 0; r < gridRows; r += 1) {
  board[r] = [];
  for (let c = 0; c < gridColumns; c += 1) {
    board[r][c] = vacant;
  }
}

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;

const SQ = Math.min(canvas.width / gridColumns, canvas.height / gridRows);

function drawSquare(x, y, color) {
  ctx.fillStyle = `${color}`;
  ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
  ctx.strokeStyle = "black";
  ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

function drawBoard() {
  for (let r = 0; r < gridRows; r += 1) {
    for (let c = 0; c < gridColumns; c += 1) drawSquare(c, r, board[r][c]);
  }
}

drawBoard();

drawSquare(0, 6, "blue");
