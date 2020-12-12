/**
 * メイン処理
 */
$(function(){

});

/**
 * TestEqualDomTextのテスト
 */
function TestEqualDomText(){

	// dom要素が存在しない場合
	console.log(EqualDomText(null,"test"));
	console.log(EqualDomText(undefined,"test"));

	// dom要素にtext属性がない場合??
	console.log(EqualDomText($("#test"),"test"));

	// dom要素の値と一致する場合
	console.log(EqualDomText($("#test2"),"domテスト"));
	
	// dom要素の値と不一致の場合
	console.log(EqualDomText($("#test2"),"test"));

}

/**
 * nodeのtext属性と文字列を比較する
 * @param {object} $elm 
 * @param {string} text
 * @returns true:textと文字列が一致した場合
 * 			false:$domが不正な場合もしくはtextと文字列が不一致の場合 
 */
function EqualDomText($elm,text){

	// 対象のnodeがnullかどうかの判定
	if(!CehckNullElement($elm)){
		return false;
	}

	// domからtextを抽出する
	let elmText = $elm.text();

	// domtextとtextを比較する
	return (elmText == text);
}

/**
 * 指定したエレメントがnullかどうかの判定
 * @param {object} $elm 
 */
function CehckNullElement($elm){
	if(!$elm){
		console.log("指定した要素は存在しません");
		return false;
	}
	return true;
}

/**
 * 対象のnodeに指定した属性が存在しているかどうかの判定をする処理
 * @param {object} $dom 
 * @param {string} name 
 */
function CheckExistenceAttribute($dom,name){
	if(!$dom.attr(name)){
		console.log($dom.text())
		console.log(name + "はこのNodeには存在してません!!")
	}
}