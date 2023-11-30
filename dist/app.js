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
function drawTetromino() {
    var piece = J[0];
    for (var r = 0; r < piece.length; r += 1) {
        for (var c = 0; c < piece.length; c += 1) {
            if (piece[r][c]) {
                drawSquare(c, r, color);
            }
        }
    }
}
drawTetromino();
