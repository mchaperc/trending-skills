(function() {
	$(document).ready($(function () {
		$('#term-query').submit(function(event){
			$('.results').html('');
			var params = {
				like: $('#like').val(),
				key: 'TTeZJQPWkFvyyXVB'
			};

			var url = 'http://trendyskills.com/service?q=keywords&like=' + params.like + '&key=' + params.key;
			
			var returnData = [];

			var total = 0;

			var results = $.ajax({
			  url: url,
			  dataType: 'jsonp',
			  success: function (response) {
				$.each(response.keywords, function(index, value) {
					// var temp = [value.keyName, value.id];
					// returnData.push(temp);
					$('.results').append('<p>' + value.keyName + ": " + '<span>' + value.id + '</span' + '</p>');
				})
				// for (var i = 0; i < returnData.length; i++) {
				// 	total += returnData[i][1];
				// }
				// $(function () {

			 //    // Radialize the colors
			 //    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
			 //        return {
			 //            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
			 //            stops: [
			 //                [0, color],
			 //                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
			 //            ]
			 //        };
			 //    });

			 //    // Build the chart
			 //    $('.results').highcharts({
			 //        chart: {
			 //            plotBackgroundColor: null,
			 //            plotBorderWidth: null,
			 //            plotShadow: false
			 //        },
			 //        title: {
			 //            text: 'Jobs meeting the following keyword: ' + params.like
			 //        },
			 //        tooltip: {
			 //            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			 //        },
			 //        plotOptions: {
			 //            pie: {
			 //                allowPointSelect: true,
			 //                cursor: 'pointer',
			 //                dataLabels: {
			 //                    enabled: true,
			 //                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
			 //                    style: {
			 //                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
			 //                    },
			 //                    connectorColor: 'silver'
			 //                }
			 //            }
			 //        },
			 //        series: [{
			 //            type: 'pie',
			 //            name: 'Jobs',
			 //            data: [
			 //            	[returnData[0][0], ((total / returnData[0][1])*100)],
			 //            	[returnData[1][0], ((total / returnData[1][1])*100)],
			 //            	[returnData[2][0], ((total / returnData[2][1])*100)],
			 //            	[returnData[3][0], ((total / returnData[3][1])*100)],
			 //            	[returnData[4][0], ((total / returnData[4][1])*100)],

			 //            	]
			 //        }]
			 //    });
				$('.results').fadeIn(1500);
			}
		});
		
		event.preventDefault();
		});
	}))
}())