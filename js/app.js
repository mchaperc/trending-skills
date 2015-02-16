(function() {
	$(document).ready($(function () {
		$('#term-query').submit(function(event){
			var params = {
				like: $('#like').val(),
				key: 'TTeZJQPWkFvyyXVB'
			};

			var url = 'http://trendyskills.com/service?q=keywords&like=' + params.like + '&key=' + params.key;
			
			var results = $.ajax({
			  url: url,
			  dataType: 'jsonp',
			});

			// $(function () {

			//     // Radialize the colors
			//     Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
			//         return {
			//             radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
			//             stops: [
			//                 [0, color],
			//                 [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
			//             ]
			//         };
			//     });

			//     // Build the chart
			//     $('.results').highcharts({
			//         chart: {
			//             plotBackgroundColor: null,
			//             plotBorderWidth: null,
			//             plotShadow: false
			//         },
			//         title: {
			//             text: 'Jobs meeting the following keyword: ' + params.like
			//         },
			//         tooltip: {
			//             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			//         },
			//         plotOptions: {
			//             pie: {
			//                 allowPointSelect: true,
			//                 cursor: 'pointer',
			//                 dataLabels: {
			//                     enabled: true,
			//                     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
			//                     style: {
			//                         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
			//                     },
			//                     connectorColor: 'silver'
			//                 }
			//             }
			//         },
			//         series: [{
			//             type: 'pie',
			//             name: 'Jobs',
			//             data: [
			//                 ['Firefox',   45.0],
			//                 ['IE',       26.8],
			//                 {
			//                     name: 'Chrome',
			//                     y: 12.8,
			//                     sliced: true,
			//                     selected: true
			//                 },
			//                 ['Safari',    8.5],
			//                 ['Opera',     6.2],
			//                 ['Others',   0.7]
			//             ]
			//         }]
			//     });
			// });

			console.log(results);

		event.preventDefault();
		});
	}))
}())