import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from 'recharts';
// import githubData from '../../helpers/data/githubData';


class Graph extends React.Component {
  static propTypes = {
    githubUsername: PropTypes.string,
    githubToken: PropTypes.string,
    allItems: PropTypes.array,
    gitHubChartData: PropTypes.array,
    graphData: PropTypes.func,
  };


  render() {
    const { gitHubChartData, graphData } = this.props;
    console.log(gitHubChartData);
    graphData();
    return (
      <LineChart width={1350} height={200} data={gitHubChartData}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="commits" stroke="#8884d8" />
        <Line type="monotone" dataKey="articleCount" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default Graph;
