/**
 * メイン処理
 */
$(function(){
	TestLike();
});

/**
 * TestEqualDomTextのテスト
 */
function TestEqualDomText(){

	// dom要素が存在しない場合
	console.log("dom要素がnullの場合のテスト");
	console.log(EqualDomText(null,"test"));
	console.log(EqualDomText(undefined,"test"));

	// dom要素にtext属性がない場合??
	console.log("text属性が存在する場合のテスト");
	console.log(EqualDomText($("#test"),"test"));

	// dom要素の値と一致する場合
	console.log("dom要素が一致するテスト");
	console.log(EqualDomText($("#test2"),"domテスト"));
	
	// dom要素の値と不一致の場合
	console.log("dom要素が不一致テスト");
	console.log(EqualDomText($("#test2"),"test"));

}

/**
 * nodeのtext属性と文字列を比較する (完全一致)
 * @param {object} $elm 比較対象のDom要素
 * @param {string} text 比較対象の文字列
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
 * Likeのテストケース
 */
function TestLike(){

	console.log("検索文字列がnullの場合");
	console.log(Like(null,"test",0));

	console.log("指定した検索パターンが範囲外の場合");
	console.log(Like("test","test2",-1));
	console.log(Like("test","test2",3));

	console.log("検索文字列がnullの場合");
	console.log(Like("test",null,0));

	console.log("前方一致マッチテスト\n");
	console.log("部分一致テスト");
	TestLikeMathTest("testABC123","ABC","ABC2",0);

	console.log("前方一致テスト");
	TestLikeMathTest("testABC123","test","123",1);

	console.log("後方一致テスト");
	TestLikeMathTest("testABC123","123","test",2);
}

/**
 * Likeの一致するパターンと不一致のパターンに関するテスト
 * @param {*} targetStr テスト対象の文字列 
 * @param {*} searchStr テスト対象の検索文字列
 * @param {*} notMatchCase テスト時の不一致ケース
 * @param {*} type テスト対象の値
 */
function TestLikeMathTest(targetStr,searchStr,notMatchCase,type){
	// 一致ケース
	console.log("一致パターン");
	console.log(targetStr + ":" + searchStr);
	console.log(Like(targetStr,searchStr,type));

	// 不一致ケース
	console.log("不一致パターン");
	console.log(targetStr + ":" + notMatchCase);
	console.log(Like(targetStr,notMatchCase,type));
}

/**
 * 対象の文字列に対して特定一致検索を行う処理 
 * @param {*} targetStr 対象の文字列
 * @param {*} searchStr 検索文字列
 * @param {*} type 　検索パターン 0:部分一致,1:前方一致,2:後方一致
 * @returns true:検索パターンに一致した場合,\nfalse 検索パターンに不一致の場合
 */
 function Like(targetStr,searchStr,type){
	 // 検索パターンの定義
	const matchType = ["^(?=.*_).*$","^_.*$",".*_$"];
	
	// 入力値チェック
	if(!CheckRange(type,0,matchType.length)){
		return false;
	}

	// 対象の文字列のnullチェック
	if(!CehckNullElement(targetStr)){
		return false;
	}

	//検索文字列を検索パターンに変換する
	let repSearch = matchType[type].replace("_",searchStr);
	//　返還後のDebug用
	//　console.log(repSearch)

	// 指定したパターンで検索対象の比較を行う
	return targetStr.match(repSearch) != null;
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
		console.log(name + "はこのNodeには存在してません!!");
		return false;
	}
	return true;
}

/**
 * 指定したインデックスが範囲内かどうかの判定
 * @param {*} targetIdx 検査の値
 * @param {*} startIdx 範囲の最低値
 * @param {*} endIdx 範囲の最大値
 * @returns True:範囲内の場合 False:範囲外の場合
 */
function CheckRange(targetIdx,startIdx,endIdx){
	if(startIdx > targetIdx || targetIdx >= endIdx){
		console.log(targetIdx + "は範囲外だよぉーん");
		return false;
	}
	return true;
}