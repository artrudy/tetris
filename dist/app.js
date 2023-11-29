var gridColumns = 10;
var gridRows = 20;
var vacant = "black";
var board = [];
for (var r = 0; r < gridRows; r += 1) {
    board[r] = [];
    for (var c = 0; c < gridColumns; c += 1) {
        board[r][c] = vacant;
    }
}
var canvas = document.querySelector("#canvas");
var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
var SQ = Math.min(canvas.width / gridColumns, canvas.height / gridRows);
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
drawSquare(0, 6, "blue");
