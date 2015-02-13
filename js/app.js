(function() {
	$(document).ready($(function () {
		$('#channel-query').submit(function(event){
			alert('yo');
			var params = {
				channel: $('#channel-name').val(),
				metrics: 'viewerPercentage',
				dimensions: 'ageGroup,gender',
				startDate: '2014-01-01',
				endDate: '2015-01-01',
				filters: 'country==US',
				key: 'AIzaSyBVUT3sQiKxHRHRnwUpgITHhFb9JefIWIY',
			}
				$.ajax({
					type: 'GET',
					url: 'https://www.googleapis.com/youtube/analytics/v1/reports',
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