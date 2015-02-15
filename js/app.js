(function() {
	$(document).ready($(function () {
		$('#term-query').submit(function(event){
			var params = {
				like: $('#like').val(),
				key: 'TTeZJQPWkFvyyXVB'
			}

			var url = 'trendyskills.com/service?q=keywords';
			
			var results = $.ajax({
			  url: url,
			  data: params,
			  // success: success,
			  dataType: 'json'
			});

			console.log(results);

			console.log(params);
		event.preventDefault();
		});
	}))
}())