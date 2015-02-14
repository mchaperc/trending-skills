(function() {
	$(document).ready($(function () {
		$('#term-query').submit(function(event){
			var params = {
				like: $('#like').val(),
				key: 'TTeZJQPWkFvyyXVB'
			}
			
			var result = $.ajax({
					type: 'GET',
					url: 'trendyskills.com/service?q=',
					dataType: 'jsonp',
					data: params
				});

			console.log(result);

			console.log(params);
		event.preventDefault();
		});
	}))
}())