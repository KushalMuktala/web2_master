
'use strict';

$(function() {
    
    // Update the Traffic cell
    $.getJSON('/api/stats/traffic', function( data ) { 
        //console.log( ' -> ' + data['traffic'] ) 
        $('#stats_traffic').html( data['traffic'] );
    });

    // Update the Users cell
    $.getJSON('/api/stats/users', function( data ) { 
        //console.log( ' -> ' + data['traffic'] ) 
        $('#stats_users').html( data['users'] );
    });

    // Update the Sales cell
    $.getJSON('/api/stats/sales', function( data ) { 
        //console.log( ' -> ' + data['traffic'] ) 
        $('#stats_sales').html( data['sales'] );
    });

    // Update the Perf cell
    $.getJSON('/api/stats/perf', function( data ) { 
        //console.log( ' -> ' + data['traffic'] ) 
        $('#stats_perf').html( data['perf'] );
    });

});

const dataSource = {
    chart: {
      caption: "Nordstorm's Customer Satisfaction Score for 2017",
      lowerlimit: "0",
      upperlimit: "100",
      showvalue: "1",
      numbersuffix: "%",
      theme: "fusion",
      showtooltip: "0"
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "50",
          code: "#047F9D"
        },
        {
          minvalue: "50",
          maxvalue: "75",
          code: "#FFC533"
        },
        {
          minvalue: "75",
          maxvalue: "100",
          code: "#62B58F"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: "81"
        }
      ]
    }
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "angulargauge",
      renderAt: "chart-container",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
    }).render();
  });
  