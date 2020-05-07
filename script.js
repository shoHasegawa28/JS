'use strict';

var MAX_BOARD_X = 10;
var MAX_BOARD_Y = 20;

var CELLS_WIDTH = 25;
var CELLS_HEIGHT = 25;

var MAX_MINO_X = 4;
var MAX_MINO_Y = 4;

var MAX_MINO_VECT = 4;

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
var nextMinoBase = [];

var mino_type = 0;
var next_mino_type = 0;

var mino_vect = 0;

var finflg = 0;
var stopbtn = 0;

var startbtn;

var id;
window.onload = inialize;
function inialize(){
	startbtn = document.getElementById("startbtn");
	stopbtn = document.getElementById("stopbtn");
	startbtn.onclick = start;
	stopbtn.onclick = stop;

	base = document.getElementById("bord");
	document.body.addEventListener('keydown',keyEvent);



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
		initNextMino();
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
	for(var i2 = 0;i2 < MAX_MINO_Y;i2++){
		for(var j2 = 0;j2 < MAX_MINO_X;j2++){

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
function isFinalJuge(){
	var finflg = false;
	if(board[key_x] != 0 && key_y == 0){
		finflg = 1;
		clearInterval(id);
		finflg = true;
	}
	return finflg;
}
//mino
function update(){
	board = board2.slice();
	if(isFinalJuge()){
		return;
	}

	for(var i = 0;i < MAX_BOARD_Y;i++){
		for(var j = 0;j < MAX_BOARD_X;j++){
			if((key_y * MAX_BOARD_X) == i * MAX_BOARD_X && key_x == j){
				for(var i2 = 0;i2 < MAX_MINO_Y;i2++){
					for(var j2 = 0;j2 < MAX_MINO_X;j2++){
						if(mino[mino_type][mino_vect][i2][j2] != 0){
							board[(i * MAX_BOARD_X + i2 * MAX_BOARD_X ) + (j + j2)] = mino_type+1;
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
				mino_vect = (mino_vect + 1) % MAX_MINO_VECT;
			if(!isMinoJuge(key_x,key_y)){
				mino_vect = (mino_vect + 3) % MAX_MINO_VECT;
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
		resetStatus();
		setNextMino();
		nextMinoDraw();
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
		this.setPos(x,y);
		base.appendChild(mino_dom);
	}
	this.setPos =function(x,y){
		mino_dom.style.top = y + "px";
		mino_dom.style.left = x + "px";
	}

	this.getDom = function(){
		return mino_dom;
	}
}

function start(){
		id = setInterval(Loop, 1000);
		mino_type_reset();
		resetStatus();
		resetBoard();
		nextMinoDraw();
		update();
		draw();

}

function stop(){
	clearInterval(id);
}

function resetStatus(){
	key_y = 0;
	key_x = 0;
}

function resetBoard(){
	finflg = 0;
	mino_type_reset();
	board.fill(0);
	board2 = board.slice();
	cells.forEach((item, i) => {
		cells[i].setcolor("grey");
	});
}
	function setNextMino(){
		mino_type = next_mino_type;
		next_mino_type =  Math.floor(Math.random() * Math.floor(7));
	}
	function mino_type_reset(){
		mino_type =  Math.floor(Math.random() * Math.floor(7));
		next_mino_type = Math.floor(Math.random() * Math.floor(7));
	}

function initNextMino(){
	var next = document.getElementById("nextmino");
	for(var i = 0;i < MAX_MINO_Y;i++){
		for(var j = 0;j < MAX_MINO_X;j++){
			nextMinoBase.push(new Block());
			nextMinoBase[(i * MAX_MINO_X) + j].inialize();
			nextMinoBase[(i * MAX_MINO_X) + j].setcolor("grey");
			nextMinoBase[(i * MAX_MINO_X) + j].setPos(j * 25,i * 25);
			next.appendChild(nextMinoBase[(i * MAX_MINO_X) + j].getDom());
		}
	}
}
function nextMinoDraw(){
	for(var i = 0;i < MAX_MINO_Y;i++){
		for(var j = 0;j < MAX_MINO_X;j++){
			nextMinoBase[(i * MAX_MINO_X) + j].setcolor(color[mino[next_mino_type][0][i][j]]);
		}
	}
}
