var COLS = 10, ROWS = 20;
var board = [];
var lose;
var interval;
var current;
var currentX, currentY;
var shapes = [
    [ 1, 1, 1, 1 ],
    [ 1, 1, 1, 0,
      1 ],
    [ 1, 1, 1, 0,
      0, 0, 1 ],
    [ 1, 1, 0, 0,
      1, 1 ],
    [ 1, 1, 0, 0,
      0, 1, 1 ],
    [ 0, 1, 1, 0,
      1, 1 ],
    [ 0, 1, 0, 0,
      1, 1, 1 ]
];

var colors = [
	'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
	];