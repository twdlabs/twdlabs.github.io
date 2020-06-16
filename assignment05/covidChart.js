// to view raw Covid19api summary data, visit
// https://api.covid19api.com/summary

// declare-initialize global variables
var URL = "https://api.covid19api.com/summary";
var covidJson;
var newConfirmedOver1000;

// load API content into variables
// code below modified from: 
// https://www.w3schools.com/js/js_ajax_intro.asp
function loadContent() {
  // send AJAX call
  var xhttp = new XMLHttpRequest();
  // when ready...
  xhttp.onreadystatechange = function() {
    // if (when) AJAX call is successful...
    if (this.readyState == 4 && this.status == 200) {
      
      // convert data to JSON object
      covidJson = this.responseText;
      covidJson = JSON.parse(covidJson);
      
      // loop through countries in API summary
      // instead: write code to use filter() method!
      newConfirmedOver1000 = [];
	    for (let c of covidJson.Countries) {
        if (c.NewConfirmed > 1000) {
          newConfirmedOver1000.push({ 
            "Slug": c.Slug, 
            "NewConfirmed": c.NewConfirmed, 
            "NewDeaths": c.NewDeaths
          });
        }
      }

      chartData.data.datasets[0].backgroundColor = 
        "rgba(100,100,100,0.4)";
      chartData.data.datasets[1].backgroundColor = 
        "rgba(255,0,0,0.4)";
      chartData.data.datasets[0].label = 
        'new cases';
      chartData.data.datasets[1].label = 
        'new deaths';
      chartData.data.labels = 
        newConfirmedOver1000.map( (x) => x.Slug );
      chartData.data.datasets[0].data = 
        newConfirmedOver1000.map( (x) => x.NewConfirmed );
      chartData.data.datasets[1].data = 
        newConfirmedOver1000.map( (x) => x.NewDeaths );
      var myChart = new Chart(ctx, chartData); 

    }
  };
  xhttp.open("GET", URL, true);
  xhttp.send();
}

// code below modified from :
// https://www.sitepoint.com/introduction-chart-js-2-0-six-examples/
var ctx = document.getElementById('myChart').getContext('2d');
var chartData = {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          maxTicksLimit: 11,
          callback: function(label, index, labels) {
            return (   label/1000 > 9 
                    || label/1000 == 1 
                    || label/1000 == 0.1 
                    || label/1000 == 0.01) 
              ? label/1000+'k' :  "";
          }
        },
        scaleLabel: {
          display: true,
          labelString: '1k = 1000'
        },
        type: "logarithmic"
      }]
    }
  }
};
var myChart = new Chart(ctx, chartData); 
// note: logarithmic scale ignores maxTicksLimit




// Note: you can't execute API data dependent code here because the code might execute before the AJAX call responds, that is, it might execute before the variable, covidJson, is initialized with data from the API

// console.log(covidJson.Global.NewConfirmed); // error 