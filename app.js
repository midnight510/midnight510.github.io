$(document).ready(function() {
	
	var comment = function(text) {
		return '<li> + text + </li>';
	};

	$('#btn').submit(function(){
		var usr = $('#text');

		if (usr !== '') {
			var com = comment(usr.val());
			com.appendTo('.box');
			$('#text').val('');
		}
		return false;
	});

});