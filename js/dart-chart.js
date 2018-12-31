//[Master Javascript]

//Project:	Divine Art - Multipage Html Responsive Template
//Version:	1.1
//Last change:	17/03/2017
//Primary use:	Divine Art - Multipage Html Responsive Template 


//Template script here

jQuery(window).load( function(){
		
	/*------- Line Chart--------*/
		var lineChartData = {
            labels: ["January","February","March","April","May","June","July"],
            datasets: [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [28,48,40,19,96,27,100]
				},
				{
					fillColor : "rgba(200,147,165,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [50,68,17,57,24,96,100]
				}
			]
		
        }
        var myLine = new Chart(document.getElementById("dart-line-chart").getContext("2d")).Line(lineChartData);
		
			
	});


