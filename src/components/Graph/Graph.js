import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Legend,
} from 'recharts';

class Graph extends React.Component {
  static propTypes = {
    gitHubChartData: PropTypes.array,
    graphData: PropTypes.func,
  };

  componentDidMount() {
    this.props.graphData();
  }

  render() {
    const { gitHubChartData } = this.props;
    return (
      <LineChart width={1350} height={200} data={gitHubChartData}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="commits" stroke="#8884d8" />
        <Line type="monotone" dataKey="itemCount" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default Graph;
