import React from "react";
import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  LineSeries
} from "react-jsx-highcharts";

const plotOptions = {
  series: {
    pointStart: 2016
  }
};

const Graph = () => (
  <div className="app">
    <HighchartsChart plotOptions={plotOptions}>
      <Chart />

      <Title>Finances during 2016</Title>
      <Legend layout="vertical" align="right" verticalAlign="middle" />

      <XAxis>
        <XAxis.Title>Time</XAxis.Title>
      </XAxis>

      <YAxis>
        <YAxis.Title>Finances</YAxis.Title>
        <LineSeries
          name="Credit"
          data={[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]}
        />
        <LineSeries
          name="Debit"
          data={[24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]}
        />
        <LineSeries
          name="Balance"
          data={[11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]}
        />
      </YAxis>
    </HighchartsChart>
  </div>
);

export default withHighcharts(Graph, Highcharts);
