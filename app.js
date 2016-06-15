$(document).ready(function () {
	
	var comment = function (text) {
		return "<li>" + text + "</li>";
	};

	$("#btn").submit(function () {
		 
		 var usr = $("#text").val();

		if (usr !== "") {
			var com = comment(usr);
			com.append("#box");
			$("#text").val("");
		}
		return false;
	});

});