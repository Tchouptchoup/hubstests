import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import Papa from "papaparse";
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

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getCsvData();
  }

  getData(result) {
    this.setState({ data: result.data });
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();

    Papa.parse(csvData, {
      complete: this.getData
    });
  }

  fetchCsv() {
    return fetch("/data-graph.csv").then(function(response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(function(result) {
        return decoder.decode(result.value);
      });
    });
  }

  render() {
    const { data } = this.state;
    const datas =
      data &&
      data.slice(1).reduce(
        (carry, item) => {
          carry.date.push(item[0]);
          carry.credit.push(parseInt(item[1]));
          carry.debit.push(parseInt(item[2]));
          carry.balance.push(parseInt(item[3]));
          return carry;
        },
        {
          date: [],
          credit: [],
          debit: [],
          balance: []
        }
      );
    console.log(datas);
    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <HighchartsChart>
                <Chart />

                <Title>Finances during 2016</Title>
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                />

                <XAxis>
                  <XAxis.Title>Time</XAxis.Title>
                  <LineSeries name="Time" data={datas.date} />
                </XAxis>

                <YAxis>
                  <YAxis.Title>Finances</YAxis.Title>
                  <LineSeries name="Credit" data={datas.credit} />
                  <LineSeries name="Debit" data={datas.debit} />
                  <LineSeries name="Balance" data={datas.balance} />
                </YAxis>
              </HighchartsChart>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default withHighcharts(Graph, Highcharts);
