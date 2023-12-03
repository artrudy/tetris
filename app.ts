const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;

const gridColumns = 10;

const gridRows = 20;

const SQ = canvas.height / gridRows;

console.log(SQ);

const vacant = "white";

const color = "darkgreen";

function drawSquare(x, y, color) {
  ctx.fillStyle = `${color}`;
  ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
  ctx.strokeStyle = "black";
  ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

drawSquare(1, 1, color);

let board: string[][] = [];

for (let r = 0; r < gridRows; r += 1) {
  board[r] = [];
  for (let c = 0; c < gridColumns; c += 1) {
    board[r][c] = vacant;
  }
}

function drawBoard() {
  for (let r = 0; r < gridRows; r += 1) {
    for (let c = 0; c < gridColumns; c += 1) {
      drawSquare(c, r, board[r][c]);
    }
  }
}
drawBoard();

function Piece(tetromino, color) {
  this.tetromino = tetromino;
  this.color = color;

  this.tetrominoN = 0;
  this.activeTetromino = this.tetromino[this.tetrominoN];

  this.x = 2;
  this.y = 4;
}

drawSquare(0, 0, color);

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

const PIECES = [
  [Z, "red"],
  [S, "darkgreen"],
  [T, "darkgreen"],
  [O, "darkgreen"],
  [L, "darkgreen"],
  [I, "darkgreen"],
  [J, "darkgreen"],
];

const Pieces = [Z, S, T, O, I, L, J];

let p = new Piece(PIECES[0][0], PIECES[0][1]);

for (let r = 0; r <= gridRows; r += 1) {
  board[r] = [];
  for (let c = 0; c <= gridColumns; c += 1) {
    board[r][c] = vacant;
  }
}

Piece.prototype.fill = function (color: string) {
  for (let r = 0; r < this.activeTetromino.length; r += 1) {
    for (let c = 0; c < this.activeTetromino.length; c += 1) {
      if (this.activeTetromino[r][c]) {
        drawSquare(this.x + c, this.y + r, color);
      }
    }
  }
};

Piece.prototype.draw = function () {
  this.fill(this.color);
};

Piece.prototype.unDraw = function () {
  // this.draw(vacant);
  this.fill(vacant);
};
p.draw();

Piece.prototype.moveDown = function () {
  if (!this.collision()) {
    this.unDraw();
    this.y += 1;
    this.draw();
  } else {
  }
};

Piece.prototype.moveRight = function () {
  if (!this.collision()) {
    this.unDraw();
    this.x++;
    this.draw();
  } else {
  }
};

Piece.prototype.moveLeft = function () {
  if (!this.collision()) {
    this.unDraw();
    this.x--;
    this.draw();
  } else {
  }
};

Piece.prototype.rotate = function () {
  if (!this.collision()) {
    this.unDraw();
    this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.draw();
  }
};

Piece.prototype.collision = function (x: number, y: number, piece: number[][]) {
  for (let r = 0; r < piece.length; r += 1) {
    for (let c = 0; c < piece.length; c += 1) {
      if (!piece[r][c]) {
        continue;
      }

      let newX = this.x + c + x;

      let newY = this.y + r + y;

      if (newX < 0 || newX >= gridColumns || newY >= gridRows) {
        return true;
      }

      if (newY < 0) {
        continue;
      }

      if (board[newY][newX] !== vacant) {
        return true;
      }
    }
  }
  return false;
};

document.addEventListener("keydown", control);

function control(event: KeyboardEvent): void {
  const { code } = event;

  switch (code) {
    case "ArrowLeft":
      p.moveLeft();
      dropStart = Date.now();
      break;
    case "ArrowUp":
      p.rotate();
      dropStart = Date.now();
      break;
    case "ArrowRight":
      p.moveRight();
      dropStart = Date.now();
      break;
    case "ArrowDown":
      p.moveDown();
      dropStart = Date.now();
      break;
  }
}

let dropStart = Date.now();

function drop() {
  let now = Date.now();
  let delta = now - dropStart;

  if (delta > 1000) {
    p.moveDown();
    dropStart = Date.now();
  }

  requestAnimationFrame(drop);
}

drop();

// function randomPiece() {
//   let randomN = Math.floor(Math.random() * Pieces.length);

//   return new Piece(Pieces[randomN]);
// }

// Piece.prototype.lock = function () {
//   for (let r = 0; r < this.activeTetromino.length; r += 1) {
//     for (let c = 0; c < this.activeTetromino.length; c += 1){
//       if (!this.activeTetromino[r][c]) {
//         continue;
//       }
//       if (this.y + r < 0) {
//         gameOver = true;
//         alert('game over!');
//         break;
//       }
//       board[this.y + r][this.x + c] = color;
//     }
//   }
// }

// function fullRow(){
//   for (let r = 0; r < gridRows; r += 1){
//     let isRowFulll = true;
//     for (let c = 0; c < gridColumns; c += 1){
//       isRowFulll = isRowFulll&&(board[r][c] != vacant)
//     }
//     if (isRowFulll) {
//       for (let y = r; y > 1; y -= 1){
//         for (let c = 0; c < gridColumns; c += 1){
//           board[y][c] = board[y - 1][c];
//         }
//         board[8][10] = board[7][10]
//       }
//       for (let c = 0; c < gridColumns; c += 1){
//         board[0][c] = vacant;
//       }
//       score += 10;
//     }
//   }
//   drawBoard();
// }
