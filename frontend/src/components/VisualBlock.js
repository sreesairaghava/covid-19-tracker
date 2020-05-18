import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasJs/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];
class VisualBlock extends Component {
  state = {
    stateNames: [],
  };
  render() {
    const options = {
      animantionEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title: {
        text: `Coronavirus Tracker ${this.state.stateNames[20]}`,
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
        var stateNames = [];
        for (var i in data) {
          stateData.push(data[i]);
        }
        for (var j in data) {
          stateNames.push(Object.values(data[j]).pop());
        }
        this.setState(() => ({
          stateNames: stateNames,
        }));
        console.log(this.state.stateNames);
        var singleState = stateData.filter((item) => {
          return item["State UT"] === `${stateNames[20]}`;
        });
        console.log(singleState[0]);
        return singleState;
      })
      .then((singleState) => {
        var keys_ext = Object.keys(singleState[0]).slice(0, -1);
        var final_keys = keys_ext;
        var values_ext = Object.values(singleState[0]).slice(0, -1);
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
