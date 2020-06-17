$(function(){
	var drag_target = null;
	$(window).mousemove(function(e) {
		if (drag_target != null) {
			//ドラッグ中による列幅変更。
			var th_width = e.clientX - parseInt($(drag_target).offset().left);
			drag_target.css({ width: th_width + 'px' });
			//tableのサイズも変更する。
			//var tbl_width = th_width - parseInt(drag_target.css("width"));
			//var tbl_new_width = parseInt($(sheet_nm).css("width")) + tbl_width;
			//$(sheet_nm).css({ width: tbl_new_width + 'px' });
			return false;
		}
		return true;
	});//[[ mousemove
	$( "th").mousemove(function(e) {
		var right = parseInt($(this).offset().left) + parseInt($(this).css("width"));
		//マウスカーソルの図柄変更。
		if ((right - 10) < e.clientX) {
			if (e.clientX < (right + 10)) {
				//右端に位置する場合はリサイズカーソルにする。
				$(this).css({ cursor: 'col-resize' });
				return false;
			}
		}
		$(this).css({ cursor: 'default' });
		return true;
	});//[[ mousemove
	$( "th").mousedown(function(e) {
		//マウスカーソルの図柄変更。
		if ($(this).css('cursor') == 'col-resize') {
			//ドラッグ開始。
			drag_target = $(this);
			$(document.body).css({ cursor: 'col-resize' });
			return false;
		}
		return true;
	});//[[ mousedown
	$(window).mouseup(function(e) {
		//ドラッグ解除。
		drag_target = null;
		$(document.body).css({ cursor: '' });
	});//[[ mouseup})
});
