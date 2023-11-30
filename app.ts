const gridColumns = 10;
const gridRows = 20;

const vacant = "black";
const color = "darkgreen";

let board: string[][] = [];

const Z = [
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0],
  ],
];

const S = [
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0],
  ],
  [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1],
  ],
];

const J = [
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
  ],
  [
    [0, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
];

const T = [
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  [
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 1],
  ],
];

const L = [
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
  ],
];

const I = [
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ],
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
];

const O = [
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
];

function Piece(Tetromino) {
  this.tetromino = tetromino;
  this.tetrominoN = 0;
  this.activeTetromino = this.tetromino[this.tetrominoN];
  this.x = 3;
  this.y = -2;
}
for (let r = 0; r <= gridRows; r += 1) {
  board[r] = [];
  for (let c = 0; c <= gridColumns; c += 1) {
    board[r][c] = vacant;
  }
}

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;

const SQ = canvas.height / gridRows;
console.log(SQ);

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

drawSquare(0, 0, color);

function drawTetromino() {
  let piece = J[0];
  for (let r = 0; r < piece.length; r += 1) {
    for (let c = 0; c < piece.length; c += 1) {
      if (piece[r][c]) {
        drawSquare(c, r, color);
      }
    }
  }
}

drawTetromino();
