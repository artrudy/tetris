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

const Pieces = [Z, S, T, O, I, L, J];



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

// function drawTetromino() {
//   let piece = J[0];
//   for (let r = 0; r < piece.length; r += 1) {
//     for (let c = 0; c < piece.length; c += 1) {
//       if (piece[r][c]) {
//         drawSquare(c, r, color);
//       }
//     }
//   }
// }

// drawTetromino();

function draw() {
  Piece.prototype.draw = function () {
    for (let r = 0; r < this.activeTetromino.length; r += 1){
      for (let c = 0; c < this.activeTetromino[r][c]){
        drawSquare(this.x + c, this.y + r, color);
      }
    }
  }
}

function unDraw() {
  Piece.prototype.draw = function () {
    for (let r = 0; r < this.activeTetromino.length; r += 1){
      for (let c = 0; c < this.activeTetromino[r][c]){
        drawSquare(this.x + c, this.y + r, 'black');
      }
    }
  }
}


document.addEventListener('keydown', control);

function control(event: KeyboardEvent) {
  const { key } = event;

  if (key === "ArrowLeft") {
    piece.moveLeft();
    dropStart = Date.now();
  } else if (key === "ArrowUp") {
    piece.rotate();
    dropStart = Date.now();

  } else if (key === "ArrowRight") {
    piece.moveRight();
    dropStart = Date.now();

  } else if (key === "ArrowDown") {
    piece.moveDown();
  }
}


Piece.prototype.collision = function (x, y, piece) {
  
}

Piece.prototype.moveDown = function () {
  if (!this.collision(0, 1, this.activeTetromino)) {
    this.unDraw();
    this.y++;
    this.draw();  
  } else {
    
  }  
}

Piece.prototype.moveLeft = function () {
    if (!this.collision(-1, 0, this.activeTetromino)) {
  this.unDraw();
  this.x--;
      this.draw();
    } else {
      this.lock();
      piece = randomPiece();
    
  }  
}

Piece.prototype.moveRight = function () {
      if (!this.collision(1, 0, this.activeTetromino)) {

  this.unDraw();
  this.x++;
  this.draw();  
} else {
    
  }  
}


Piece.prototype.collision = function (x: number, y: number, piece: number[][]) {
  for (let r = 0; r < piece.length; r += 1){
    for (let c = 0; c < piece.length; c += 1){
      if (!piece[r][c]) { continue }
      
      let newX = this.x + c + x;
      
      let newY = this.y + r + y;

      if (newX < 0 || newX >= gridColumns || newY > gridRows) {
        return true
      }

      if (newY < 0) { continue };

      if (board[newY][newX] !== vacant) {
        return true;
      }
    }
  }
}

Piece.prototype.rotate = function () {

  let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];

  let kick = 0;

  if (this.collision(0, 0, nextPattern)) {
    if (this.x > gridColumns / 2) {
      kick = -1;
    } else {
      kick = 1;
    }
  }

  if (!this.collision(kick, 0, nextPattern)) {
    this.unDraw();
    this.x += kick;
    this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.draw();  
  } 
}

function randomPiece() {
  let randomN = Math.floor(Math.random() * Pieces.length);

  return new Piece(Pieces[randomN]);
}

Piece.prototype.lock = function () {
  for (let r = 0; r < this.activeTetromino.length; r += 1) {
    for (let c = 0; c < this.activeTetromino.length; c += 1){
      if (!this.activeTetromino[r][c]) {
        continue;
      }
      if (this.y + r < 0) {
        gameOver = true;
        alert('game over!');
        break;
      }
      board[this.y + r][this.x + c] = color;
    }
  }
}

function fullRow(){
  for (let r = 0; r < gridRows; r += 1){
    let isRowFulll = true;
    for (let c = 0; c < gridColumns; c += 1){
      isRowFulll = isRowFulll&&(board[r][c] != vacant)
    }
    if (isRowFulll) {
      for (let y = r; y > 1; y -= 1){
        for (let c = 0; c < gridColumns; c += 1){
          board[y][c] = board[y - 1][c];
        }
        board[8][10] = board[7][10]
      }
      for (let c = 0; c < gridColumns; c += 1){
        board[0][c] = vacant;
      }
      score += 10;
    }
  }
  drawBoard();
}


let dropStart = Date.now();

let gameOver = false;
  
  function drop() {
    let now = Date.now();

    let delta = now - dropStart;

    if (delta > 1000) {
      piece.moveDown();
      dropStart = Date.now();
    }
    if (!gameOver) {
      requestAnimationFrame(drop);
    }
  }

drop();