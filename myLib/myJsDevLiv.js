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
/**
 * Classから指定した要素を取得する 
 * @param {*} $class 対象のclass 
 * @param {*} idx 添え字
 */
function GetSelectClassDom($class,idx){
	// Nullチェック
	if(!CehckNullElement($class)){
		return false;
	}

	// 添え字が有効値がどうかの判定
	if(!CheckRange(idx,0,$class.length)){
		return false
	}

	// 指定した要素を戻どす
	return $($class[idx]);
}

/**
 * 文字列のtrueをbool型で判定する処理 
 * @param {string} text 文字列のbool
 * @returns (True:text = "true")の場合, False (text != "true")の場合 
 */
function ToChangeTextBool(text){

	// 引数がnullではないかどうかの判定
	if(!CehckNullElement(text)){
		return false;
	}

	// 文字列を大文字に変換後Trueかどうかの判定を行う
	return (String(text).toUpperCase() == 'TRUE');
}