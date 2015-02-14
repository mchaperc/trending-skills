(function() {
	$(document).ready($(function () {
		$('#term-query').submit(function(event){
			var params = {
				like: $('#like').val(),
				countries: $('#countries').val(),
				dateFrom: $('#dateFrom').val(),
				dateTo: $('#dateTo').val(),
				key: 'TTeZJQPWkFvyyXVB'
			}
				$.ajax({
					type: 'GET',
					url: 'trendyskills.com/service?q=',
					data: params,
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: function(data) {
						console.log(data);
					},
					fail: function(error) {
						console.log("error: " + error);
					}
				});
			console.log(params);
		event.preventDefault();
		});
	}))
}())