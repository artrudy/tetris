var figuresArray = ["straight", "square", "T", "L", "skew"];
var gridColumns = 10;
var gridRows = 18;
// const cellSize = Math.min(canvas.width / gridColumns, canvas.height / gridRows);
var Square = /** @class */ (function () {
    function Square(x, y) {
        this.x = x;
        this.y = y;
    }
    Square.prototype.moveLeft = function () {
        if (this.x > 0) {
            this.x -= 1;
        }
    };
    Square.prototype.moveRight = function () {
        if (this.x + Square.size < gridColumns) {
            this.x += 1;
        }
    };
    Square.prototype.moveDown = function () {
        if (this.y + Square.size < gridRows) {
            this.y += Square.speed;
        }
    };
    Square.prototype.draw = function (ctx, cellSize) {
        ctx.fillStyle = "blue";
        var x = this.x * cellSize;
        var y = this.y * cellSize;
        ctx.fillRect(x, y, Square.size * cellSize, Square.size * cellSize);
    };
    Square.prototype.setSpeed = function (speed) {
        Square.speed = speed;
    };
    Square.size = 2;
    Square.speed = 0;
    return Square;
}());
var square;
function handleKeyDown(event) {
    switch (event.key) {
        case "ArrowLeft":
            square.moveLeft();
            break;
        case "ArrowRight":
            square.moveRight();
            break;
    }
}
function setSpeed(speed) {
    square.setSpeed(speed);
}
document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.querySelector("#canvas");
    var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    var gridColumns = 10;
    var gridRows = 18;
    var cellSize = Math.min(canvas.width / gridColumns, canvas.height / gridRows);
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
