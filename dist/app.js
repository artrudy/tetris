var gridColumns = 10;
var gridRows = 20;
var vacant = "black";
var color = "darkgreen";
var board = [];
var Z = [
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
var S = [
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
var J = [
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
var T = [
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
var L = [
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
var I = [
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
var O = [
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
var Pieces = [Z, S, T, O, I, L, J];
function Piece(Tetromino) {
    this.tetromino = tetromino;
    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.x = 3;
    this.y = -2;
}
for (var r = 0; r <= gridRows; r += 1) {
    board[r] = [];
    for (var c = 0; c <= gridColumns; c += 1) {
        board[r][c] = vacant;
    }
}
var canvas = document.querySelector("#canvas");
var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
var SQ = canvas.height / gridRows;
console.log(SQ);
function drawSquare(x, y, color) {
    ctx.fillStyle = "" + color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}
function drawBoard() {
    for (var r = 0; r < gridRows; r += 1) {
        for (var c = 0; c < gridColumns; c += 1)
            drawSquare(c, r, board[r][c]);
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
        for (var r = 0; r < this.activeTetromino.length; r += 1) {
            for (var c = 0; c < this.activeTetromino[r][c];) {
                drawSquare(this.x + c, this.y + r, color);
            }
        }
    };
}
function unDraw() {
    Piece.prototype.draw = function () {
        for (var r = 0; r < this.activeTetromino.length; r += 1) {
            for (var c = 0; c < this.activeTetromino[r][c];) {
                drawSquare(this.x + c, this.y + r, 'black');
            }
        }
    };
}
document.addEventListener('keydown', control);
function control(event) {
    var key = event.key;
    if (key === "ArrowLeft") {
        piece.moveLeft();
        dropStart = Date.now();
    }
    else if (key === "ArrowUp") {
        piece.rotate();
        dropStart = Date.now();
    }
    else if (key === "ArrowRight") {
        piece.moveRight();
        dropStart = Date.now();
    }
    else if (key === "ArrowDown") {
        piece.moveDown();
    }
}
Piece.prototype.collision = function (x, y, piece) {
};
Piece.prototype.moveDown = function () {
    if (!this.collision(0, 1, this.activeTetromino)) {
        this.unDraw();
        this.y++;
        this.draw();
    }
    else {
    }
};
Piece.prototype.moveLeft = function () {
    if (!this.collision(-1, 0, this.activeTetromino)) {
        this.unDraw();
        this.x--;
        this.draw();
    }
    else {
        this.lock();
        piece = randomPiece();
    }
};
Piece.prototype.moveRight = function () {
    if (!this.collision(1, 0, this.activeTetromino)) {
        this.unDraw();
        this.x++;
        this.draw();
    }
    else {
    }
};
Piece.prototype.collision = function (x, y, piece) {
    for (var r = 0; r < piece.length; r += 1) {
        for (var c = 0; c < piece.length; c += 1) {
            if (!piece[r][c]) {
                continue;
            }
            var newX = this.x + c + x;
            var newY = this.y + r + y;
            if (newX < 0 || newX >= gridColumns || newY > gridRows) {
                return true;
            }
            if (newY < 0) {
                continue;
            }
            ;
            if (board[newY][newX] !== vacant) {
                return true;
            }
        }
    }
};
Piece.prototype.rotate = function () {
    var nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
    var kick = 0;
    if (this.collision(0, 0, nextPattern)) {
        if (this.x > gridColumns / 2) {
            kick = -1;
        }
        else {
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
};
function randomPiece() {
    var randomN = Math.floor(Math.random() * Pieces.length);
    return new Piece(Pieces[randomN]);
}
Piece.prototype.lock = function () {
    for (var r = 0; r < this.activeTetromino.length; r += 1) {
        for (var c = 0; c < this.activeTetromino.length; c += 1) {
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
};
function fullRow() {
    for (var r = 0; r < gridRows; r += 1) {
        var isRowFulll = true;
        for (var c = 0; c < gridColumns; c += 1) {
            isRowFulll = isRowFulll && (board[r][c] != vacant);
        }
        if (isRowFulll) {
            for (var y = r; y > 1; y -= 1) {
                for (var c = 0; c < gridColumns; c += 1) {
                    board[y][c] = board[y - 1][c];
                }
                board[8][10] = board[7][10];
            }
            for (var c = 0; c < gridColumns; c += 1) {
                board[0][c] = vacant;
            }
            score += 10;
        }
    }
    drawBoard();
}
var dropStart = Date.now();
var gameOver = false;
function drop() {
    var now = Date.now();
    var delta = now - dropStart;
    if (delta > 1000) {
        piece.moveDown();
        dropStart = Date.now();
    }
    if (!gameOver) {
        requestAnimationFrame(drop);
    }
}
drop();
