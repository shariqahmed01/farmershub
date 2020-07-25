
window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "Land of farmer"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 65.00, label: " Red sandy loams(chalka) "},
			{y: 15.00, label: "Red loamy sands(Dubba)"},
			{y: 7.06, label: "Lateritic soil"},
			{y: 4.91, label: "Black cotton soil"},
			{y: 8.3, label: "Others"}
		]
	}]
});
chart.render();

}