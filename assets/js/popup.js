(function(window, jQuery){

	$(document).ready(function() {
		$("#value").on("keyup", function(){
			if($(this).val() != ""){
				$("#submit").removeAttr("disabled");
			} else {
				$("#submit").attr("disabled", "");
			}
		})
		$("#submit").click(function() {
			var value = $("#value").val();
			localStorage.setItem('client_value',value);
			chrome.extension.sendMessage({
				msg: "start"
			}, function(response) {
				console.log(response);
			});
			window.close();
		});
	});
})(window, $);