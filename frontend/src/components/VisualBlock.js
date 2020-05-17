import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasJs/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];
class VisualBlock extends Component {
  render() {
    const options = {
      animantionEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title: {
        text: "CoronaVirus Tracker Andhra Pradesh",
      },
      axisX: {
        title: "Days",
        interval: 2,
      },
      axisY: {
        title: "No.of Cases",
        includeZero: false,
      },
      data: [
        {
          type: "line",
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "##,##0",
          dataPoints: dataPoints,
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          onRef={(ref) => (this.chart = ref)}
        ></CanvasJSChart>
      </div>
    );
  }
  componentDidMount() {
    var chart = this.chart;
    fetch("https://covid-india-cases.herokuapp.com/statetimeline/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var stateData = [];
        for (var i in data) {
          stateData.push(data[i]);
        }
        var tamilNadu = stateData.filter((item) => {
          return item["State UT"] === "Andhra Pradesh";
        });
        console.log(tamilNadu[0]);
        return tamilNadu;
      })
      .then((tamilNadu) => {
        var keys_ext = Object.keys(tamilNadu[0]).slice(0, -1);
        var final_keys = keys_ext;
        var values_ext = Object.values(tamilNadu[0]).slice(0, -1);
        var final_val = values_ext;
        for (var i = 0; i < final_keys.length; i++) {
          dataPoints.push({
            x: new Date(final_keys[i]),
            y: final_val[i],
          });
        }
        chart.render();
      });
  }
}

export default VisualBlock;
