(function() {
	$(document).ready($(function () {
		$('#term-query').submit(function(event){
			var params = {
				like: $('#like').val(),
				key: 'TTeZJQPWkFvyyXVB'
			}

			alert(params.like);

			var url = 'http://trendyskills.com/service?q=keywords&like=' + params.like + '&key=' + params.key;
			
			var results = $.ajax({
			  url: url,
			  // success: success,
			  dataType: 'json'
			});

			console.log(results);

			console.log(params);
		event.preventDefault();
		});
	}))
}())