import React from 'react';

import CanvasJSReact from '../lib/canvasjs-2.3.1/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const dps = [];
class RandomIntegersChart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    const prevDate = prevProps.date;
    const currDate = this.props.date;
    const integer = this.props.integer;

    if (!this.datesAreEqual(prevDate, currDate)) {
      this.updateChart(currDate, integer)
    }
  }

  datesAreEqual(date1, date2) {
    return date1 === date2;
  }

  updateChart(date, integer) {
    const dateAndTime = date.split(', ');
    const MDY = dateAndTime[0];
    const time = dateAndTime[1];
    const dp = {
      label: time,
      y: integer,
      date: MDY
    }
    this.chart.options.data[0].dataPoints.push(dp);
    this.chart.render();
  }

  render() {
    //Animation enabled only renders first set of datapoints when chart is instantiated.
    //https://canvasjs.com/forums/topic/how-to-re-render-with-animation/
    const options = {
      title :{
        text: "Random Number Generator",
      },
      //animationEnabled: true,
      theme: "light2",
      axisY: {
        title: "Number"
      },
      axisX: {
        title: "Date"
      },
      subtitles: [{
        text: "0 - 100",
        fontSize: 20
      }],
      data: [{
        type: "line",
        toolTipContent: "{date}: {y}",
        dataPoints: dps
      }],
      exportEnabled: true,
      zoomEnabled: true
    }
    return (
      <div className="random-integers-chart-container">
        <CanvasJSChart options = {options}
          onRef={ref => this.chart = ref}
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default RandomIntegersChart;