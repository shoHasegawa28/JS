'use strict';

var MAX_BOARD_X = 10;
var MAX_BOARD_Y = 20;

var CELLS_WIDTH = 25;
var CELLS_HEIGHT = 25;

var board = new Array(MAX_BOARD_X * MAX_BOARD_Y + 1);
var board2;
var cells = [];

var key_x = 0;
var key_y = 0;

var mino = [
[
	[
		[1,1,1,1],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0]
	],
	[
		[1,1,1,1],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0],
		[1,0,0,0]
	]
],
[
	[
		[2,2,0,0],
		[2,2,0,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[2,2,0,0],
		[2,2,0,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[2,2,0,0],
		[2,2,0,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[2,2,0,0],
		[2,2,0,0],
		[0,0,0,0],
		[0,0,0,0]
	]
],
[
	[
		[0,3,3,0],
		[3,3,0,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[3,0,0,0],
		[3,3,0,0],
		[0,3,0,0],
		[0,0,0,0]
	],
	[
		[0,3,3,0],
		[3,3,0,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[3,0,0,0],
		[3,3,0,0],
		[0,3,0,0],
		[0,0,0,0]
	]
],
[
	[
		[4,4,0,0],
		[0,4,4,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[0,4,0,0],
		[4,4,0,0],
		[4,0,0,0],
		[0,0,0,0]
	],
	[
		[4,4,0,0],
		[0,4,4,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[0,4,0,0],
		[4,4,0,0],
		[4,0,0,0],
		[0,0,0,0]
	]
],
[
	[
		[5,5,0,0],
		[5,0,0,0],
		[5,0,0,0],
		[0,0,0,0]
	],
	[
		[5,0,0,0],
		[5,5,5,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[0,5,0,0],
		[0,5,0,0],
		[5,5,0,0],
		[0,0,0,0]
	],
	[
		[5,5,5,0],
		[0,0,5,0],
		[0,0,0,0],
		[0,0,0,0]
	]
],
[
	[
		[6,0,0,0],
		[6,0,0,0],
		[6,6,0,0],
		[0,0,0,0]
	],
	[
		[0,0,6,0],
		[6,6,6,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[6,6,0,0],
		[0,6,0,0],
		[0,6,0,0],
		[0,0,0,0]
	],
	[
		[6,6,6,0],
		[6,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	]
],
[
	[
		[7,0,0,0],
		[7,7,0,0],
		[7,0,0,0],
		[0,0,0,0]
	],
	[
		[0,7,0,0],
		[7,7,7,0],
		[0,0,0,0],
		[0,0,0,0]
	],
	[
		[0,7,0,0],
		[7,7,0,0],
		[0,7,0,0],
		[0,0,0,0]
	],
	[
		[7,7,7,0],
		[0,7,0,0],
		[0,0,0,0],
		[0,0,0,0]
	]
]
];
var color =[
	"grey",
	"red",
	"aqua",
	"lime",
	"yellow",
	"green",
	"blue",
	"white"

]

var base;
var block;

var mino_type = 0;
var mino_vect = 0;

var finflg = 0;

var id;
window.onload = function(){
	var startbtn = document.getElementById("startbtn");
	var stopbtn = document.getElementById("stopbtn");
	startbtn.onclick = start;
	stopbtn.onclick = stop;
	base = document.getElementById("bord");
	document.body.addEventListener('keydown',keyEvent);

	board.fill(0);
	board2 = board.slice();
	mino_type =  Math.floor(Math.random() * Math.floor(7));

	for(var i = 0;i < MAX_BOARD_Y;i++){
		for(var j = -1;j <= MAX_BOARD_X;j++){
			if(j == -1 ){
				console.log(j);
				var wall = new Block();
				wall.inialize();
				wall.draw(0,i*CELLS_HEIGHT);
				wall.setcolor("#222222");
			}else if(j == MAX_BOARD_X){
				var wall = new Block();
				wall.inialize();
				wall.draw(275,i*CELLS_HEIGHT);
				wall.setcolor("#222222");
			}else{
				cells.push(new Block());
				cells[(i * MAX_BOARD_X) + j].inialize();
				cells[(i * MAX_BOARD_X) + j].draw(j*CELLS_WIDTH + 25,i*CELLS_HEIGHT);
			}

		}
	}
	for(var i = 0;i <= MAX_BOARD_X + 1;i++){
		var wall = new Block();
		wall.inialize();
		wall.draw(i * CELLS_WIDTH, CELLS_HEIGHT*MAX_BOARD_Y);
		wall.setcolor("#222222");
	}

}

function draw(){
	for(var i = 0;i < MAX_BOARD_Y;i++){
		for(var j = 0;j < MAX_BOARD_X;j++){
			cells[(i * MAX_BOARD_X) + j].setcolor(color[board[j + (i * MAX_BOARD_X)]]);
		}
	}
}

//移動できるか判定
function isMinoJuge(x,y){
	if(x < 0 || y < 0 || x > MAX_BOARD_X || y > MAX_BOARD_Y){
			return false;
	}
	for(var i2 = 0;i2 < 4;i2++){
		for(var j2 = 0;j2 < 4;j2++){

			if(mino[mino_type][mino_vect][i2][j2] != 0){
				if(MAX_BOARD_X  <= j2 + x || MAX_BOARD_Y  <=  y + i2 || board2[(y * MAX_BOARD_X + i2 * MAX_BOARD_X ) + (x + j2)] != 0){
					return false;
				}
			}
		}
	}
	return true;
}


function dropflg(){
	var deleteflg = 0;
	for(var i = 0;i < MAX_BOARD_Y;i++){
		var len = 0;
		for(var j = 0;j < MAX_BOARD_X;j++){
			if(board[i * MAX_BOARD_X + j] != 0){
				len++;
			}
		}
		if(len == MAX_BOARD_X){
			deleteflg = 1;
			for(var j = 0;j < MAX_BOARD_X;j++){
				board[i * MAX_BOARD_X + j] = 0;
			}
		}
		if(deleteflg == 1){
				deleteflg = 0;
				for(var j2 = 0;j2 < MAX_BOARD_X;j2++){
					for(var i2 = i;i2 > 0;i2--){
					 	board[i2 * MAX_BOARD_X + j2] = board[(i2-1) * MAX_BOARD_X + j2];
				}
			}
			console.log(i);
		}
	}

}
//mino
function update(){

	board = board2.slice();
	if(board[key_x] != 0){
		finflg = 1;
		clearInterval(id);
	}else{
		for(var i = 0;i < MAX_BOARD_Y;i++){
			for(var j = 0;j < MAX_BOARD_X;j++){
				if((key_y * MAX_BOARD_X) == i * MAX_BOARD_X && key_x == j){
					for(var i2 = 0;i2 < 4;i2++){
						for(var j2 = 0;j2 < 4;j2++){
							if(mino[mino_type][mino_vect][i2][j2] != 0){
								board[(i * MAX_BOARD_X + i2 * MAX_BOARD_X ) + (j + j2)] = mino_type+1;
							}
						}
					}
				}
			}

		}
	}


}
//キーボートイベント
function keyEvent(e){
	//console.log(key_x + "," + key_y);
	switch(event.key){
		case 'a':
			if(isMinoJuge(key_x-1,key_y)){
				key_x = (key_x + MAX_BOARD_X - 1) % MAX_BOARD_X;
			}
			break;
		case 'd':
			if(isMinoJuge(key_x+1,key_y)){
				key_x = (key_x +  1) % MAX_BOARD_X;
			}
			break;
		case 's':
			if(isMinoJuge(key_x,key_y + 1)){
				key_y = (key_y +  1) % MAX_BOARD_Y;
			}
			break;
		case ' ':
				mino_vect = (mino_vect + 1) % 4;
			if(!isMinoJuge(key_x,key_y)){
				mino_vect = (mino_vect + 3) % 4;
			}
			break;
	}
	if(finflg != 1){
		update();
		draw();
	}

}
function Loop(){
	if(isMinoJuge(key_x,key_y+1)){
		key_y++;
	}else{
		dropflg();
		board2 = board.slice();
		mino_type =  Math.floor(Math.random() * Math.floor(7));
		key_y = 0;
		key_x = 0;
	}
	update();
	draw();
}
//一次退避
function Block(){
	var mino_dom;
	var mino_x;
	var mino_y;

	this.inialize = function(){
		mino_dom = document.createElement("div");
		mino_dom.className = "block";
	}

	this.setcolor = function(color){
		mino_dom.style.backgroundColor = color;
	}
	this.draw = function(x,y){
		mino_dom.style.top = y + "px";
		mino_dom.style.left = x + "px";
		base.appendChild(mino_dom);
	}
}
function start(){
		id = setInterval(Loop, 1000);
		update();
		draw();
}
function stop(){
	clearInterval(id);
}
