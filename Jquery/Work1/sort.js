//表の要素値ソート
$(function(){
	$("#sortable").sortable({
		update: function(event,ui){
			$('#sortable tr').each(function(index){
				$(this).children('td').children('input').val(index);
			})
		}
	}
	);
});
