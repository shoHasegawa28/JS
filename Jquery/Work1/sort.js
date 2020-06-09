//表の要素値ソート
$(function(){
	$("#sortable").sortable({
		update: function(event,ui){
			$('#sortable').children('tr').each(function(index){
				$(this).children('td').children('input').val(index);
			})
		}
	}
	);
});
