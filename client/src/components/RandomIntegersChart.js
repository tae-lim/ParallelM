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
    const dp = {
      label: date,
      y: integer
    }
    dps.push(dp);
    this.chart.render();
  }

	render() {
		const options = {
      animationEnabled: true,
      exportEnabled: true,
			title :{
        text: "Random Number Generator: 0 - 100",
      },
      axisY: {
        title: "Number"
      },
      axisX: {
        title: "Date"
      },
			data: [{
        type: "line",
        toolTipContent: "{label}: {y}",
				dataPoints : dps
      }],
      zoomEnabled: true
    }
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default RandomIntegersChart;