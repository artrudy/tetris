document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("canvas");
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }
    function createTetromino() {
        var tetromino = [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0],
        ];
        return tetromino;
    }
    function drawTetromino(tetromino, startX, startY) {
        for (var y = 0; y < tetromino.length; y++) {
            for (var x = 0; x < tetromino[y].length; x++) {
                if (tetromino[y][x]) {
                    var cell = document.createElement("div");
                    cell.className = "tetromino-cell l"; // Добавляем класс "l" для фигуры "L"
                    cell.style.gridColumn = startX + x + 1;
                    cell.style.gridRow = startY + y + 1;
                    canvas.appendChild(cell);
                }
            }
        }
    }
    function clearCanvas() {
        var cells = document.querySelectorAll(".tetromino-cell");
        cells.forEach(function (cell) { return cell.remove(); });
    }
    function moveTetrominoDown(tetromino, startX, startY) {
        startY++;
        clearCanvas();
        drawTetromino(tetromino, startX, startY);
    }
    var tetromino = createTetromino();
    var startX = 0;
    var startY = 0;
    drawTetromino(tetromino, startX, startY);
    setInterval(function () {
        moveTetrominoDown(tetromino, startX, startY);
    }, 1000);
});
