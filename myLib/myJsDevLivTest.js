/**
 * メイン処理
 */
$(function(){
	TestToChangeTextBool();
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
 * classから指定した添え字の要素を取得に関するテスト
 */
function TestGetSelectClassDom(){
    // クラスが存在しない場合
    console.log("クラスが存在しない場合");
    console.log(GetSelectClassDom($(".none"),1));

    // 添え字の値が無効値の場合
    console.log("添え字の値が無効の場合");
    console.log(GetSelectClassDom($(".classTest"),-1));
    console.log(GetSelectClassDom($(".classTest"),3));

    // 正常時の場合
    console.log("正常時の場合");
    console.log(GetSelectClassDom($(".classTest"),0).text());
}

/**
 * 文字列からboolに変換する処理のテストケース
 */
function TestToChangeTextBool(){
	// 引数がnullの場合
	console.log("引数がnullの場合");
	console.log(ToChangeTextBool(null));

	// 引数が文字列以外の場合
	console.log("引数が文字列以外の場合");
	console.log("1:" + ToChangeTextBool(1));
	console.log("true" + ToChangeTextBool(true));

	// 引数が文字列のTrueの場合
	console.log("引数が文字Trueの場合");
	console.log("'true'" + ToChangeTextBool('true'));

	// 引数が文字列のTRUEの場合
	console.log("引数が文字列のTRUEの場合");
	console.log("'TRUE'" + ToChangeTextBool('TRUE'));

	// 引数が文字列のFalseの場合
	console.log("引数が文字列のFalseの場合");
	console.log("'FALSE'" + ToChangeTextBool('FALSE'));
}